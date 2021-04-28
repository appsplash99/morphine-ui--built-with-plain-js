import { Avatar } from '../../components/DataDisplay';

export default {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      type: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    avatarStatus: {
      type: 'select',
      options: ['online', 'offline'],
    },
    showStatusBadge: true,
    variant: {
      type: 'select',
      options: ['square', 'rounded', 'circular'],
    },
    badgePosition: Object,
  },
};

const Template = (args) => <Avatar {...args} />;

export const AvatarXXS = Template.bind({});
AvatarXXS.args = {
  size: 'xxs',
  // avatarStatus: 'online',
};

export const AvatarXS = Template.bind({});
AvatarXS.args = {
  size: 'xs',
  // avatarStatus: 'online',
};

export const AvatarSM = Template.bind({});
AvatarSM.args = {
  size: 'sm',
  // avatarStatus: 'online',
};

export const DefaultAvatarMD = Template.bind({});
DefaultAvatarMD.args = {
  // variant: 'square',
};

export const AvatarLG = Template.bind({});
AvatarLG.args = {
  size: 'lg',
  // avatarStatus: 'online',
};

export const AvatarXL = Template.bind({});
AvatarXL.args = {
  size: 'xl',
  // avatarStatus: 'online',
};

export const AvatarXXL = Template.bind({});
AvatarXXL.args = {
  size: 'xxl',
  avatarStatus: 'online',
  showStatusBadge: true,
  badgePosition: {
    right: 0,
    bottom: 0,
  },
  // variant: 'rounded',
};
