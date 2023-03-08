import { Fragment } from "react";

const AstigmatismTest = () => {
  const clickedAstBtn = (e) => {
    e.preventDefault();
    let answer = e.currentTarget.value;
    console.log(answer);
    document.querySelector("#left-eye-ast").style.display = "none";
    document.querySelector("#right-eye-ast").style.display = "inline-block";
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
            <div className="text container-card">
              <p>
                Håll båda ögonen öppna och täck{" "}
                <span id="left-eye-ast" style={{ fontWeight: "bold" }}>
                  vänster
                </span>{" "}
                <span
                  id="right-eye-ast"
                  style={{ fontWeight: "bold", display: "none" }}
                >
                  höger
                </span>{" "}
                öga.
              </p>
              <p>Fokusera på mitten av halvcirkeln.</p>
              <p>Visas alla linjer i samma svarta nyans?</p>
              <p>
                Ser du att vissa linjer (1-2-3-4-5-6-7) verkar suddiga eller
                oklara i en eller flera riktningar?
              </p>
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
