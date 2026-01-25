import { MockRouterDecorator } from '.storybook/decorators/MockRouterDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta = {
  component: Footer,
  decorators: [
    (Story) => {
      return (
        <MockRouterDecorator>
          <Story />
        </MockRouterDecorator>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
