import type { Meta, StoryObj } from '@storybook/react-vite';
import { MANAGEMENTS } from '@/data/myProducts';
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
  args: MANAGEMENTS[0],
};
