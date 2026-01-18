import type { Meta, StoryObj } from '@storybook/react-vite';

import { HeaderText } from './HeaderText';

const meta = {
  component: HeaderText,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="bg-brand-primary">
          <Story />
        </div>
      );
    },
  ],
  args: {
    children: '当サイトについて',
  },
};
