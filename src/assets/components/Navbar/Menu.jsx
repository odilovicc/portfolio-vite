import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Menu() {
  return (
    <div className="defaultNavbarSettings">
      <div className="lg:block flex items-center justify-between">
        <h1 className="logo">Bakhtiyor</h1>
        <button className="hamburgerIcon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <section className="navbarFlex">
        <ul className="hidden lg:flex items-center gap-12 ">
          <li>
            <a href="#" className="navbarLinks">
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
