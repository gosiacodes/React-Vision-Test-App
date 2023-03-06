import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
// import Header from "./components/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import VisualAcuityTest from './pages/visualAcuityTest/VisualAcuityTest';
import AstigmatismTest from './pages/astigmatismTest/AstigmatismTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header />
    <App /> */}
    <BrowserRouter>
    {/* <HashRouter> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="synskarp" element={<VisualAcuityTest />} />
          <Route path="astigmatism" element={<AstigmatismTest />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    {/* </HashRouter> */}
    </BrowserRouter>
  </>
);



