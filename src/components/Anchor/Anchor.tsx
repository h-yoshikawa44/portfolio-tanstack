import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type AnchorProps = ComponentProps<'a'> & {
  disabledHoverUnderline?: boolean;
};

export function Anchor({
  disabledHoverUnderline = false,
  children,
  ...props
}: AnchorProps) {
  return (
    <a
      className={clsx('text-invert', {
        'hover:underline underline-offset-2': !disabledHoverUnderline,
      })}
      {...props}
    >
      {children}
    </a>
  );
}
