"use client";
import React, { useEffect, useId, useRef, useState } from "react";

type Fields = {
  name: string;
  phone: string;
  email: string;
  idea: string;
  size: string;
  placement: string;
  date: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = {
  name: "",
  phone: "",
  email: "",
  idea: "",
  size: "",
  placement: "",
  date: "",
};

// Order matters: the first invalid field in this list receives focus.
const fieldOrder: (keyof Fields)[] = [
  "name",
  "phone",
  "email",
  "idea",
  "size",
  "placement",
  "date",
];

/** Local date as YYYY-MM-DD, matching the value format of <input type="date">. */
function today() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) errors.name = "Please enter your name.";

  const digits = fields.phone.replace(/\D/g, "");
  if (!fields.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+\d\s()-]+$/.test(fields.phone) || digits.length < 10 || digits.length > 13) {
    errors.phone = "Please enter a valid phone number, e.g. 98765 43210.";
  }

  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address, or leave it blank.";
  }

  if (!fields.idea.trim()) errors.idea = "Please describe your tattoo idea.";

  if (fields.size.trim()) {
    const size = Number(fields.size);
    if (!Number.isFinite(size) || size <= 0) {
      errors.size = "Please enter the size as a number of inches, or leave it blank.";
    }
  }

  if (fields.date && fields.date < today()) {
    errors.date = "Please choose a date from today onwards, or leave it blank.";
  }

  return errors;
}

const inputClass =
  "w-full px-4 py-3 text-neutral-100 placeholder-neutral-600 bg-neutral-950 border rounded-md transition-colors focus:outline-none focus-visible:ring focus-visible:ring-red-600 focus-visible:ring-opacity-75";

interface BookingFormProps {
  whatsappHref: string;
}

/**
 * Enquiry form posted straight to Web3Forms from the browser — no API route.
 * WhatsApp stays the primary contact; this is the alternative for anyone who
 * would rather not message.
 */
export const BookingForm = ({ whatsappHref }: Readonly<BookingFormProps>) => {
  const id = useId();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [botcheck, setBotcheck] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const fieldRefs = useRef<Partial<Record<keyof Fields, HTMLInputElement | HTMLTextAreaElement | null>>>({});
  const successRef = useRef<HTMLHeadingElement>(null);
  // Set after mount: the server renders in UTC, so computing "today" during
  // render could disagree with the visitor's date and break hydration.
  const [minDate, setMinDate] = useState<string>();
  useEffect(() => setMinDate(today()), []);

  const fieldId = (name: keyof Fields) => `${id}-${name}`;
  const errorId = (name: keyof Fields) => `${id}-${name}-error`;

  const update =
    (name: keyof Fields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((current) => ({ ...current, [name]: event.target.value }));
      // Clear a field's error as soon as the user starts correcting it.
      if (errors[name]) {
        setErrors((current) => ({ ...current, [name]: undefined }));
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    const firstInvalid = fieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setStatus("submitting");

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      subject: "New tattoo enquiry from theinkroom.in",
      from_name: "The Ink Room website",
      botcheck,
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      // Optional fields are left out entirely when blank, so the enquiry
      // email only lists what the client actually filled in.
      ...(fields.email.trim() && { email: fields.email.trim() }),
      tattoo_idea: fields.idea.trim(),
      ...(fields.size.trim() && { size_inches: fields.size.trim() }),
      ...(fields.placement.trim() && { placement: fields.placement.trim() }),
      ...(fields.date && { preferred_date: fields.date }),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setFields(emptyFields);
        setStatus("success");
        // Wait for the success panel to render before moving focus to it.
        requestAnimationFrame(() => successRef.current?.focus());
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
        <h3
          ref={successRef}
          tabIndex={-1}
          className="text-2xl font-serif font-bold text-neutral-100 mb-3 focus:outline-none"
        >
          Thanks, your enquiry is in.
        </h3>
        <p className="text-neutral-400 leading-relaxed">
          You will hear back with a quote and available dates. Have a reference
          image?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            Send it on WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-3 text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const label = (name: keyof Fields, text: string, optional = false) => (
    <label htmlFor={fieldId(name)} className="block mb-2 text-sm font-bold text-neutral-100">
      {text}
      {optional && <span className="font-normal text-neutral-500"> (optional)</span>}
    </label>
  );

  const errorText = (name: keyof Fields) =>
    errors[name] && (
      <p id={errorId(name)} className="mt-2 text-sm text-red-500">
        {errors[name]}
      </p>
    );

  // Shared props for every input: wiring for refs, value, and the
  // aria-invalid / aria-describedby link to its error message.
  const control = (name: keyof Fields) => ({
    id: fieldId(name),
    name,
    value: fields[name],
    onChange: update(name),
    ref: (element: HTMLInputElement | HTMLTextAreaElement | null) => {
      fieldRefs.current[name] = element;
    },
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
    className: `${inputClass} ${
      errors[name] ? "border-red-600" : "border-neutral-800 focus:border-neutral-600"
    }`,
  });

  return (
    <form
      aria-label="Tattoo booking enquiry"
      noValidate
      onSubmit={handleSubmit}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-serif font-bold text-neutral-100 mb-2">
        Prefer a form?
      </h3>
      <p className="text-neutral-400 leading-relaxed mb-8">
        Tell us about your idea and you will hear back with a quote and
        available dates.
      </p>

      {/* Web3Forms honeypot: hidden with CSS so bots still find and fill it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(event) => setBotcheck(event.target.checked)}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          {label("name", "Name")}
          <input type="text" autoComplete="name" required {...control("name")} />
          {errorText("name")}
        </div>

        <div>
          {label("phone", "Phone")}
          <input type="tel" autoComplete="tel" inputMode="tel" required {...control("phone")} />
          {errorText("phone")}
        </div>

        <div className="sm:col-span-2">
          {label("email", "Email", true)}
          <input type="email" autoComplete="email" {...control("email")} />
          {errorText("email")}
        </div>

        <div className="sm:col-span-2">
          {label("idea", "Tattoo idea / description")}
          <textarea rows={4} required {...control("idea")} />
          {errorText("idea")}
        </div>

        <div>
          {label("size", "Approximate size in inches", true)}
          <input type="number" inputMode="decimal" min="0" step="0.5" {...control("size")} />
          {errorText("size")}
        </div>

        <div>
          {label("placement", "Placement on body", true)}
          <input type="text" {...control("placement")} />
          {errorText("placement")}
        </div>

        <div>
          {label("date", "Preferred date", true)}
          <input type="date" min={minDate} {...control("date")} />
          {errorText("date")}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-8 text-red-500">
          Sorry, your enquiry could not be sent. Please try again, or message
          us on WhatsApp instead.
        </p>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-10 py-4 text-lg font-medium text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md disabled:opacity-60 disabled:cursor-wait disabled:hover:border-neutral-700 disabled:hover:text-neutral-200"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="mt-4 text-sm text-neutral-400">
          Have a reference image? Send it on{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            WhatsApp
          </a>{" "}
          after submitting.
        </p>
      </div>
    </form>
  );
};
