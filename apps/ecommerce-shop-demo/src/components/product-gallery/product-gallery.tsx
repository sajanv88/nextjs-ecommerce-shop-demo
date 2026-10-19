import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbnail,
  CarouselThumbnails,
} from "@nuvui/react";
import Image from "next/image";
import type { ProductImage } from "@/lib/catalog/types";
import "./product-gallery.scss";

const VIEWS = ["Studio", "Waist up", "Full length", "Side profile"];

// The product's photographs to swipe through, with a thumbnail for each and arrows over them.
export function ProductGallery({
  title,
  images,
}: {
  title: string;
  images: readonly ProductImage[];
}) {
  return (
    <Carousel aria-label={`Photographs of the ${title}`} loop className="product-gallery">
      <div className="product-gallery__stage">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src}>
              <figure className="product-gallery__photo">
                <Image
                  className={
                    index === 0
                      ? "product-gallery__image product-gallery__image--studio"
                      : "product-gallery__image"
                  }
                  src={image.src}
                  alt={image.alt}
                  fill
                  preload={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 64rem) 55vw, 100vw"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="product-gallery__arrows">
          <CarouselPrevious aria-label="Previous photograph" className="product-gallery__arrow" />
          <CarouselNext aria-label="Next photograph" className="product-gallery__arrow" />
        </div>
      </div>
      <CarouselThumbnails aria-label="Choose a photograph" className="product-gallery__thumbs">
        {images.map((image, index) => (
          <CarouselThumbnail
            key={image.src}
            index={index}
            aria-label={VIEWS[index] ?? `Photograph ${index + 1}`}
          >
            <Image
              className="product-gallery__thumb-image"
              src={image.src}
              alt=""
              width={96}
              height={96}
              sizes="96px"
              // Tiny, and just under the photograph; eager like the photograph they share a file with.
              loading="eager"
            />
          </CarouselThumbnail>
        ))}
      </CarouselThumbnails>
    </Carousel>
  );
}
