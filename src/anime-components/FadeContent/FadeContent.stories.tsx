import type { Meta, StoryObj } from '@storybook/react-vite';
import { FadeContent } from './FadeContent';

const meta = {
  component: FadeContent,
} satisfies Meta<typeof FadeContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'フェードインで表示するぞ。',
  },
};
