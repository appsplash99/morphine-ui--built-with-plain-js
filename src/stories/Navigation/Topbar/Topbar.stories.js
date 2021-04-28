import { useState } from 'react';
import { TopbarResponsive } from '../../../components/Navigation/Topbar/TopbarResponsive/TopbarResponsive';

export default {
  title: 'Components/Navigation/Topbar/Responsive Topbar',
  component: TopbarResponsive,
};

const Template = (args) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <TopbarResponsive
      {...args}
      showMobileMenu={showMenu}
      setShowMenu={setShowMenu}
      handleShowMobileMenu={() => setShowMenu((prev) => !prev)}
    />
  );
};

export const ResTopbar = Template.bind({});
