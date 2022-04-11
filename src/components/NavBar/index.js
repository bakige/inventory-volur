import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import {
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaHome,
} from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  return (
    <div
      className="top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <ThemeIcon size="40" />
      <Divider />
      <SideBarIcon link="/home" icon={<FaHome size="28" />} text="Home page" />
      <SideBarIcon
        link="/inventory"
        icon={<BsPlus size="32" />}
        text="Inventory"
      />
      <SideBarIcon
        link="/home"
        icon={<BsFillLightningFill size="20" text="Home page" />}
      />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, link, text = "tooltip 💡" }) => (
  <Link to={{ pathname: link }}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="sidebar-icon group">
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
      <span className="sidebar-tooltip group-hover:scale-100">
        Change Theme
      </span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default Navbar;
