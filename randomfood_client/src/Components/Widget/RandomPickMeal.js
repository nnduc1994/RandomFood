import React, {Component} from 'react'
import {connect} from 'react-redux';
import MealCard from './MealCard';
import EmptyCard from './EmptyCard';

class RandomPickMeal extends Component
{
    constructor(props)
    {
        super(props);
        this.randomPickCard = this.randomPickCard.bind(this);
        this.state = {
            currentRandomcard: null
        }
    }

    randomPickCard() 
    {
        this.setState(
            { currentRandomcard: this.props.meals[Math.floor(Math.random() * this.props.meals.length)] }
        )
    }

    render(){
        let defaultSrc = "https://grandchineserestaurant.com/img/placeholders/xcomfort_food_placeholder.png,qv=1.pagespeed.ic.x100Yi-Swz.png";
        
        let bodyContain = (this.state.currentRandomcard != null) ? <MealCard meal={this.state.currentRandomcard}></MealCard>
                          :  <EmptyCard ImageSrc={defaultSrc} Title="WHAT TO EAT?" ></EmptyCard>
        return(
            <div className="container">
                {bodyContain}
                <button onClick={this.randomPickCard} className="btn btn-default">Pick a meal</button>
            </div>
        )    
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(RandomPickMeal);
