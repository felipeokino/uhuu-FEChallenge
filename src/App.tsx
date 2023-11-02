import React, { useMemo, useState } from 'react';

import { Context } from './contexts/movies';
import { TMovieBasic } from './@types/movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Layout from './components/Layout';
import MoviesByGenres from './pages/MoviesByGenres';
import Header from './components/Header';


function App() {
  const [ movies, seTMovieBasics ] = useState<TMovieBasic[]>([]);
  const initialData = useMemo(() => ({ movies, seTMovieBasics }), []);
  
  return (
    <Context.Provider value={initialData}>
      <Layout>
        <BrowserRouter basename='/'>
          <Header />
          <Routes>
            <Route Component={Home} path='/popular'  />
            <Route Component={MoviesByGenres} path='/discover'  />
            <Route Component={Details} path='/movies/:id'  />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Context.Provider>
  );
}

export default App;
