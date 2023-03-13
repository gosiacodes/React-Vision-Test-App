import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

const StagePageAstT = () => {
  // Global settings
  let location = useLocation();
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  console.log(leftEye, rightEye);

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">Testa om du har astigmatism</h2>
        <div className="column">
          <div className="container-card">
            {leftEye ? (
              <div className="eye-row">
                <img
                  src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                  alt="eye open"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
                  alt="eye hidden"
                />
              </div>
            ) : (
              <div className="eye-row">
                <img
                  src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
                  alt="eye hidden"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                  alt="eye open"
                />
              </div>
            )}
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
              <p>Visas alla linjer i samma svarta nyans?</p>
              <p>
                Ser du att vissa linjer (1-2-3-4-5-6-7) verkar suddiga eller
                oklara i en eller flera riktningar?
              </p>
            </div>
            <div className="row">
              <NavLink
                to="/astigmatism"
                state={{
                  leftEye: leftEye,
                  rightEye: rightEye,
                }}
                className={"blue-btn"}
              >
                {" "}
                Nästa
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default StagePageAstT;
