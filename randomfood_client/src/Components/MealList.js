import React, { Component } from 'react';
import MealCard from './MealCard';
import {connect} from 'react-redux';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
        this.createMeals = this.createMeals.bind(this);
    }
    componentWillMount()
    {               
        fetch("http://localhost:57339/api/food/meals")
            .then(result => { return result.json(); })
            .then(data => {
                this.props.dispatch({
                    type:'FETCH_ALL_MEALS',
                    data});
            });
    }

    createMeals(meal)
    {   
        return (
            <div className="col-md-2">
                <MealCard meal={meal}></MealCard> 
            </div>
     );
    }

    flip()
    {
       this.setState((prevState) => {
           return {
               isCardFront: !prevState.isCardFront
           }
       })
    }

    render(){        
        var cards = this.props.meals.map(x => this.createMeals(x));
        return (
            <div className="row">
                {cards}
            </div>
        );
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);