import { Link } from "react-router-dom";
import LogoBank from "../../assets/img/argentBankLogo.png";
import "./Header.sass";
const Header = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={LogoBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
