// eslint-disable-next-line import/named
import { PageProgressBar } from '../../components/Progress/PageProgressBar/PageProgressBar';
import { loremString } from '../utils/loremString';
import { useState } from 'react';

export default {
  title: 'components/Progress/Progress Bar',
  component: PageProgressBar,
  argTypes: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

const Template = (args) => {
  // Needs to be set in order for the progressBar to run
  const [width, setWidth] = useState(null);
  return (
    <div>
      <PageProgressBar width={width} setWidth={setWidth} {...args} />
      <>{loremString}</>
    </div>
  );
};

export const DefaultPageProgressBar = Template.bind({});
DefaultPageProgressBar.args = {
  height: 5,
};
