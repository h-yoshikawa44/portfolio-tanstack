import { TextType } from '@/anime-components/TextType/TextType';

export type HeroProps = {
  mainTitle: string;
  subTitle: string;
};

export function Hero({ mainTitle, subTitle }: HeroProps) {
  return (
    <header className="bg-brand-primary h-100 w-full md:px-14 px-4 py-22 flex flex-col items-start gap-y-4">
      <TextType
        className="bg-invert text-5xl inline-block p-1"
        text={mainTitle}
        showCursor={false}
        loop={false}
        typingSpeed={20}
        as="h1"
      />
      <TextType
        className="text-3xl bg-invert inline-block py-1"
        text={subTitle}
        showCursor={false}
        loop={false}
        typingSpeed={20}
        as="p"
      />
    </header>
  );
}
