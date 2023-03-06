import { Fragment, useEffect, useState } from "react";

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

  // Testing resolution width & hight
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
    // console.log(tumbelingEValue);
  }, [randomImage, tumbelingEValue]);

  useEffect(() => {}, [randomImage, eWidth, eHeight]);

  // Function for arrow-button click to check if correct arrow is clicked and to change size of E
  const clickedArrow = (e) => {
    e.preventDefault();
    let direction = e.currentTarget.name;
    console.log(direction);
    const randomIndex = Math.floor(Math.random() * tumbelingESrcList.length);
    setRandomImage(
      (randomImage) => (randomImage = tumbelingESrcList[randomIndex])
    );
    console.log(tumbelingEValue);
    if (direction === tumbelingEValue) {
      document.querySelector("#result").innerHTML = "correct!";
      setScores((scores) => scores + 1);
    } else {
      document.querySelector("#result").innerHTML = "wrong!";
      setScores((scores) => scores - 1);
    }
    // document.querySelector(".e-img").style.transform = "scale(0.8)";
    setEHeight((eHeight) => eHeight * 0.8);
    setEWith((eWidth) => eWidth * 0.8);
    document.querySelector(".e-img").style.width = eWidth + "px";
    document.querySelector(".e-img").style.height = eHeight + "px";
    console.log(eHeight, eWidth);
  };

  return (
    // Returning visual acuity test
    <Fragment>
      <main>
        <h2 className="page-title">Testa synskärp</h2>
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
            </div>
          </div>
          <div className="column">
            <div className="text container-card">
              <p>Fokusera på E-symbolen.</p>
              <p>Täck vänster öga men håll båda ögonen öppna.</p>
              <p>
                Klicka på piltangenterna för att ange i vilken riktning
                E-symbolen är vänd.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default VisualAcuityTest;
