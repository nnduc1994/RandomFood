import React, { Component } from 'react';
import MealCard from './MealCard';
import {connect} from 'react-redux';

class MealList extends Component
{
    constructor(props)
    {
        let currentCardInRow = 0;
        super(props);
        this.createCardRows = this.createCardRows.bind(this);
        this.createRow = this.createRow.bind(this);
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

    createRow(meals)
    {
        console.log(meals.children);
        return(
            <div className="row">
                {meals}
            </div>
        );
    }

    createCardRows(meals)
    {
        let tempList = [];
        let goingTobeRows = []
        let mealCards = meals.map((meal, index) => {
            if(index  % 4 == 0)
                {
                    goingTobeRows.push(this.createRow(tempList));
                    tempList = [];
                }
            else 
                {
                    tempList.push(    
                        <div className="col-md-3">
                            <MealCard meal={meal}></MealCard> 
                        </div> 
                    );
                }
        });
        console.log(goingTobeRows);      
        return(
            goingTobeRows 
        )
    }

   

    render(){        
        let cardRows = this.createCardRows(this.props.meals);
     
        return(
            cardRows      
        );
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);