import React, { Component } from 'react';
import MealItem from './MealItem';
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
        fetch("http://localhost:57338/api/food/meals")
            .then(result => { return result.json(); })
            .then(data => {
                this.props.dispatch({
                    type:'FETCH_ALL_MEALS',
                    data});
            });
    }

    createMeals(meal)
    {
        return ( <div>{meal.Name}</div> );
    }

    render()
    {        
            // var domHTML = this.props.meals.map(x => this.createMeals(x));
            // return (
            //     domHTML   
            // )   
        let style = 
        {
            width:'18rem'
        }
        return (

            <div className="card" style={style}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
             </div>
        );
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);