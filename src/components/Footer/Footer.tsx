import { Link } from '@tanstack/react-router';
import { SOCIAL_LINK } from '@/data/social';
import { Anchor } from '../Anchor/Anchor';

export function Footer() {
  return (
    <footer className="from-brand-start to-brand-end bg-linear-to-b py-6 px-16  text-invert w-full">
      <div className="grid grid-cols-2">
        <ul className="flex flex-col gap-y-2">
          <span className="text-lg font-bold mb-2">Site</span>
          <li>
            <Link className="hover:underline underline-offset-2" to="/policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-2">
          <span className="text-lg font-bold  mb-2">Social</span>
          <li>
            <Anchor href={SOCIAL_LINK.X}>X</Anchor>
          </li>
          <li>
            <Anchor href={SOCIAL_LINK.BLUESKY}>Bluesky</Anchor>
          </li>
          <li>
            <Anchor href={SOCIAL_LINK.GITHUB}>GitHub</Anchor>
          </li>
          <li>
            <Anchor href={SOCIAL_LINK.BLOG}>Blog</Anchor>
          </li>
          <li>
            <Anchor href={SOCIAL_LINK.ZENN}>Zenn</Anchor>
          </li>
        </ul>
      </div>
      <small className="text-center block mt-4 text-sm">
        © 2026 h-yoshikawa44 Built with TanStack Start.
      </small>
    </footer>
  );
}
