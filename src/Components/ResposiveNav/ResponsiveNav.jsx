import './ResponsiveNav.css';
import logo from '../../assets/logo.png';
import { AiOutlineAlignRight } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ResponsiveNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const HandleOpenMenu = () => {
    setShowMenu(true);
    setAnimateOut(false);
  };

  const HandleCloseMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 700);
  };

  return (
    <nav>
      <div className="ResMenu">
        <div className="container">
          <div className="resRow">
            {/* Logo */}
            <div className="resLogo">
              <img src={logo} alt="resLogo" />
            </div>

            {/* Menu Icon */}
            <div className="SideMenu">
              {!showMenu && (
                <AiOutlineAlignRight
                  onClick={HandleOpenMenu}
                  className="resMenuIcon"
                />
              )}
            </div>

            {/* Menu Items */}
            {showMenu && (
              <div className={`menuContent ${animateOut ? 'sideOut' : 'sideIn'}`}>
                <ul className="resMenuItems">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Schedule</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                </ul>
                {/* Cancel Icon */}
                <MdCancel
                  onClick={HandleCloseMenu}
                  className="cancel"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
