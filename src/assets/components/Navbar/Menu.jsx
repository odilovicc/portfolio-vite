import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
function Menu() {
  const [showMenu, setShowMenu] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`defaultNavbarSettings ${showMenu ? 'show' : 'hide'}`}>
      <div className="lg:block flex items-center justify-between">
        <h1 className="logo">Bakhtiyor</h1>
        <button className="hamburgerIcon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <section className="navbarFlex">
        <ul className="hidden lg:flex items-center gap-12 ">
          <li>
            <a href="#skills" className="navbarLinks">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="navbarLinks">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="navbarLinks">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="navbarLinks">
              Contacts
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Menu;
