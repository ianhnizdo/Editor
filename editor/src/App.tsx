
import React, {useState, useEffect} from 'react';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BigScreen from './components/BigScreen';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>

      <div className="App">
        <header className="App-header">
          <BigScreen />
          </header>
        </div>
      </DndProvider>
  );
}

export default App;