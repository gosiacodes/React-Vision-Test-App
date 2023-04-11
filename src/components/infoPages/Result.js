import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Result = (props) => {
  // Global settings
  const leftEyeScores = props.leftEyeScores;
  const rightEyeScores = props.rightEyeScores;
  const leftEyeAnswer = props.leftEyeAnswer;
  const rightEyeAnswer = props.rightEyeAnswer;
  const languageValue = useSelector((state) => state.languageValue);

  // Function to go to Welcome Page and reset settings
  const goToWelcomePage = () => {
    props.setShowResult(false);
    props.setShowWelcomePage(true);
    props.setLeftEye(true);
    props.setLeftEyeScores(0);
    props.setRightEyeScores(0);
    props.setLeftEyeAnswer("");
    props.setRightEyeAnswer("");
  };

  return (
    // Returning result
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Ditt resultat"}
          {languageValue === "english" && "Your result"}
        </h2>
        <div className="column">
          <Card>
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
          </Card>
          <div className="info-result">
            <h3>
              {languageValue === "svenska" && "Tack för din tid!"}
              {languageValue === "english" && "Thank you for your time!"}
            </h3>
            <div className="row">
              <a href="https://imvilabs.com/" title="www.imvilabs.com">
                <Button type="button">
                  {languageValue === "svenska" && "Till imvi labs"}
                  {languageValue === "english" && "To imvi labs"}
                </Button>
              </a>
            </div>
          </div>
          {leftEyeAnswer === "no" ||
          rightEyeAnswer === "no" ||
          leftEyeScores < 3 ||
          rightEyeScores < 3 ? (
            <Card>
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
                  <Button
                    type="button"
                    onClick={(ev) => {
                      ev.preventDefault();
                      goToWelcomePage();
                    }}
                  >
                    {languageValue === "svenska" && "Börja om"}
                    {languageValue === "english" && "Start over"}
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            ""
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Result;
