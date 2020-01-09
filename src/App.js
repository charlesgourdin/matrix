import React from 'react';
import './App.css';
import Column from './components/Column';

const tab = new Array(30)
for (let i = 0; i < tab.length; i++) {
  tab[i] = <Column />
}

function App() {



  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {tab.map(item => item)}
      </div>
    </div>
  );
}

export default App;
