import React from 'react';
import Tile from './components/tile';

class App extends React.Component {

  render () { 
    return (
      <div className="tiles-list">
        <Tile />
      </div>
    );
      
  }
}

export default App;