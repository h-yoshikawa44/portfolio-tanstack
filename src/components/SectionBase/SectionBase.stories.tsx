import type { Meta, StoryObj } from '@storybook/react-vite';

import { SectionBase } from './SectionBase';

const meta = {
  component: SectionBase,
  tags: ['autodocs'],
} satisfies Meta<typeof SectionBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ダミーセクション',
  },
};
