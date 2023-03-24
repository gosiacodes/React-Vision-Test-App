import { Fragment } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Result = () => {
  let location = useLocation();
  const leftEyeScores = location.state.leftEyeScores;
  const rightEyeScores = location.state.rightEyeScores;
  const leftEyeAnswer = location.state.leftEyeAnswer;
  const rightEyeAnswer = location.state.rightEyeAnswer;
  console.log(location);
  console.log(leftEyeScores, rightEyeScores);
  console.log(leftEyeAnswer, rightEyeAnswer);

  return (
    // Returning result
    <Fragment>
      <main>
        <h2 className="page-title">Ditt resultat</h2>
        <div className="column">
          <div className="container-card">
            <div className="text container-result">
              <h3>Synskärpa</h3>
              {leftEyeScores >= 3 && rightEyeScores >= 3 ? (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_64.png"
                      }
                      alt="check icon by Akveo"
                    />
                  </picture>
                  <p>
                    Ditt resultat visar att du har ingen problem med din
                    synskärpa.
                  </p>
                </div>
              ) : (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/close_Akveo_64.png"
                      }
                      alt="close icon by Akveo"
                    />
                  </picture>
                  <p>
                    Ditt resultat visar att du kan ha vissa problem med din
                    synskärpa och vi rekommenderar att du uppsöker en optiker
                    för att få detta verifierat.
                  </p>
                </div>
              )}{" "}
            </div>
            <div className="text container-result">
              <h3>Astigmatism</h3>
              {leftEyeAnswer === "ja" && rightEyeAnswer === "ja" ? (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_64.png"
                      }
                      alt="check icon by Akveo"
                    />
                  </picture>
                  <p>Det verkar som att du inte visar symtom på astigmatism.</p>
                </div>
              ) : (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/close_Akveo_64.png"
                      }
                      alt="close icon by Akveo"
                    />
                  </picture>
                  <p>
                    Det verkar som att du visar symtom på astigmatism och vi
                    rekommenderar att du uppsöker en optiker för att få detta
                    verifierat.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="info-result">
            <h3>Tack för din tid!</h3>
            <div className="row">
              <NavLink to="https://imvilabs.com/" className={"blue-btn"}>
                Till imvilabs
              </NavLink>
            </div>
          </div>
          {leftEyeAnswer === "nej" ||
          rightEyeAnswer === "nej" ||
          leftEyeScores < 3 ||
          rightEyeScores < 3 ? (
            <div className="container-card">
              <div className="info-result">
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_64.png"
                      }
                      alt="help icon by Microsoft"
                    />
                  </picture>
                  <p className="text">
                    Om du tror att du har svarat fel av misstag gör testet en
                    gång till.
                  </p>
                </div>
                <div className="row">
                  <NavLink to="/" className={"blue-btn"}>
                    Börja om
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Result;
