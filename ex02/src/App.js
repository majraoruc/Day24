import React, { Component } from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  }
  getMyStorage=()=>{
    let myCookieData = document.cookie.match(new RegExp("(^| )Year=([^;]+)"))[2];
    let myLocalStorageData = localStorage.getItem("Paragon");
    let mySessionStorageData = sessionStorage.getItem("frontend");
    console.log("cookie: ",myCookieData,"; local: ", myLocalStorageData,"; session:", mySessionStorageData);
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  }
  render() {
    return (
      <div className="App">
        <button type="submit"
          onClick={this.setMyStorage} >
            Set storage
          </button>
          <button type="submit"
          onClick={this.getMyStorage} >
            Get storage
          </button>
      </div>
    );
  }
}

export default App;