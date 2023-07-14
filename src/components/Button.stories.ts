import Button from "./button.svelte";

export default {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' }
    }
  }
};

export const Primary = {};

export const Secondary = {
  args: {
    type: 'secondary'
  }
};

export const Danger = {
  args: {
    type: 'danger'
  }
};

export const Warning = {
  args: {
    type: 'warning'
  }
};