import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './Heading'
import Content from './band'
import Display from './display'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <Content />
        

      </header>
    </div>
  );
}

export default App;
