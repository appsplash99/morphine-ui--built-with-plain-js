import { LoaderDonutSpinner } from '../../components/Loader';

export default {
  title: 'components/Loaders/LoaderDonutSpinner',
  component: LoaderDonutSpinner,
  argTypes: {
    classNameProp: 'string',
    styleProp: Object,
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'light', 'dark'],
    },
    size: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
  },
};

const Template = (args) => <LoaderDonutSpinner {...args} />;

export const DonutSpinnerLoaderXS = Template.bind({});
DonutSpinnerLoaderXS.args = {
  size: 'xs',
};

export const DonutSpinnerLoaderSM = Template.bind({});
DonutSpinnerLoaderSM.args = {
  size: 'sm',
};

export const DonutSpinnerLoaderMD = Template.bind({});
DonutSpinnerLoaderMD.args = {
  size: 'md',
};

export const DonutSpinnerLoaderLG = Template.bind({});
DonutSpinnerLoaderLG.args = {
  size: 'lg',
};

export const DonutSpinnerLoaderXL = Template.bind({});
DonutSpinnerLoaderXL.args = {
  size: 'xl',
  variant: 'secondary',
};

export const DonutSpinnerLoaderXXL = Template.bind({});
DonutSpinnerLoaderXXL.args = {
  size: 'xxl',
  variant: 'light',
};

export const DonutSpinnerLoaderXXXL = Template.bind({});
DonutSpinnerLoaderXXXL.args = {
  size: 'xxxl',
  variant: 'dark',
};
