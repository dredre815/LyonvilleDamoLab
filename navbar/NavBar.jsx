import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Lyonville_Icon from '../../assets/lyonville-icon.svg';
import './navbar.css';
import './navbar2.css';

import { HamburgerIcon } from './HamburgerIcon';
import { useAdminPanel } from '../../store/useAdminPanel';
import { useUserData } from '../../store/useUserData';
import { BASE_URL } from '../../config/index';
import { logout } from '../../service/userLoginAPI';
import { LogoutConfirmationAlert } from '../shared/alerts/LogoutConfirmationAlert';


export const NavBar = () => {
  const { userData, setUserData } = useUserData();
  const adminPanelStore = useAdminPanel();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = async () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = async () => {
    await logout();

    setUserData(null);
    setShowConfirmation(false);
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const handleEditMode = () => {
    // Toggle the adminAccess value in the Zustand store
    adminPanelStore.toggleAdminAccess();
  };

  const isOnEditablePage = () => {
    const editablePages = ['/', '/about', '/getting-there'];
    return editablePages.includes(pathname);
  };

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/isLoggedIn`, {
          credentials: 'include',
          withCredentials: true
        });

        return response.data.isLoggedIn;
      } catch (error) {
        if (error.response.status === 401) {
          // Unauthorised
          await logout();
          setUserData(null);
          return false;
        } else {
          console.error('Error checking logged in:', error);
          return false;
        }
      }
    };

    const fetchUserData = async () => {
      const isLoggedIn = await checkIsLoggedIn();
      if (isLoggedIn) {
        try {
          const response = await axios.get(`${BASE_URL}/users/me?populate=role`, {
            credentials: 'include',
            withCredentials: true
          });

          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserData(null);
        }
      }
    };

    fetchUserData();
  }, [setUserData]);
  
  const dropdownData = [
    {
      label: 'About Lyonville',
      labelLink: '/about',
      items: [
        { name: 'Feedback and Ideas', link: 'https://forms.gle/2cwEEQi8p8dS3wq19' },
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/groups/1187024134798318'
        }
      ]
    },
    {
      label: 'Getting There',
      labelLink: '/getting-there',
      items: [
        { name: 'Real Estate', link: '/real-estate' },
        { name: 'Flora and Fauna', link: '/flora-and-fauna' }
      ]
    },
    {
      label: 'History',
      labelLink: '/history',
      items: [
        { name: 'Gardens', link: '/gardens' },
        { name: 'Weather', link: '/weather' }
      ]
    },
    {
      label: 'Things to Do',
      labelLink: '/things-to-do',
      items: [
        {
          name: 'Woodchop',
          link: 'https://visithepburnshire.com.au/event/lyonville-woodchop-family-fun-day/' },
        {
          name: 'Bakeoff',
          link: 'https://tlnews.com.au/the-lyonville-bake-off-is-back/'
        }
      ]
    },
    {
      label: 'Community Page',
      labelLink: '/community-page',
      items: [
        {
          name: 'Hepburn Shire',
          link: 'https://www.hepburn.vic.gov.au/Home'
        },
        { name: 'Community Newsletter', link: '/newsletter' },
        { name: 'Committees and Working Group', link: '/working-group' }
      ]
    }
  ];


  const [expandedLabel, setExpandedLabel] = useState(null);

  const labelColors = {
    'About Lyonville': 'white',
    'Getting There': 'white',
    'History': 'white',
    'Things to Do': 'white',
    'Community Page': 'white'
  };
   
  const nameColors = {
    'Feedback and Ideas': 'white',
    'Facebook': 'white',
    'Real Estate': 'white',
    'Flora and Fauna': 'white',
    'Gardens': 'white',
    'Weather': 'white',
    'Woodchop': 'white',
    'Bakeoff': 'white',
    'Hepburn Shire': 'white',
    'Community Newsletter': 'white',
    'Committees and Working Group': 'white'
  };
 

  const toggleLabelExpansion = (label) => {
    if (expandedLabel === label) {
      setExpandedLabel(null);
    } else {
      setExpandedLabel(label);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [clickableHamburgerIcon, setClickableHamburgerIcon] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const location = useLocation();
  let notAtHomePage = location.pathname !== "/";

  let navbarColor, classNames, textColor;
  if (windowWidth <= 1260) {
    navbarColor = notAtHomePage ? '#F4F3D7' : 'rgba(9, 37, 17, 0.95)';
  } else {
    if (notAtHomePage) {
      navbarColor = '#F4F3D7';
      classNames  = ' fixed-navbar transition-height duration-300 ease-in-out';
      textColor   = 'text-black';
      classNames += clickableHamburgerIcon ? ' max-h-64 h-56' : ' max-h-64 h-24';
    } else {
      navbarColor = notAtHomePage ? '#F4F3D7' : '#414730';
      classNames  = ' relative h-0';
      textColor   = 'text-white';
    }
  }


  return (windowWidth <= 1260) ? 
  // ==========================================
  // Mobile Navigation Bar
  // ==========================================
  (
    <div
      className="navbar mobile-navbar flex justify-between"
      style={{backgroundColor: navbarColor}}
    >
      {/* Hamburger icon */}
      <div className="flex">
        <HamburgerIcon onClick={toggleMenu} />
      </div>

      {/* Sidebar for mobile */}
      <div
        className={
          `mobile-sidebar transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`
        }
      >
        <div className="flex flex-col w-full justify-start">
          {dropdownData.map((dropdown, index) => (
            <div className="relative" key={index}>
              <span onClick={() => toggleLabelExpansion(dropdown.label)}>
                <label
                  tabIndex={0}
                  className="
                    btn btn-ghost rounded-none block w-full flex justify-between items-center
                  " style={{
                    backgroundColor: '#F4F3D7', padding: '20px 10px', marginTop: '5px'
                  }}
                >
                  <a href={dropdown.labelLink} style={{ color: 'black' }}>
                    {dropdown.label}
                  </a>
                  <div className={
                    expandedLabel === dropdown.label ? 'arrow-up' : 'arrow-down'
                  } />
                </label>
              </span>

              {/* Sub-items */}
              {expandedLabel === dropdown.label && (
                <ul className="flex flex-col mt-1">
                  {dropdown.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      style={{
                        color: nameColors[item.name], fontSize: '14px',
                      }}
                    >
                      <li
                        style={{
                          backgroundColor: '#8A946E', padding: '12px 7px', marginBottom: '5px'
                        }}
                      >
                        <div className="arrow-right"></div>
                        {item.name}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
            </div>
          ))}
          
          {/* Text box buttons for mobile NavBar */}
          <div
            style={{
              backgroundColor: '#414730', padding: '20px', marginBottom: '5px',
              textAlign: 'left', marginTop: '20px'
            }}
          >
            <a
              href="#"
              style={{
                color: 'white', fontSize: '12px', display: 'block', lineHeight: '1.5',
                textDecoration: 'none', marginBottom: '10px'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Feedback and Ideas
            </a>
            <a
              href="#"
              style={{
                color: 'white', fontSize: '12px', display: 'block', lineHeight: '1.5', 
                textDecoration: 'none', marginBottom: '10px'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Facebook Community
            </a>
            <a
              href="#"
              style={{
                color: 'white', fontSize: '12px', display: 'block', lineHeight: '1.5',
                textDecoration: 'none', marginBottom: '10px'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Newsletter
            </a>
            <a
              href="#"
              style={{
                color: 'white', fontSize: '12px', display: 'block', lineHeight: '1.5', 
                textDecoration: 'none', marginBottom: '10px' 
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Lyonville Plan 2021-2025
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Lyonville Icon */}
      <a className="text-lg font-bold px-6" href="/">
        <img src={Lyonville_Icon} alt="LyonvilleIcon" className="w-14" />
      </a>
    </div>


  ) :
  // ==========================================
  // Desktop Navigation Bar
  // ==========================================
  (
    <div
      className={"flex justify-between " + classNames}
      style={{backgroundColor: navbarColor}}
    >
      {/* NavBar wrapper */}
      <div
        className={
          `flex justify-between ${
            location.pathname === "/" ? 'navbar-wrapper' : 'navbar-wrapper2'
          }`
        }
        style={{ position: 'relative' }}
      >
        <div className="custom-navbar">
          <div className="custom-navbar-left">

            {/* Hamburger Icon */}
            <div
              className="hamburger-icon hover:scale-95 duration-500"
              onClick={() => setClickableHamburgerIcon(!clickableHamburgerIcon)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* Menu */}
            <div className="menu-wrapper">
              <ul className="flex space-x-4">
                {dropdownData.map((dropdown, index) => (
                  <li className="relative" key={index}>
                    <a
                      href={dropdown.labelLink}
                      className={notAtHomePage ? 'header-label' : ''}
                      style={{ color: notAtHomePage ? '#000' : labelColors[dropdown.label] }}
                    >
                      <div className="dropdown dropdown-hover">
                        <label
                          tabIndex={0}
                          className={
                            `btn btn-ghost rounded-btn ${notAtHomePage ? 'text-base header-label' : ''}`
                          }
                        >
                          {dropdown.label}
                        </label>
                        <ul
                          tabIndex={0}
                          className={
                            `dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52
                            ${clickableHamburgerIcon ? 'show' : 'hide'}
                            ${!notAtHomePage && clickableHamburgerIcon ? 'relative-position' : ''}`
                          }
                          style={{ backgroundColor: 'rgba(65,71,48, 0.8)' }}
                        >
                          {dropdown.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href={item.link}
                                style={{
                                  color: notAtHomePage ? '#000' : nameColors[item.name]
                                }}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>

          {/* Login */}
          {clickableHamburgerIcon && !notAtHomePage ? (
            <></>
          ) : userData !== null ? (
            <div className="dropdown dropdown-hover">
              <a href="/admin/dashboard">
                <p className={'text-xl font-bold px-6 cursor-pointer header-label mb-auto ' + textColor}>
                  Hi,{' '}
                  <p className="underline text-green-600 hover:text-green-950">
                    {userData.firstName}
                  </p>
                </p>
              </a>
              <ul
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {userData.role && userData.role.name === 'Admin' && isOnEditablePage() && (
                    <button
                      onClick={handleEditMode}
                      className={`btn px-6 text-base mt-5 hover:bg-[rgba(65,71,48,0.8)] ${textColor}`}
                    >
                      Edit Mode
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className={`btn text-base hover:bg-[rgba(65,71,48,0.8)] ${textColor}`}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              {location.pathname === "/" && (
                <button className="login-btn hover:scale-95 duration-500">Log in</button>
              )}
            </Link>
          )}

          {/* Lyonville Text Logo, but normal logo on logged in */}
          {notAtHomePage && windowWidth > 1440 && userData === null ? (
            <Link to="/">
              <h2 className="navbar-title mr-10 ml-[-2px]">LYONVILLE</h2>
            </Link>
          ) : notAtHomePage && (windowWidth <= 1440 || userData !== null) ? (
            <a className="mt-[-10px] justify-end" href="/">
              <img src={Lyonville_Icon} alt="LyonvilleNotHomeIcon" className="w-20" />
            </a>
          ) : (
            <></>
          )}

        </div>

        {/* Lyonville Icon at Home page */}
        {
          location.pathname === "/" && !clickableHamburgerIcon && (
            <a className="text-lg font-bold px-6" href="/">
              <img
                src={Lyonville_Icon}
                alt="LyonvilleHomeIcon"
                className="
                  shadow-[0_50px_25px_-24px_rgb(0,0,0,1)]
                  hover:scale-95 duration-500 lyonville-icon"
              />
            </a>
          )
        }

        {/* Admin logout confirmation */}
        {showConfirmation && (
          <LogoutConfirmationAlert
            showConfirmation={showConfirmation}
            onClose={() => setShowConfirmation(false)}
            onConfirm={handleConfirmLogout}
            onCancel={handleCancelLogout}
          />
        )}
      </div>
    </div>
  );
};