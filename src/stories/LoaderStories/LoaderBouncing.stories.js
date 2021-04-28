import { LoaderBouncing } from '../../components/Loader';

export default {
  title: 'Components/Loaders/LoaderBouncing',
  component: LoaderBouncing,
  argTypes: {
    size: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
  },
  controls: {
    matchers: {
      dotBgColor: /(background|color)$/i,
    },
  },
};

const Template = (args) => <LoaderBouncing {...args} />;

export const BouncingLoaderXS = Template.bind({});
BouncingLoaderXS.args = {
  size: 'xs',
};
export const BouncingLoaderSM = Template.bind({});
BouncingLoaderSM.args = {
  size: 'sm',
};
export const BouncingLoaderMD = Template.bind({});
BouncingLoaderMD.args = {
  size: 'md',
};
export const BouncingLoaderLG = Template.bind({});
BouncingLoaderLG.args = {
  size: 'lg',
};
export const BouncingLoaderXL = Template.bind({});
BouncingLoaderXL.args = {
  size: 'xl',
};
export const BouncingLoaderXXL = Template.bind({});
BouncingLoaderXXL.args = {
  size: 'xxl',
  dotBgColor: 'var(--themePrimary)',
};
export const BouncingLoaderXXXL = Template.bind({});
BouncingLoaderXXXL.args = {
  size: 'xxxl',
  dotBgColor: 'var(--themeSecondary)',
};
