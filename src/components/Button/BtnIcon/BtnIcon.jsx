import React from 'react';
import './BtnIcon.css';
import { GiMuscleUp } from 'react-icons/gi';
import { btnIconSizes } from './btnIconSizes';

export const BtnIcon = ({
  children,
  styleProp,
  classNameProp,
  handleOnClickProp,
  disableRipple = false,
  btnSize,
  circular = 'true',
}) => {
  return (
    <button
      type="button"
      onClick={handleOnClickProp}
      className={[
        'btn',
        'btn--icon',
        `${circular && 'btn--icon--circular'}`,
        `${!disableRipple && 'ripple'}`,
        `${btnSize ? btnIconSizes[btnSize] : btnIconSizes.md}`,
        `${classNameProp}`,
      ].join(' ')}
      style={{ ...styleProp }}
    >
      {children || <GiMuscleUp className="text--xl" />}
    </button>
  );
};
