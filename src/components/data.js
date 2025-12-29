import {
  EyeIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/tattoo6.jpg";
import benefitTwoImg from "../../public/img/tattoo7.jpg";

const benefitOne = {
  title: "We are committed to provide you the best tattoo experience",
  desc: "The Ink Room offers a unique blend of creativity, hygiene, and customer satisfaction. Our skilled artists work closely with you to bring your tattoo ideas to life in a safe and welcoming environment.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Best Female Tattoo Artist in Kolkata",
      desc: "Soniya brings years of experience, artistic precision, and a deep understanding of what female clients truly want — from delicate fine-line work to bold statement pieces. Many women choose us because they feel truly comfortable and heard.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Hygiene & Safety Above Everything",
      desc: "Single-use needles, hospital-grade sterilization, fresh ink caps every time. We follow international safety protocols so you can relax completely — making us one of the most trusted tattoo parlours in Kolkata.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "100% Custom & Creative Designs",
      desc: "No cookie-cutter tattoos. We collaborate closely with you to create something truly yours — minimal, realism, traditional, geometric, floral, script — whatever speaks to your soul. ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Best Female Tattoo Artist in Kolkata",
  desc: "Soniya is renowned for her exceptional tattoo artistry and commitment to client satisfaction. With a keen eye for detail and a passion for creativity, she has established herself as one of the leading female tattoo artists in Kolkata.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Single-Use Equipment Only",
      desc: "Every needle, grip, and tip is brand new and disposed of immediately after your session. Autoclave sterilization + ultrasonic cleaning for all reusable tools. ",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Multiple Styles Mastered",
      desc: "Fine line, realism, minimal, neo-traditional, geometric, floral, script — we do it all with precision. We keep refining the design until you're 100% in love with it — no extra charges.",
      icon: <EyeIcon />,
    },
    {
      title: "At home services",
      desc: "We provide convenient at-home tattoo services, bringing our expertise directly to your doorstep. Detailed 1-on-1 sessions to understand your vision before we even start sketching.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
