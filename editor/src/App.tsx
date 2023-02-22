
import React, {useState, useEffect} from 'react';
import Drag from './components/Drag';
import Drop from './components/Drop';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DropDetails } from './models/DropDetails';
import BigScreen from './components/BigScreen';
// import logo from './logo.svg';
import './App.css';

function App() {

  // const [dropOrder, setDropOrder] = useState<DropDetails[]>([]);

  
  return (
    <DndProvider backend={HTML5Backend}>

      <div className="App">
        <header className="App-header">
          {/* <Drag />
          <Drop stringArr={dropOrder}/> */}
          <BigScreen />
          </header>
        </div>
      </DndProvider>
  );
}

export default App;