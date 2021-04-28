import './TopbarResponsive.css';
import { FaBars } from 'react-icons/fa';
import { BtnIcon } from '../../../Button';

// https://codepen.io/appsplash99/pen/KKabRge
export const TopbarResponsive = ({ showMobileMenu, handleShowMobileMenu }) => {
  const resTopbarURL =
    'http://localhost:6006/?path=/story/components-navigation-topbar-responsive-topbar--res-topbar';
  return (
    <nav className="topbar-responsive">
      <div className="navWide">
        <div className="wideDiv">
          <a className="nav__link" href="{resTopbarURL}">
            Link 1
          </a>
          <a className="nav__link" href="{resTopbarURL}">
            Link 2
          </a>
          <a className="nav__link" href="{resTopbarURL}">
            Link 3
          </a>
        </div>
      </div>
      <div className={`navNarrow ${showMobileMenu && 'fadeInDOwn'}`}>
        <BtnIcon
          btnSize="lg"
          classNameProp="m--0 topbar-responsive__ham-btn"
          handleOnClickProp={handleShowMobileMenu}
        >
          <FaBars className="text--light text--xs p--0 m--0" />
        </BtnIcon>
        <div
          className="narrowLinks"
          style={{ display: showMobileMenu ? 'flex' : 'none' }}
        >
          <a className="nav__link" href="{resTopbarURL}">
            Link 1
          </a>
          <a className="nav__link" href="{resTopbarURL}">
            Link 2
          </a>
          <a className="nav__link" href="{resTopbarURL}">
            Link 3
          </a>
        </div>
      </div>
    </nav>
  );
};
