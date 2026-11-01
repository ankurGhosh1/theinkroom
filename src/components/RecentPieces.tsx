import Image from "next/image";

export type RecentPiece = {
  image: string;
  title: string;
  alt: string;
  size: string;
  placement: string;
  price: string;
};

/** Shown in place of any value not yet supplied in siteConfig. */
const PENDING = "To be confirmed";

/**
 * A grid of real pieces with their size, placement and price, so a visitor
 * can see what a comparable tattoo cost. Values come from
 * siteConfig.pricing.recentPieces.
 */
export const RecentPieces = ({ pieces }: Readonly<{ pieces: readonly RecentPiece[] }>) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pieces.map((piece) => (
        <figure
          key={piece.image}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={piece.image}
              alt={piece.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
              className="object-cover"
            />
          </div>
          <figcaption className="p-5">
            <p className="text-lg font-serif font-bold text-neutral-100 mb-4">
              {piece.title}
            </p>
            <dl className="grid grid-cols-3 gap-3 text-sm">
              {[
                ["Size", piece.size],
                ["Placement", piece.placement],
                ["Price", piece.price],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-neutral-800 pt-3">
                  <dt className="text-neutral-500 mb-1">{label}</dt>
                  <dd className={value ? "text-neutral-100" : "text-neutral-500"}>
                    {value || PENDING}
                  </dd>
                </div>
              ))}
            </dl>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
