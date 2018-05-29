import React, { Component } from 'react';
import MealCard from './Widget/MealCard';
import {connect} from 'react-redux';
import _ from 'lodash';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
        this.createCardRows = this.createCardRows.bind(this);
    }

    // componentDidMount()
    // {               
    //     fetch("http://localhost:57339/api/food/meals")
    //         .then(result => { return result.json(); })
    //         .then(data => {
    //             this.props.dispatch({
    //                 type:'FETCH_ALL_MEALS',
    //                 data});
    //         });
    // }

    createCardRows(meals)
    {  
       let mealColumns = meals.map((meal) => {
            return <div className="col-md-3"><MealCard meal={meal}></MealCard></div>
       });

       return(
            <div className="row">
                {mealColumns} 
            </div>
       );
    }

    render()
    {        
        let mealChunkArray = _.chunk(this.props.meals, 4);
        let rows = mealChunkArray.map(x => this.createCardRows(x));
        return(
            rows
        )
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);