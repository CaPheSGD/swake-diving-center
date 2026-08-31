import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  kicker?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  kicker,
  image,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-[#3AA0C8]/20 bg-black">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover object-[50%_62%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-36">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
            {description}
          </p>

          {kicker ? (
            <p className="mt-5 text-sm font-medium text-[#F15A24]">{kicker}</p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-[#3AA0C8]/20 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          {description}
        </p>

        {kicker ? (
          <p className="mt-5 text-sm font-medium text-[#F15A24]">{kicker}</p>
        ) : null}
      </div>
    </section>
  );
}
