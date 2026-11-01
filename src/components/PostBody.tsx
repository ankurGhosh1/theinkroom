import Image from "next/image";
import Link from "next/link";
import type { InlineLink, PostBlock } from "@/lib/content";

/** Wraps each link's text, in order, in a Link. Unmatched links are skipped. */
function withLinks(text: string, links: InlineLink[] = []) {
  const parts: React.ReactNode[] = [];
  let rest = text;
  links.forEach((link, i) => {
    const at = rest.indexOf(link.text);
    if (at === -1) return;
    parts.push(
      rest.slice(0, at),
      <Link
        key={i}
        href={link.href}
        className="text-red-500 hover:text-red-400 transition-colors"
      >
        {link.text}
      </Link>
    );
    rest = rest.slice(at + link.text.length);
  });
  parts.push(rest);
  return parts;
}

export const PostBody = ({ blocks }: Readonly<{ blocks: PostBlock[] }>) => {
  return (
    <div className="max-w-2xl mx-auto">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-3xl font-serif font-bold text-neutral-100 mt-14 mb-5"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="text-xl font-serif font-bold text-neutral-100 mt-10 mb-3"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={index}
                className="text-neutral-300 text-lg leading-relaxed mb-6"
              >
                {withLinks(block.text, block.links)}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="mb-8 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-neutral-300 leading-relaxed before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="mb-8 space-y-3 list-none">
                {block.items.map((item, i) => (
                  <li key={item} className="flex gap-4 text-neutral-300 leading-relaxed">
                    <span className="flex-shrink-0 font-serif font-bold text-red-500">
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div
                key={index}
                className="my-8 border-l-2 border-red-600 bg-neutral-900/60 px-6 py-5 rounded-r-lg"
              >
                <p className="text-neutral-200 leading-relaxed">
                  {withLinks(block.text, block.links)}
                </p>
              </div>
            );
          case "image":
            return (
              <figure key={index} className="my-10">
                <div className="relative h-96 sm:h-[28rem] rounded-2xl overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-neutral-500 leading-relaxed">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
