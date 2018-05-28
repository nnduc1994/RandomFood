import React, { Component } from 'react';
import MealList from "./Components/MealList"
import FunctionBox from "./Components/FunctionBox"
class App extends Component {
  render() {
    return (
         <div className="App">
              <FunctionBox></FunctionBox>
              <MealList></MealList>
        </div>
    );
  }
}

export default App;
