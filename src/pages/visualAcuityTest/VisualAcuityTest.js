import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VisualAcuityTest = () => {
  // Global settings
  const navigate = useNavigate();
  let location = useLocation();
  const tumbelingESrcList = [
    process.env.PUBLIC_URL + "/images/E_left.jpg",
    process.env.PUBLIC_URL + "/images/E_right.jpg",
    process.env.PUBLIC_URL + "/images/E_up.jpg",
    process.env.PUBLIC_URL + "/images/E_down.jpg",
  ];
  const [randomImage, setRandomImage] = useState(
    process.env.PUBLIC_URL + "/images/E_left.jpg"
  );
  const [tumbelingEValue, setTumbelingEValue] = useState("left");
  const [eWidth, setEWith] = useState(20);
  const [eHeight, setEHeight] = useState(20);
  const [counter, setCounter] = useState(0);
  const getLeftEyeScores = location.state.leftEyeScores
    ? location.state.leftEyeScores
    : 0;
  const [leftEyeScores, setLeftEyeScores] = useState(getLeftEyeScores);
  const [rightEyeScores, setRightEyeScores] = useState(0);
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  console.log(location);
  console.log(leftEye, rightEye);

  // Using effect to change tumbeling E value when E-image changes
  useEffect(() => {
    if (randomImage === process.env.PUBLIC_URL + "/images/E_left.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "left"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_right.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "right"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_up.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "up"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_down.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "down"));
    }
  }, [randomImage, tumbelingEValue]);

  // Using effect to set size on tumbeling E
  useEffect(() => {
    document.querySelector(".e-img").style.height = eHeight + "px";
    document.querySelector(".e-img").style.width = eWidth + "px";
  }, [eWidth, eHeight]);

  // Using effect when counter = 4 to go to next stage
  useEffect(() => {
    if (counter === 4) {
      if (leftEye) {
        navigate("/synskarpa-instruktioner", {
          state: {
            leftEye: false,
            rightEye: true,
            leftEyeScores: leftEyeScores,
          },
        });
      } else if (rightEye) {
        navigate("/astigmatism-instruktioner", {
          state: {
            leftEye: true,
            rightEye: false,
            leftEyeScores: leftEyeScores,
            rightEyeScores: rightEyeScores,
          },
        });
      }
      // Reseting counter and size of E
      setCounter((counter) => (counter = 0));
      setEHeight((eHeight) => (eHeight = 20));
      setEWith((eWidth) => (eWidth = 20));
    }
  }, [counter, leftEye, leftEyeScores, navigate, rightEye, rightEyeScores]);

  // Function for arrow-button click to check if correct arrow is clicked and to change size of E
  // If correct arrow is clicked - to add 1 score to result-scores
  const clickedArrow = (e) => {
    e.preventDefault();
    if (counter < 4) {
      setCounter((counter) => (counter = counter + 1));
      let direction = e.currentTarget.name;
      const randomIndex = Math.floor(Math.random() * tumbelingESrcList.length);
      setRandomImage(
        (randomImage) => (randomImage = tumbelingESrcList[randomIndex])
      );
      if (direction === tumbelingEValue) {
        if (leftEye) {
          setLeftEyeScores((leftEyeScores) => leftEyeScores + 1);
        } else if (rightEye) {
          setRightEyeScores((rightEyeScores) => rightEyeScores + 1);
        }
      }
      setEHeight((eHeight) => eHeight * 0.8);
      setEWith((eWidth) => eWidth * 0.8);
      console.log(eHeight, eWidth);
    }
  };

  return (
    // Returning visual acuity test
    <Fragment>
      <main>
        <h2 className="page-title">Testa din synskärpa</h2>
        <div className="row-col-layout">
          <div className="column">
            <button
              name="up"
              className="arrow-btn"
              onClick={(event) => clickedArrow(event)}
            >
              {" "}
              <picture>
                <source
                  srcSet={process.env.PUBLIC_URL + "/images/arrow_up_32.png"}
                  media="(max-width: 390px)"
                />
                <img
                  className="arrow-img"
                  src={process.env.PUBLIC_URL + "/images/arrow_up_48.png"}
                  alt="arrow up"
                />
              </picture>
            </button>
            <div className="row">
              <button
                name="left"
                className="arrow-btn"
                onClick={(event) => clickedArrow(event)}
              >
                {" "}
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/arrow_left_32.png"
                    }
                    media="(max-width: 390px)"
                  />
                  <img
                    className="arrow-img"
                    src={process.env.PUBLIC_URL + "/images/arrow_left_48.png"}
                    alt="arrow left"
                  />
                </picture>
              </button>
              <img
                className="e-img"
                src={randomImage}
                alt="tumbling E"
                value={tumbelingEValue}
              />
              <button
                name="right"
                className="arrow-btn"
                onClick={(event) => clickedArrow(event)}
              >
                {" "}
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/arrow_right_32.png"
                    }
                    media="(max-width: 390px)"
                  />
                  <img
                    className="arrow-img"
                    src={process.env.PUBLIC_URL + "/images/arrow_right_48.png"}
                    alt="arrow right"
                  />
                </picture>
              </button>
            </div>
            <button
              name="down"
              className="arrow-btn"
              onClick={(event) => clickedArrow(event)}
            >
              {" "}
              <picture>
                <source
                  srcSet={process.env.PUBLIC_URL + "/images/arrow_down_32.png"}
                  media="(max-width: 390px)"
                />
                <img
                  className="arrow-img"
                  src={process.env.PUBLIC_URL + "/images/arrow_down_48.png"}
                  alt="arrow down"
                />
              </picture>
            </button>
          </div>
          <div className="column">
            <div className="container-card">
              {leftEye ? (
                <div className="eye-row">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                      alt="eye hidden"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-open-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                      alt="eye open"
                    />
                  </picture>
                </div>
              ) : (
                <div className="eye-row">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-open-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                      alt="eye open"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                      alt="eye hidden"
                    />
                  </picture>
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
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default VisualAcuityTest;
