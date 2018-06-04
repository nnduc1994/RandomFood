import React, { Component } from 'react';
import MealList from "./Components/MealList"
import FunctionBox from "./Components/FunctionBox"
import { connect } from 'react-redux';
import {GetMeals} from "./Helpers/API/RandomMealAPIHelper";
import LoadingAnimation from "./Components/Widget/LoadingAnimation";
class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
       dataLoaded : false
    } 
  }

  componentDidMount()
  {   
      GetMeals()
        .then(data => { 
            this.props.dispatch({
                type:'FETCH_ALL_MEALS',
                data});
            this.setState({dataLoaded: true})
          })
          .catch(error => console.log(error))
  }

  render() {
    if(this.state.dataLoaded)
    {
        return (
          <div className="App">
              <FunctionBox></FunctionBox>
              <div className="main-content">
                <MealList></MealList>
              </div>
        </div>
        );

    }
    else
      return (<LoadingAnimation message="Fetching data...."></LoadingAnimation>)
   
  }
}

export default connect()(App);
