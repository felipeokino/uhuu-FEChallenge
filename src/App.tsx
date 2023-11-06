import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Details from './pages/Details';
import Home from './pages/MoviesByPopularity';
import GlobalStyles from './styles/global';


export default function App() {
  return (
    <>
      <GlobalStyles  />
      <BrowserRouter basename='/'>
        <Layout>
          <Routes>
            <Route Component={Home} path='/'  />
            <Route Component={Details} path='/movies/:id'  />
          </Routes>
        </Layout>
        
      </BrowserRouter>
    </>
  );
}


