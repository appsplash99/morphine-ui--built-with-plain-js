import React from 'react';
import { alertTypes } from './AlertTypes';
import './Alert.css';

export const Alert = ({
  children,
  classNameProp,
  styleProp,
  alertIcon,
  severity = 'default',
  alertTitleProp,
}) => {
  return (
    <div
      className={[
        `alert ${alertTypes[severity].className}`,
        `${classNameProp}`,
      ].join(' ')}
      style={{ styleProp }}
    >
      <div className="flex align-items-fs gap">
        <div className="pt--xxs">{alertIcon || alertTypes[severity].icon}</div>
        <div className="flex flex--column align-self--fs align-items--fs gap--sm text--md font-weight--500">
          {!alertTitleProp ? alertTypes[severity].alertTitle : alertTitleProp}
          {children && <div className="text--sm">{children}</div>}
        </div>
      </div>
    </div>
  );
};
