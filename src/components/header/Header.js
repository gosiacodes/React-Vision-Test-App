import { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const [language, setLanguage] = useState("svenska");
  const dispatch = useDispatch();

  // Using effect to update language when it changes
  useEffect(() => {
    console.log(language);
    dispatch({ type: "UPDATE_HEADER_VALUE", payload: language });
  }, [language, dispatch]);

  // Function to change language in the app 
  const changeLanguage = () => {
    if (language === "svenska") {
      setLanguage("english");
    } else {
      setLanguage("svenska");
    }
  };

  // Returning header with logo and title with link
  return (
    <Fragment>
      <header className="header">
        <a
          href="https://imvilabs.com/"
          title="www.imvilabs.com"
          target={"blank"}
        >
          <img
            id="header-imvi-logo"
            src={process.env.PUBLIC_URL + "/images/imvi-logo.png"}
            alt="imvi labs logo"
          />
        </a>
        <div className="nav-row">
          <NavLink to="/" className={"nav-link"} id={"nav-home"}>
            <h1 className="header-title">
              {language === "svenska" && "Syntest"}
              {language === "english" && "Vision test"}
            </h1>
          </NavLink>
          {language === "svenska" && (
            <img
              src={process.env.PUBLIC_URL + "/images/en.png"}
              alt="English flag"
              onClick={changeLanguage}
            />
          )}
          {language === "english" && (
            <img
              src={process.env.PUBLIC_URL + "/images/sv.png"}
              alt="Swedish flag"
              onClick={changeLanguage}
            />
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
