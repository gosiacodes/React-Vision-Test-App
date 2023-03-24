import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Returning header with logo and title with link
  return (
    <Fragment>
      <header className="header">
        <a href="https://imvilabs.com/" title="www.imvilabs.com" target={"blank"}>
          <img
            id="header-imvi-logo"
            src={process.env.PUBLIC_URL + "/images/imvi-logo.png"}
            alt="imvi labs logo"
          />
        </a>
        <NavLink to="/" className={"nav-link"} id={"nav-home"}>
          <h1 className="header-title">Syntest</h1>
        </NavLink>
      </header>
    </Fragment>
  );
};

export default Header;
