import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import $ from "jquery"
import { Landing } from './(pages)/landing';
import { NavBar } from './shared-components/NavBar';
import { Footer } from './shared-components/Footer';

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <div className="App">
      {mounted &&
        <>
          <Landing />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
