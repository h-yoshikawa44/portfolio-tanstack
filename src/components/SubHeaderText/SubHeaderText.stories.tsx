import type { Meta, StoryObj } from '@storybook/react-vite';

import { SubHeaderText } from './SubHeaderText';

const meta = {
  component: SubHeaderText,
  tags: ['autodocs'],
} satisfies Meta<typeof SubHeaderText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="bg-brand-primary pl-1">
          <Story />
        </div>
      );
    },
  ],
  args: {
    children: '運営',
  },
};
