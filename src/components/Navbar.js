import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

// Material stafs
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dialog from "@material-ui/core/Dialog";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LanguageIcon from "@material-ui/icons/Language";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ toggleSidebar, toggleSidebarSm, openSidebarSm }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='bar'>
          <button className='menu-bar-lg' onClick={toggleSidebar}>
            <DehazeIcon />
          </button>
          <div className='menu-bar-sm'>
            {openSidebarSm ? (
              <button onClick={toggleSidebarSm}>
                <CloseIcon />
              </button>
            ) : (
              <button onClick={toggleSidebarSm}>
                <DehazeIcon />
              </button>
            )}
          </div>
        </div>
        <Link to='/' alt='chaldal-logo' className='chaldal-logo'>
          <img
            src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1211/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1'
            alt=''
          />
        </Link>
        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search for products (e.g. eggs, milk, alu)'
          />
          <SearchIcon className='search-icon' />
        </div>
        <button className='three-dot' onClick={toggleDialog}>
          <MoreVertIcon className='more-vert-icon' />
        </button>

        {/* Dialog */}
        <Dialog open={open} onClose={toggleDialog} className='modalDialog'>
          <div className='modalDialogContent'>
            <div className='dialog-header'>
              Chaldal <span role='img'>🥚</span>
            </div>
            <ul>
              <li>
                <ExitToAppIcon />
                <span>Login</span>
              </li>
              <li>
                <PersonAddIcon />
                <span>Sign up</span>
              </li>
              <li>
                <LanguageIcon />
                <span>Language</span>
              </li>
              <li>
                <InfoIcon />
                <span>Help & More</span>
              </li>
            </ul>
          </div>
        </Dialog>
        <a
          href='https://majedulislam.co'
          target='_blank'
          rel='noopener noreferrer'
          alt=''
          className='helpAria'>
          <HelpIcon className='help-icon' />
          <span>Help & More</span>
        </a>
        <div className='languageSelection'>
          <span>EN</span>
          <span>|</span>
          <span>বাং</span>
        </div>
        <button className='signup-btn'>Sign in</button>
      </nav>
    </>
  );
};

export default Navbar;
