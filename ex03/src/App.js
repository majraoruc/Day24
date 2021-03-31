import React, { Component } from 'react';

class App extends Component {

  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  }
  render() {
    return (
      <div className="App">
        <button
          type="submit"
          onClick={this.setLocalStorage}>
          Set local storage
          </button>
      </div>
    );
  }
}

export default App;