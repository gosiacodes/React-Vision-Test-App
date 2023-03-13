import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

const StagePageVAT = () => {
  // Global settings
  let location = useLocation();
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  console.log(leftEye, rightEye);

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">Testa din synskärpa</h2>
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
              <p>Fokusera på E-symbolen.</p>
              <p>
                Klicka på piltangenterna för att ange i vilken riktning
                E-symbolen är vänd.
              </p>
            </div>
            <div className="row">
              <NavLink
                to="/synskarpa"
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

export default StagePageVAT;
