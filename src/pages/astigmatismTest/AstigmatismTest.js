import { Fragment } from "react";

const AstigmatismTest = () => {
  // Returning astigmatism test
  return (
    <Fragment>
      <main>
        <h2 className="page-title">Testa astigmatism</h2>
        <div className="row-col-layout">
          <div className="column">
            <img
              className="astigmatism-img"
              src={process.env.PUBLIC_URL + "/images/astigmatism_test.jpg"}
              alt="astigmatism test chart"
            />
          </div>
          <div className="column">
            <div className="text container-card">
              <p>Fokusera på mitten av halvcirkeln.</p>
              <p>Visas alla linjer i samma svarta nyans?</p>
              <p>
                Ser du att vissa linjer (1-2-3-4-5-6-7) är mörkare eller
                skarpare än andra?
              </p>
              <p>
                Om vissa linjer ser gråare ut än andra, kan du ha astigmatism
                och behöva en omfattande ögonundersökning från en optiker.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AstigmatismTest;
