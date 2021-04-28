import { GiShoppingBag, GiEgyptianProfile } from 'react-icons/gi';
import { DataBadgeIcon } from '../../components/DataDisplay';

export default {
  title: 'Components/Data Display/Data Badge Icon',
  component: DataBadgeIcon,
  argTypes: {
    showDataBadge: true,
    disableRipple: false,
    badgeDataStyleProp: Object,
    iconStyleProp: Object,
    variant: {
      type: 'select',
      options: ['circular', 'square', 'rounded'],
    },
    data: {
      control: {
        type: 'range',
        min: 0,
        max: 999,
        step: 1,
      },
    },
    // icon: ,
  },
};

const Template = (args) => <DataBadgeIcon {...args} />;

export const DefaultDataBadge = Template.bind({});

export const SquareDataBadge = Template.bind({});
SquareDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xxl)' }} />,
  data: 15,
  variant: 'square',
};
export const RoundedDataBadge = Template.bind({});
RoundedDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xxl)' }} />,
  data: 15,
  variant: 'rounded',
};

export const CircularDataBadge = Template.bind({});
CircularDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xxl)' }} />,
  data: 999,
  variant: 'circular',
};
export const CustomDataBadge = Template.bind({});
CustomDataBadge.args = {
  icon: <GiEgyptianProfile style={{ fontSize: 'var(--text-xl)' }} />,
  data: 999,
  variant: 'rounded',
  iconStyleProp: {
    backgroundColor: '#D4A656',
    color: '#1135A5',
  },
  badgeDataStyleProp: {
    top: '-12px',
    right: '-20px',
    backgroundColor: '#C45240',
    color: '#1135A5',
    borderRadius: '4px',
  },
};
