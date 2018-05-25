import React, { Component } from 'react';
import MealList from "./Components/MealList"
import FunctionBox from "./Components/FunctionBox"
class App extends Component {
  render() {
    return (
         <div className="App">
           <div className="row">
             <div className="col-md-8">
              <MealList></MealList>
             </div>
             <div className="col-md-4">
               <FunctionBox></FunctionBox>
             </div>
           </div>
        </div>
    );
  }
}

export default App;
