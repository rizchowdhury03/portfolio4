/**
 * A photo with an optional caption. Used in About and Leadership.
 */
import Image from "next/image";
import type { Photo } from "@/data/types";

export function Figure({
  photo,
  sizes,
  className = "",
  imageClassName = "aspect-[4/3]",
  priority = false,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={`group relative overflow-hidden rounded-[4px] bg-paper-deep ring-1 ring-line ${imageClassName}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      {photo.caption && (
        <figcaption className="mt-3 font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
