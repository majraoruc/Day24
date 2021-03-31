import React, { Component } from 'react';


class App extends Component {

  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  }
  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
    return myLocalStorageData;
  }
  render() {
    return (
      <div className="App">
        <button
          type="submit"
          onClick={this.setLocalStorage}>
          Set local storage
          </button>
        <button
          type="submit"
          onClick={this.getLocalStorage}>
          Get local storage
          </button>
      </div>
    );
  }
}

export default App;