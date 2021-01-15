import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <h4>Post</h4>
        <hr/>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;