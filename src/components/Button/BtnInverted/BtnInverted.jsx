import React from 'react';
import './BtnInverted.css';
import { btnSizes } from '../btnSizes';
import { btnInvertedVariants } from './btnInvertedVariants';

export const BtnInverted = ({
  children,
  styleProp,
  classNameProp,
  handleOnClickProp,
  btnSize,
  variant,
  rounded,
}) => {
  return (
    <button
      type="button"
      style={styleProp}
      onClick={handleOnClickProp}
      className={[
        'btn',
        'btn--inverted',
        `${rounded ? 'border-radius--default-btn' : ''}`,
        `${btnSize ? btnSizes[btnSize] : btnSizes.md}`,
        `${variant ? btnInvertedVariants[variant] : ''}`,
        `${classNameProp}`,
      ].join(' ')}
    >
      {children || 'Default Btn'}
    </button>
  );
};
