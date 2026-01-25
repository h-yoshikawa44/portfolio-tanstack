import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type AnchorProps = Omit<ComponentProps<'a'>, 'target' | 'rel'> & {
  disabledHoverUnderline?: boolean;
};

export function Anchor({
  disabledHoverUnderline = false,
  className,
  children,
  ...props
}: AnchorProps) {
  return (
    <a
      className={clsx('text-invert', className, {
        'hover:underline underline-offset-2': !disabledHoverUnderline,
      })}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
