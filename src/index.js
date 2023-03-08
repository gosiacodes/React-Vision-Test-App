import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import VisualAcuityTest from './pages/visualAcuityTest/VisualAcuityTest';
import AstigmatismTest from './pages/astigmatismTest/AstigmatismTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="synskarpa" element={<VisualAcuityTest />} />
          <Route path="astigmatism" element={<AstigmatismTest />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </>
);



