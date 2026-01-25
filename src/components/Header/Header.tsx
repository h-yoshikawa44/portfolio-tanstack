import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import myIcon from '@/assets/images/my-icon.png';
import { Anchor } from '../Anchor/Anchor';

export function Header() {
  return (
    <header className="sticky top-0 z-10 md:px-14 py-3 px-4 from-brand-start to-brand-end bg-linear-to-b flex justify-between">
      <Link to="/">
        <div className="p-1 rounded-[50%] bg-invert w-12 h-12 flex justify-center items-center">
          <Image src={myIcon} alt="myIcon" width={44} height={32} />
        </div>
      </Link>
      <nav>
        <ul className="flex gap-x-4 text-invert items-center h-full">
          <li>
            <Link className="hover:underline underline-offset-2" to="/skill">
              Skill
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-2"
              to="/my_products"
            >
              MyProducts
            </Link>
          </li>
          <li>
            <Anchor href="https://changeofpace.site">Blog</Anchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}
