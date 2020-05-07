import React from 'react';
const api  = {
    key : "e25466752eb21d8c74cc930850c07137",
    base : "https://api.openweathermap.org/data/2.5"
}


function App() {

  const dataBuilder = (d) =>{
    let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
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

        <div className="location-box">
           <div className="location"> Batticaloa, SL</div>
  <div className="date"> { dataBuilder(new Date())}</div>
        
        </div>
      </main>
    </div>
  );
}

export default App;
