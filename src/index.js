import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
// import 'font-awesome/css/font-awesome.min.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import VisualAcuityTest from "./pages/visualAcuityTest/VisualAcuityTest";
import AstigmatismTest from "./pages/astigmatismTest/AstigmatismTest";
import StagePageVAT from "./pages/stages/StagePageVAT";
import StagePageAstT from "./pages/stages/StagePageAstT";
import Result from "./pages/result/Result";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="synskarpa-instruktioner" element={<StagePageVAT />} />
            <Route
              path="astigmatism-instruktioner"
              element={<StagePageAstT />}
            />
            <Route path="synskarpa" element={<VisualAcuityTest />} />
            <Route path="astigmatism" element={<AstigmatismTest />} />
            <Route path="result" element={<Result />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </>
);
