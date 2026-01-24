import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '@unpic/react';
import changeOfPace from '@/assets/images/products/change-of-pace/overview.png';

import { ProductItem } from './ProductItem';

const meta = {
  component: ProductItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="w-[320px]">
          <Story />
        </div>
      );
    },
  ],
  args: {
    name: 'Change Of Pace',
    description: (
      <>
        Astro 製の個人ブログ。
        <br />
        2023/07に Jekyll から移行。テーマは使用せず自作。
      </>
    ),
    ProductImg: (
      <Image
        className="w-full h-45 rounded-tl-xl rounded-tr-xl object-cover object-[50%_0]"
        src={changeOfPace}
        alt="Change Of Pace - Overview"
        layout="constrained"
        width={300}
        height={180}
        priority
      />
    ),
    productLink: 'https://changeofpace.site',
    repositoryUrl: 'https://github.com/h-yoshikawa44/change-of-pace-astro',
  },
};
