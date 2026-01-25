import type { Meta, StoryObj } from '@storybook/react-vite';
import { Anchor } from './Anchor';

const meta = {
  component: Anchor,
  decorators: [
    (Story) => {
      return (
        <div className="bg-brand-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'GitHub',
    href: 'https://github.com/h-yoshikawa44',
  },
};

export const DisabledHoverUnderline: Story = {
  args: {
    children: 'GitHub',
    href: 'https://github.com/h-yoshikawa44',
    disabledHoverUnderline: true,
  },
};
