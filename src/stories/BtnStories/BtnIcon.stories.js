import { FaHeart, FaAddressCard } from 'react-icons/fa';
import { BtnIcon } from '../../components/Button/BtnIcon/BtnIcon';

const BtnIconSizes = () => {
  return (
    <div className="flex flex--column gap">
      <BtnIcon btnSize="xxs">
        <FaAddressCard className="text--xxs" style={{ fontSize: '16px' }} />
      </BtnIcon>
      <BtnIcon btnSize="xs">
        <FaAddressCard className="text--xs" style={{ fontSize: '24px' }} />
      </BtnIcon>
      <BtnIcon btnSize="sm">
        <FaAddressCard className="text--sm" style={{ fontSize: '32px' }} />
      </BtnIcon>
      <BtnIcon btnSize="md">
        <FaAddressCard className="text--md" style={{ fontSize: '48px' }} />
      </BtnIcon>
      <BtnIcon btnSize="lg">
        <FaAddressCard className="text--lg" style={{ fontSize: '64px' }} />
      </BtnIcon>
      <BtnIcon btnSize="xl">
        <FaAddressCard className="text--xl" style={{ fontSize: '96px' }} />
      </BtnIcon>
      <BtnIcon btnSize="xxl">
        <FaAddressCard className="text--xxl" style={{ fontSize: '128px' }} />
      </BtnIcon>
      <BtnIcon btnSize="xxxl">
        <FaAddressCard className="text--xxxl" style={{ fontSize: '160px' }} />
      </BtnIcon>
    </div>
  );
};

export default {
  title: 'Components/Buttons/Icon Button',
  component: BtnIcon,
  argTypes: {
    styleProp: Object,
    classNameProp: 'string',
    btnSize: {
      type: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    variant: {
      type: 'select',
      options: ['rounded', 'circular'],
    },
  },
};

const Template = (args) => <BtnIcon {...args} />;
const Template2 = (args) => <BtnIconSizes {...args} />;

export const DefaultIconBtn = Template.bind({});
DefaultIconBtn.args = {
  children: <FaHeart className="text--danger" style={{ fontSize: '80px' }} />,
  styleProp: { padding: '15px', height: '64px', width: '64px' },
  btnSize: 'xxl',
};

export const IconBtnSizes = Template2.bind({});
