import Image from "next/image";

export type RecentPiece = {
  image: string;
  title: string;
  alt: string;
  size: string;
  placement: string;
  price: string;
};

/**
 * A grid of real pieces with their placement, and size and price where given,
 * so a visitor can see comparable work. Values come from
 * siteConfig.pricing.recentPieces; blank values are not shown.
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
            <dl className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {[
                ["Size", piece.size],
                ["Placement", piece.placement],
                ["Price", piece.price],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div key={label} className="flex-1 min-w-[5rem] border-t border-neutral-800 pt-3">
                    <dt className="text-neutral-500 mb-1">{label}</dt>
                    <dd className="text-neutral-100">{value}</dd>
                  </div>
                ))}
            </dl>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
