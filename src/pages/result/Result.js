import { Fragment } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  let location = useLocation();
  const leftEyeScores = location.state.leftEyeScores;
  const rightEyeScores = location.state.rightEyeScores;
  const leftEyeAnswer = location.state.leftEyeAnswer;
  const rightEyeAnswer = location.state.rightEyeAnswer;
  const languageValue = useSelector((state) => state.languageValue);
  console.log("Language value: " + languageValue);

  return (
    // Returning result
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Ditt resultat"}
          {languageValue === "english" && "Your result"}
        </h2>
        <div className="column">
          <div className="container-card">
            <div className="text container-result">
              <h3>
                {languageValue === "svenska" && "Synskärpa"}
                {languageValue === "english" && "Visual acuity"}
              </h3>
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
                  {languageValue === "svenska" && (
                    <p>
                      Ditt resultat visar att du har ingen problem med din
                      synskärpa.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      Your result shows that you have no problem with your
                      visual acuity.
                    </p>
                  )}
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
                  {languageValue === "svenska" && (
                    <p>
                      Ditt resultat visar att du kan ha vissa problem med din
                      synskärpa och vi rekommenderar att du uppsöker en optiker
                      för att få detta verifierat.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      Your result shows that you may have some problems with
                      your visual acuity and we recommend that you see an
                      optician to have this verified.
                    </p>
                  )}
                </div>
              )}{" "}
            </div>
            <div className="text container-result">
              <h3>Astigmatism</h3>
              {leftEyeAnswer === "yes" && rightEyeAnswer === "yes" ? (
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
                  {languageValue === "svenska" && (
                    <p>
                      Det verkar som att du inte visar symtom på astigmatism.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      It appears that you are not showing symptoms of
                      astigmatism.
                    </p>
                  )}
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
                  {languageValue === "svenska" && (
                    <p>
                      Det verkar som att du visar symtom på astigmatism och vi
                      rekommenderar att du uppsöker en optiker för att få detta
                      verifierat.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      It appears that you are showing symptoms of astigmatism
                      and we recommend that you see an optician to have this
                      verified.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="info-result">
            <h3>
              {languageValue === "svenska" && "Tack för din tid!"}
              {languageValue === "english" && "Thank you for your time!"}
            </h3>
            <div className="row">
              <NavLink to="https://imvilabs.com/" className={"blue-btn"}>
                {languageValue === "svenska" && "Till imvilabs"}
                {languageValue === "english" && "To imvilabs"}
              </NavLink>
            </div>
          </div>
          {leftEyeAnswer === "no" ||
          rightEyeAnswer === "no" ||
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
                    {languageValue === "svenska" &&
                      "Om du tror att du har svarat fel av misstag gör testet en gång till."}
                    {languageValue === "english" &&
                      "If you think you have answered incorrectly by mistake, take the test again."}
                  </p>
                </div>
                <div className="row">
                  <NavLink to="/" className={"blue-btn"}>
                    {languageValue === "svenska" && "Börja om"}
                    {languageValue === "english" && "Start over"}
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
