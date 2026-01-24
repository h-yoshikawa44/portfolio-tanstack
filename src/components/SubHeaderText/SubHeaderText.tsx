import type { PropsWithChildren } from 'react';

export function SubHeaderText({ children }: PropsWithChildren) {
  return <h4 className="text-invert text-xl header-left-line">{children}</h4>;
}
