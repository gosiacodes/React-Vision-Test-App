import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AstigmatismTest = () => {
  // Global settings
  const navigate = useNavigate();
  let location = useLocation();
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  console.log(leftEye, rightEye);

  // Function to get the value of answer and go to the next stage
  const clickedAstBtn = (e) => {
    e.preventDefault();
    let answer = e.currentTarget.value;
    console.log(answer);
    if (leftEye) {
      navigate("/astigmatism-instruktioner", {
        state: { leftEye: false, rightEye: true },
      });
    } else if (rightEye) {
      navigate("/result", { state: { leftEye: false, rightEye: false } });
    }
  };

  // Returning astigmatism test
  return (
    <Fragment>
      <main>
        <h2 className="page-title">Testa om du har astigmatism</h2>
        <div className="row-col-layout">
          <div className="column">
            <img
              className="astigmatism-img"
              src={process.env.PUBLIC_URL + "/images/astigmatism_test.jpg"}
              alt="astigmatism test chart"
            />
            <div className="column">
              <p>Visas alla linjer i samma nyans?</p>
              <div className="row">
                <button
                  className="blue-btn"
                  value="ja"
                  onClick={(event) => clickedAstBtn(event)}
                >
                  Ja
                </button>
                <button
                  className="blue-btn"
                  value="nej"
                  onClick={(event) => clickedAstBtn(event)}
                >
                  Nej
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="container-card">
              {leftEye ? (
                <div className="eye-row">
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                    alt="eye open"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                    alt="eye hidden"
                  />
                </div>
              ) : (
                <div className="eye-row">
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                    alt="eye hidden"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
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
            </div>
            <div className="text container-card">
              <p>
                [Resultat #1] Om strålarna verkar suddiga eller oklara i en
                eller flera riktningar kan det tyda på att du har astigmatism.
              </p>
              <p>
                [Resultat #2] Det verkar som att du inte visar symtom på
                astigmatism.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AstigmatismTest;
