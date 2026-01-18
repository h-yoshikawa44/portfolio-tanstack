import type { Meta, StoryObj } from '@storybook/react-vite';
import { MockRouterDecorator } from '../../../.storybook/decorators/MockRouterDecorator';
import { Header } from './Header';

const meta = {
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
