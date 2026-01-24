import { Image } from '@unpic/react';
import changeOfPace from '@/assets/images/products/change-of-pace/overview.png';
import closeTo2 from '@/assets/images/products/close-to-2/overview.png';
import jigsawLikePuzzle from '@/assets/images/products/jigsaw-like-puzzle/overview.png';

const productImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      className="w-full h-45 rounded-tl-xl rounded-tr-xl object-cover object-[50%_0]"
      src={src}
      alt={alt}
      priority
      layout="constrained"
      width={300}
      height={180}
    />
  );
};

export type Product = {
  name: string;
  description: React.ReactElement;
  ProductImg: React.ReactElement<typeof Image>;
  productLink: string;
  repositoryUrl?: string;
};

export const MANAGEMENTS = [
  {
    name: 'Change Of Pace',
    description: (
      <>
        Astro 製の個人ブログ。
        <br />
        2023/07に Jekyll から移行。テーマは使用せず自作。
      </>
    ),
    ProductImg: productImage({
      src: changeOfPace,
      alt: 'Change Of Pace - Overview',
    }),
    productLink: 'https://changeofpace.site',
    repositoryUrl: 'https://github.com/h-yoshikawa44/change-of-pace-astro',
  },
] satisfies Product[];

export const EVENT_PRODUCTS = [
  {
    name: 'Close to 2',
    description: (
      <>
        web1week のお題「2」の投稿作品。
        <br />
        4択から計算結果が一番「2」に近い式をあてるゲーム。
      </>
    ),
    ProductImg: productImage({ src: closeTo2, alt: 'Close to 2 - Overview' }),
    productLink: 'https://h-yoshikawa44.github.io/close-to-2',
    repositoryUrl: 'https://github.com/h-yoshikawa44/close-to-2',
  },
  {
    name: 'Jigsaw Like Puzzle',
    description: (
      <>
        web1week のお題「Like」の投稿作品。
        <br />
        ジグソーパズルっぽいパズルゲーム（※PC向け）
      </>
    ),
    ProductImg: productImage({
      src: jigsawLikePuzzle,
      alt: 'Jigsaw Like Puzzle - Overview',
    }),
    productLink: 'https://jigsaw-like-puzzle.web.app',
    repositoryUrl: 'https://github.com/h-yoshikawa44/jigsaw-like-puzzle',
  },
] satisfies Product[];
