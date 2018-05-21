import React, { Component } from 'react';
import MealItem from './MealItem';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            meals: []
        };
    }
    ComponentDidMount()
    {

    }
    render()
    {
        return (
            <div>
                Wala from Meal List
            </div>    
        );
    }
}

export default MealList;