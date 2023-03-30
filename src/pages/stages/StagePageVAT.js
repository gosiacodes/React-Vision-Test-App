import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const StagePageVAT = () => {
  // Global settings
  let location = useLocation();
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  const getLeftEyeScores = location.state.leftEyeScores
    ? location.state.leftEyeScores
    : 0;
  const languageValue = useSelector((state) => state.languageValue);
  console.log("Language value: " + languageValue);

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Testa din synskärpa"}
          {languageValue === "english" && "Test your visual acuity"}
        </h2>
        <div className="column">
          <div className="container-card">
            {leftEye ? (
              <div className="eye-row">
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                    }
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-64.png"
                    }
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
                    alt="eye hidden"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-48.png"}
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                    alt="eye open"
                  />
                </picture>
              </div>
            ) : (
              <div className="eye-row">
                <picture>
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-48.png"}
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                    alt="eye open"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                    }
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-64.png"
                    }
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
                    alt="eye hidden"
                  />
                </picture>
              </div>
            )}
            {languageValue === "svenska" && (
              <div className="text">
                <p>
                  Håll båda ögonen öppna och täck{" "}
                  {leftEye ? (
                    <span id="left-eye" style={{ fontWeight: "bold" }}>
                      vänster
                    </span>
                  ) : (
                    <span id="right-eye" style={{ fontWeight: "bold" }}>
                      höger
                    </span>
                  )}{" "}
                  öga.
                </p>
                <p>Fokusera på E-symbolen.</p>
                <p>
                  Klicka på piltangenterna för att ange i vilken riktning
                  E-symbolen är vänd.
                </p>
              </div>
            )}
            {languageValue === "english" && (
              <div className="text">
                <p>
                  Keep both eyes open and cover the{" "}
                  {leftEye ? (
                    <span id="left-eye" style={{ fontWeight: "bold" }}>
                      left
                    </span>
                  ) : (
                    <span id="right-eye" style={{ fontWeight: "bold" }}>
                      right
                    </span>
                  )}{" "}
                  eye.
                </p>
                <p>Focus on the E symbol.</p>
                <p>
                  Click the arrow keys to indicate which direction the E symbol
                  is facing.
                </p>
              </div>
            )}
            <div className="row">
              <NavLink
                to="/synskarpa"
                state={{
                  leftEye: leftEye,
                  rightEye: rightEye,
                  leftEyeScores: getLeftEyeScores,
                }}
                className={"blue-btn"}
              >
                {" "}
                {languageValue === "svenska" && "Nästa"}
                {languageValue === "english" && "Next"}
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default StagePageVAT;
