import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BtnInverted } from '../../components/Button/BtnInverted/BtnInverted';

export default {
  title: 'Components/Buttons/Inverted Buttons',
  component: BtnInverted,
  argTypes: {
    children: 'string',
    classNameProp: 'string',
    styleProp: Object,
    rounded: false,
    outlined: false,
    btnSize: {
      type: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
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
    shape: {
      type: 'select',
      options: ['rounded', 'capsule'],
    },
  },
};

const Template = (args) => <BtnInverted {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  shape: 'rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  shape: 'capsule',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Messege',
  shape: 'capsule',
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Messege',
  variant: 'error',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info Messege',
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Messege',
  shape: 'capsule',
  variant: 'warning',
};

export const Dark = Template.bind({});
Dark.args = {
  children: (
    <div className="flex align-items--c gap--sm">
      <FaMoon> Dark Mode</FaMoon>
    </div>
  ),
  shape: 'capsule',
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  children: (
    <div className="flex align-items--c gap--sm">
      <FaSun> Light Mode</FaSun>
    </div>
  ),
  shape: 'capsule',
  variant: 'light',
};
