import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Login.tsx';
// bootsrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap.min.js OR bundle
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Singup from './Other/Singup.tsx';
import Pre from './Rotate/Pre.tsx';

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Singup/>
      {/* <Pre/> */}
    </div>
  );
}

export default App;
