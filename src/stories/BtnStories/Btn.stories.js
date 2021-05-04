import React from 'react';

import { Btn } from '../../components/Button/Btn/Btn';

export default {
  title: 'Components/Buttons/Default Buttons',
  component: Btn,
  argTypes: {
    children: 'string',
    classNameProp: 'string',
    styleProp: Object,
    variant: {
      type: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'info',
        'error',
        'warning',
        'dark',
        'light',
      ],
    },
    btnSize: {
      type: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    shape: {
      type: 'select',
      options: ['rounded', 'capsule'],
    },
  },
};

const Template = (args) => <Btn {...args} />;

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning',
  shape: 'capsule',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'Error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Info',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Dark',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Light',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};
