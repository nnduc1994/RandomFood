import React, { Component } from 'react';
import MealList from "./Components/MealList"
import FunctionBox from "./Components/FunctionBox"
import { connect } from 'react-redux';

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
      fetch("http://localhost:57339/api/food/meals")
          .then(result => { return result.json(); })
          .then(data => {
              this.props.dispatch({
                  type:'FETCH_ALL_MEALS',
                  data});
              this.setState({dataLoaded: true})     
          });
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
      return (<div>Loading</div>)
   
  }
}

export default connect()(App);
