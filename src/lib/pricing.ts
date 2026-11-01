import { siteConfig } from "@/data/site";

const { pricing } = siteConfig;

/**
 * The homepage pricing section's rate rows. Values are "" until supplied in
 * siteConfig.
 */
export function rateCard() {
  return [
    { title: "Minimum charge", value: pricing.minimumCharge },
    { title: "Small pieces (up to 3 inches)", value: pricing.small },
    { title: "Medium pieces (3-6 inches)", value: pricing.medium },
    { title: "Large / custom work", value: "Quoted after consultation" },
    {
      title: "At-home session",
      value: pricing.atHomeMinimum && `${pricing.atHomeMinimum} minimum`,
    },
    {
      title: "Deposit",
      value:
        pricing.deposit &&
        `${pricing.deposit}, non-refundable, adjusted against the final price`,
    },
    { title: "Reschedule policy", value: pricing.reschedule },
  ];
}
