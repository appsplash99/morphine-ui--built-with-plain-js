import React from 'react';
import './Btn.css';
import { btnSizes } from '../btnSizes';
import { normalBtnVariants } from './normalBtnVariants';

import '../../../styles.css';

// TODO: https://codepen.io/appsplash99/pen/vYgvvax?editors=1100
// Add Button Outline Transition when clicked

export const Btn = ({
  children,
  styleProp,
  classNameProp,
  handleOnClickProp,
  btnSize = 'md',
  variant = 'default',
  disableRipple = false,
  shape = 'rounded',
}) => {
  return (
    <button
      type="button"
      style={styleProp}
      onClick={handleOnClickProp}
      className={[
        'btn',
        'btn--normal',
        `${!disableRipple && 'ripple'}`,
        `${shape === 'rounded' && 'border-radius--default-btn'}`,
        `${shape === 'capsule' && 'border-radius--capsule'}`,
        `${btnSize ? btnSizes[btnSize] : btnSizes.md}`,
        `${variant ? normalBtnVariants[variant] : ''}`,
        `${classNameProp}`,
      ].join(' ')}
    >
      {children || 'default text'}
    </button>
  );
};
