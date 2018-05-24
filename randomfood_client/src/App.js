import React, { Component } from 'react';
import MealList from "./Components/MealList"
import RandomDrawMealCard from "./Components/RandomDrawMealCard"
class App extends Component {
  render() {
    return (
         <div className="App">
           <div className="row">
             <div className="col-md-8">
              <MealList></MealList>
             </div>
             <div className="col-md-4">
               <RandomDrawMealCard></RandomDrawMealCard>
             </div>
           </div>
        </div>
    );
  }
}

export default App;
