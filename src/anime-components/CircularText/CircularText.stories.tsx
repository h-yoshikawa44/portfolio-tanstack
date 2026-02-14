import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularText } from './CircularText';

const meta = {
  component: CircularText,
  decorators: [
    (Story) => {
      return (
        <div className="bg-brand-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof CircularText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'h-yoshikawa44 h-yoshikawa44 ',
  },
};
