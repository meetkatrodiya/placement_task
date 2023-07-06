import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import { useState,useEffect } from 'react';
import Profile from './components/profile';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List /> } />
        <Route path='user' element={<Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
