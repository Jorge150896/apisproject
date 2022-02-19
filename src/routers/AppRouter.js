import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import AboutPage from '../pages/About/AboutPage';
import ErorrPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/apisproject">
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/fakestore" exact={true} element={<HomePage />} />
        <Route path="/placeholder" exact={true} element={<Placeholder />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="*" exact={true} element={<ErorrPage />} />
      </Routes>
    </BrowserRouter>
  );
};
