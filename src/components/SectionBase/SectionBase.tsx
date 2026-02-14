import { FadeContent } from '@/anime-components/FadeContent/FadeContent';
import type { PropsWithChildren } from 'react';

export function SectionBase({ children }: PropsWithChildren) {
  return (
    <FadeContent blur threshold={0.05}>
      <section className="bg-brand-secondary w-full md:px-14 py-10 px-4 text-invert">
        {children}
      </section>
    </FadeContent>
  );
}
