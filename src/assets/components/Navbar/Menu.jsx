import { Button } from "antd";
import "./Menu.css";
function Menu() {
  return (
    <div className="defaultNavbarSettings">
      <h1 className="logo">Bakhtiyor</h1>
      <section className="navbarFlex">
        <ul className="flex items-center gap-12">
            <li><a href="#" className="navbarLinks">About me</a></li>
            <li><a href="#" className="navbarLinks">Portfolio</a></li>
            <li><a href="#" className="navbarLinks">Contacts</a></li>
        </ul>
      </section>
    </div>
  );
}
export default Menu;
