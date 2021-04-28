import { FaHeart, FaAddressCard } from 'react-icons/fa';
import { BtnIcon } from '../../components/Button/BtnIcon/BtnIcon';

const BtnIconSizes = () => {
  return (
    <>
      <BtnIcon btnSize="xxs">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="xs">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="sm">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="md">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="lg">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="xl">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="xxl">
        <FaAddressCard />
      </BtnIcon>
      <BtnIcon btnSize="xxxl">
        <FaAddressCard />
      </BtnIcon>
    </>
  );
};

export default {
  title: 'Components/Buttons/Icon Button',
  component: BtnIcon,
};

const Template = (args) => <BtnIcon {...args} />;
const Template2 = (args) => <BtnIconSizes {...args} />;

export const DefaultIconBtn = Template.bind({});
DefaultIconBtn.args = {
  children: <FaHeart className="text--danger" />,
};

export const IconBtnSizes = Template2.bind({});
