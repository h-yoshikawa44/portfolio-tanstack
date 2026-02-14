import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextType } from './TextType';

const meta = {
  component: TextType,
} satisfies Meta<typeof TextType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `h-yoshikawa44's Portfolio`,
  },
};
