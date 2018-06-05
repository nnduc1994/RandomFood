import React, { Component } from 'react';
import MealCard from './Widget/MealCard';
import MealDetail from './MealDetail';
import PopupModal from './Widget/PopupModal';

import {connect} from 'react-redux';
import _ from 'lodash';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
        this.createMealCard = this.createMealCard.bind();
    }


    createMealCard(meal)
    {   
        return(
            <div>
                <MealCard modalId={`#${meal.Id}-detail-modal`} meal={meal}></MealCard>
                <PopupModal Title={meal.Name} CancleText="Close" OKText="Ok" ModalId={`${meal.Id}-detail-modal`}> 
                    <MealDetail recipe={meal}></MealDetail>
                </PopupModal>
            </div>
        );
    }

    render()
    {        
        let rows = this.props.meals.map(x => this.createMealCard(x));
        return(
            <div className="card-columns">
                {rows}
            </div>
        )
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);