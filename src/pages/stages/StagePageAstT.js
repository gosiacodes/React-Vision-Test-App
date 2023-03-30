import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const StagePageAstT = () => {
  // Global settings
  let location = useLocation();
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  const leftEyeScores = location.state.leftEyeScores;
  const rightEyeScores = location.state.rightEyeScores;
  const leftEyeAnswer = location.state.leftEyeAnswer
    ? location.state.leftEyeAnswer
    : "";
  const languageValue = useSelector((state) => state.languageValue);
  console.log("Language value: " + languageValue);

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Testa om du har astigmatism"}
          {languageValue === "english" && "Test if you have astigmatism"}
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
                <p>Fokusera på mitten av halvcirkeln.</p>
                <p>
                  Visas alla linjer i samma svarta nyans eller ser du att vissa
                  linjer verkar suddiga eller oklara i en eller flera
                  riktningar?
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
                <p>Focus on the center of the semicircle.</p>
                <p>
                  Do all the lines appear in the same shade of black, or do you
                  see that some lines appear blurred or unclear in one or more
                  directions?
                </p>
              </div>
            )}
            <div className="row">
              <NavLink
                to="/astigmatism"
                state={{
                  leftEye: leftEye,
                  rightEye: rightEye,
                  leftEyeScores: leftEyeScores,
                  rightEyeScores: rightEyeScores,
                  leftEyeAnswer: leftEyeAnswer,
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

export default StagePageAstT;