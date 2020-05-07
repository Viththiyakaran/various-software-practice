import React from 'react';
const api  = {
    key : "e25466752eb21d8c74cc930850c07137",
    base : "https://api.openweathermap.org/data/2.5"
}


function App() {
  return (
    <div className="app">
      <main> 
        <div className="search-box" >
          <input
            type="text"
            className = "search-bar"
            placeholder = "search here"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
