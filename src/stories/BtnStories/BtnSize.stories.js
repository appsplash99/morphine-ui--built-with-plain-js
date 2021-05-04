import React from 'react';
import { Btn } from '../../components/Button';

const BtnSizes = () => {
  return (
    <div className="flex flex--column justify-content--c align-items--fs">
      <Btn btnSize="xxxl" />
      <Btn btnSize="xxl" />
      <Btn btnSize="xl" />
      <Btn btnSize="lg" />
      <Btn btnSize="md" />
      <Btn btnSize="sm" />
      <Btn btnSize="xs" />
      <Btn btnSize="xxs" />
    </div>
  );
};

export default {
  title: 'Components/Buttons/ButtonSizes',
  component: BtnSizes,
};

const Template = (args) => <BtnSizes {...args} />;

export const DefaultBtnSizesss = Template.bind({});
