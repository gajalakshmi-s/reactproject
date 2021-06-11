import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCart from './sampleComp/add'
import Headercomp from './header';
import FooterComp from './footer';

function App() {

  const [HdrText, setHdrText] = React.useState('Welcome to React');
  const [FtrText, setFtrText] = React.useState('@React');

  return (
    <div className="App">

      <Headercomp headerText={HdrText} />

      <AddCart />

      <FooterComp footerText={FtrText} />
    
    </div>
  );
}

export default App;
