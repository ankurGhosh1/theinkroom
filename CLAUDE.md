# The Ink Room — content rules

## The studio

- One-artist custom tattoo studio in Behala, Kolkata. Artist: Soniya.
- All-female studio. Appointment only. Studio sessions and at-home sessions.
- Styles: fine line, script, floral, geometric, minimal. All custom, no flash.
- Phone/WhatsApp: +91 89612 48160
- Positioning: private, unhurried, women-first. NOT the cheapest, NOT a walk-in chain.

## Never invent

Do not write any of the following unless it is given to you in the prompt or already
exists in the codebase:

- Prices, rates, deposit amounts, session durations
- Number of tattoos done, years of experience, review counts, ratings
- Client names, client stories, testimonials, case studies
- Awards, certifications, training credentials
- Statistics, survey data, "studies show" claims

If a section needs one of these and you weren't given it, insert
`<!-- TODO: Ankur to supply -->` and move on. Never estimate a plausible-looking number.

## Writing rules

- Write for a nervous first-timer, not for Google. Plain English, short sentences.
- No superlatives we can't back up. Never "best in Kolkata", "award-winning", "renowned".
- No stock-marketing filler: "unleash your story", "journey", "canvas of self-expression".
- Second person. Direct. Answer the question in the first paragraph, then expand.
- Indian English, INR, Kolkata-specific references where they genuinely apply.
- Length should fit the topic. Never pad to hit a number. If a post says what it needs
  to say in 900 words, ship 900 words. If it needs 2,500, write 2,500.

## SEO rules

- One H1 per page, containing the primary keyword naturally.
- Primary keyword in the first 100 words, the title tag, and the meta description.
- Do not keyword-stuff. If a phrase reads awkwardly, rewrite the sentence.
- Meta title under 60 characters. Meta description 140-155 characters.
- Every page: canonical URL, OG tags, and appropriate JSON-LD.
- Internal links are mandatory — every new page links to at least 2 existing pages and
  is linked FROM at least 1 existing page. Never ship an orphan page.

## Health content (aftercare, healing, infection)

This is health-adjacent content. Be conservative:

- Describe general hygiene and aftercare practice only.
- Never diagnose, never recommend specific medications or antibiotics by name.
- Any mention of a possible infection or a reaction must say to see a doctor.
- No claims about healing times being guaranteed.

## Technical

- Next.js. Match existing components, design tokens and file conventions exactly.
- Read a comparable existing page before creating a new one — do not invent a new layout.
- Images from the existing /img set unless told otherwise. Descriptive alt text, no
  keyword stuffing in alt.
