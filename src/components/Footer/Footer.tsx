import { Link } from '@tanstack/react-router';
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
            <Anchor href="https://x.com/yoshi44_lion">X</Anchor>
          </li>
          <li>
            <Anchor href="https://bsky.app/profile/h-yoshikawa44.bsky.social">
              Bluesky
            </Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/h-yoshikawa44">GitHub</Anchor>
          </li>
          <li>
            <Anchor href="https://changeofpace.site">Blog</Anchor>
          </li>
          <li>
            <Anchor href="https://zenn.dev/h_yoshikawa0724">Zenn</Anchor>
          </li>
        </ul>
      </div>
      <small className="text-center block mt-4 text-sm">
        © 2026 h-yoshikawa44 Built with TanStack Start.
      </small>
    </footer>
  );
}
