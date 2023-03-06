import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Returning header with logo, title and links
  return (
    <Fragment>
      <header className="header">
        <div className="header-row">
          <a href="https://imvilabs.com/" title="www.imvi.com" target={"blank"}>
            <img
              id="header-imvi-logo"
              src={process.env.PUBLIC_URL + "/images/imvi-logo.png"}
              alt="imvi labs logo"
            />
          </a>
          <h1 className="header-title">Syntest</h1>
        </div>
        <div className="nav-group">
          <NavLink to="/" className={"nav-link"} id={"nav-home"}>
            Hem
          </NavLink>
          <NavLink
            to="/synskarp"
            className={"nav-link"}
            id={"nav-visual-acuity"}
          >
            Synskärp
          </NavLink>
          <NavLink
            to="/astigmatism"
            className={"nav-link"}
            id={"nav-astigmatism"}
          >
            Astigmatism
          </NavLink>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
