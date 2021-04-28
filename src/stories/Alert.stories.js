import React from 'react';
import { FaMagic, FaShippingFast } from 'react-icons/fa';

import { Alert } from '../components/Alert';

export default {
  title: 'Components/Alerts',
  component: Alert,
  argTypes: {
    children: 'string',
    classNameProp: 'string',
    styleProp: Object,
    alertIcon: Element,
    alertTitleProp: 'string',
    severity: {
      type: 'select',
      options: [
        'error',
        'warning',
        'info',
        'light',
        'success',
        'primary',
        'default',
        'secondary',
      ],
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
};

export const Light = Template.bind({});
Light.args = {
  severity: 'light',
};

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
};

export const Primary = Template.bind({});
Primary.args = {
  severity: 'primary',
  alertTitleProp: 'Woosh...',
  alertIcon: <FaShippingFast className="text--md" />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  severity: 'secondary',
  alertIcon: <FaMagic className="text--md" />,
  alertTitleProp: 'Abra ka dabra',
  children: 'Gilli Gilli CHoo....',
};

// export const Custom = Template.bind({});
// Custom.args = {
//   // classNameProp: '',
//   severity: 'secondary',
//   alertIcon: <FaMagic className='text--md' />,
//   alertTitleProp: 'Abra ka dabra',
//   children: 'Gilli Gilli CHoo....'
// };
