import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VisualAcuityTest = () => {
  // Global settings
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
  const [scores, setScores] = useState(0);
  const [eWidth, setEWith] = useState(20);
  const [eHeight, setEHeight] = useState(20);
  const [counter, setCounter] = useState(0);
  const [leftEyeScores, setLeftEyeScores] = useState(0);
  const [rightEyeScores, setRightEyeScores] = useState(0);
  const navigate = useNavigate();
  let location = useLocation();
  // const [leftEye, setLeftEye] = useState(location.state.leftEye);
  // const [rightEye, setRightEye] = useState(location.state.rightEye);
  const leftEye = location.state.leftEye;
  const rightEye = location.state.rightEye;
  console.log(leftEye, rightEye);

  // Testing resolution width & height
  // const ratio = window.devicePixelRatio;
  // console.log("device pixel ratio: " + ratio);

  // const deviceWidth =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  // const deviceHeight =
  //   window.innerHeight ||
  //   document.documentElement.clientHeight ||
  //   document.body.clientHeight;
  // console.log("Device width and height: " + deviceWidth + " x " + deviceHeight);

  // const screenWidth = window.screen.width;
  // const screenHeight = window.screen.height;
  // console.log("Screen width and height: " + screenWidth + " x " + screenHeight);

  // const screenAvWidth = window.screen.availWidth;
  // const screenAvHeight = window.screen.availHeight;
  // console.log(
  //   "Screen avaiable width and height: " +
  //     screenAvWidth +
  //     " x " +
  //     screenAvHeight
  // );

  // console.log(
  //   "Your screen resolution is: " +
  //     screenWidth * ratio +
  //     " x " +
  //     screenHeight * ratio
  // );

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

  useEffect(() => {
    document.querySelector(".e-img").style.height = eHeight + "px";
    document.querySelector(".e-img").style.width = eWidth + "px";
  }, [eWidth, eHeight]);

  // Function for arrow-button click to check if correct arrow is clicked and to change size of E
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
        document.querySelector("#result").innerHTML = "correct!";
        setScores((scores) => scores + 1);
        if (leftEye) {
          setLeftEyeScores((leftEyeScores) => leftEyeScores + 1);
        } else if (rightEye) {
          setRightEyeScores((rightEyeScores) => rightEyeScores + 1);
        }
      } else {
        document.querySelector("#result").innerHTML = "wrong!";
        setScores((scores) => scores - 1);
        if (leftEye) {
          setLeftEyeScores((leftEyeScores) => leftEyeScores - 1);
        } else if (rightEye) {
          setRightEyeScores((rightEyeScores) => rightEyeScores - 1);
        }
      }
      setEHeight((eHeight) => eHeight * 0.8);
      setEWith((eWidth) => eWidth * 0.8);
      console.log(eHeight, eWidth);
    }
    if (counter === 4) {
      if (leftEye) {
        // setLeftEye(false);
        // setRightEye(true);
        navigate("/synskarpa-instruktioner", {
          state: { leftEye: false, rightEye: true },
        });
        // navigate("/synskarpa-instruktioner", {
        //   state: { leftEye: leftEye, rightEye: rightEye },
        // });
      } else if (rightEye) {
        // setLeftEye(true);
        // setRightEye(false);
        navigate("/astigmatism-instruktioner", {
          state: { leftEye: true, rightEye: false },
        });
        // navigate("/astigmatism", {
        //   state: { leftEye: leftEye, rightEye: rightEye },
        // });
      }
      resetSettings();
    }
  };

  useEffect(() => {}, [leftEye, rightEye, counter]);

  // Function to reset scores and size of E
  const resetSettings = () => {
    console.log("reset eye");
    setCounter((counter) => (counter = 0));
    setScores((scores) => (scores = 0));
    document.querySelector("#result").innerHTML = "result";
    setEHeight((eHeight) => (eHeight = 20));
    setEWith((eWidth) => (eWidth = 20));
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
            <div className="row">
              <h3 id="result">result</h3>
              <h3 id="scores">{scores}</h3>
              <h3 id="scores">counter: {counter}</h3>
            </div>
            <div className="row">
              <h3 id="scores">left eye scores: {leftEyeScores}</h3>
              <h3 id="scores">right eye scores: {rightEyeScores}</h3>
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
