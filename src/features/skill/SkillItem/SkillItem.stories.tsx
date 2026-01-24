import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkillItem } from './SkillItem';

const meta = {
  component: SkillItem,
  tags: ['autodocs'],
} satisfies Meta<typeof SkillItem>;

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
    iconClassName: 'i-devicon-vscode',
    name: 'Visual Studio Code',
    description: <>メインで使用しているエディタ。</>,
  },
};
