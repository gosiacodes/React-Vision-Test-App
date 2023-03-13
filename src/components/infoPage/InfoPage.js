import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const InfoPage = () => {
  // Global settings
  let leftEye = true;
  let rightEye = false;

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">Här kan du göra vårt syntest</h2>
        <div className="row-col-layout">
          <div className="column">
            <img
              className="vision-test-img"
              src={process.env.PUBLIC_URL + "/images/vision-test-img.jpg"}
              alt="girl taking vision test"
            />
          </div>
          <div className="column">
            <div className="container-card">
              <div className="text">
                <p>
                  För att kunna träna din ögonkoordination är det viktigt att du
                  har en fungerande syn. Testa din syn gratis här!
                </p>
                <p>
                  För vår ögonträning är de två testerna relevanta: Synskärpa
                  och Astigmatism.
                </p>
                <p>
                  Testerna ska göras på 1 meter avstånd från en datorskärm eller
                  40 cm avstånd från en mobilskärm.
                </p>
                <p>
                  Om du använder glasögon / kontaktlinser för att se på håll
                  eller progressiva glas ska du behålla dessa på under testet.
                </p>
                <p>
                  Detta test ersätter inte en komplett synundersökning som görs
                  av en optiker.
                </p>
                <p>
                  Om testet visar att du behöver en synundersökning bör du
                  uppsöka en optiker före start av vår träning.
                </p>
              </div>
              <div className="row">
                <NavLink
                  to="/synskarpa-instruktioner"
                  state={{
                    leftEye: leftEye,
                    rightEye: rightEye,
                  }}
                  className={"blue-btn"}
                >
                  {" "}
                  Gör testet
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <h2 className="page-title beta">OBS! Beta-version!</h2>
      </main>
    </Fragment>
  );
};

export default InfoPage;
