export type HeroProps = {
  mainTitle: string;
  subTitle: string;
};

export function Hero({ mainTitle, subTitle }: HeroProps) {
  return (
    <header className="bg-brand-primary h-100 w-full md:px-14 px-4 py-22 flex flex-col items-start gap-y-4">
      <h1 className="bg-invert text-5xl inline-block p-1">{mainTitle}</h1>
      <p className="text-3xl bg-invert inline-block py-1">{subTitle}</p>
    </header>
  );
}
