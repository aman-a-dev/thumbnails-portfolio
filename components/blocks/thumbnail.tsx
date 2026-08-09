import Image from "next/image";
import { TrueFocus } from "@/components/ui/true-focus";
import { BlurText } from "@/components/ui/blur-text";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Split the 12 thumbnails into 3 stages (rows) of 4 images each
const ROWS = [1, 5, 9].map((start) =>
  Array.from({ length: 4 }, (_, i) => ({
    src: `/thumbnails/Thumbnail-${start + i}.jpg`,
    label: `Thumbnail ${start + i}`,
  })),
);

export default function Thumbnail() {
  return (
    <section
      id="thumbnails"
      className="flex flex-col items-center gap-10 overflow-hidden py-16"
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 px-4 text-center">
        <TrueFocus
          sentence="Previous Works"
          manualMode={false}
          blurAmount={5}
          borderColor="var(--primary)"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
        <BlurText
          text="Crafting eye-catching, click-worthy thumbnails that make your content stand out."
          delay={100}
          animateBy="words"
          direction="top"
          className="max-w-md text-sm font-bold text-muted-foreground"
        />
      </div>

      {/* 3-stage infinite slider with edge fade */}
      <div className="flex w-full flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {ROWS.map((row, rowIndex) => (
          <InfiniteSlider
            key={rowIndex}
            reverse={rowIndex % 2 === 1} // middle stage scrolls the opposite way
            // pauseOnHover removed – not supported by the component
          >
            {row.map(({ src, label }) => (
              <figure
                key={src}
                className="relative aspect-video w-[220px] shrink-0 overflow-hidden rounded-xl border border-border shadow-sm transition-transform duration-300 hover:scale-[1.03] sm:w-[280px] md:w-[340px] lg:w-[400px]"
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, (min-width: 640px) 280px, 220px"
                  className="object-cover"
                />
              </figure>
            ))}
          </InfiniteSlider>
        ))}
      </div>
    </section>
  );
}
