import React, { Component } from 'react'
import { connect } from 'react-redux';
import CompactMealCard from './CompactMealCard';

class RandomPickMeal extends Component {
    constructor(props) {
        super(props);
        //this.randomPickCard = this.randomPickCard.bind(this);
        // this.state = {
        //     currentRandomcard: null
        // }
    }

    // randomPickCard() 
    // {
    //     this.setState(
    //         { currentRandomcard: this.props.meals[Math.floor(Math.random() * this.props.meals.length)] }
    //     )
    // }

    render() {
        let currentRandomcard = this.props.meals[Math.floor(Math.random() * this.props.meals.length)];
        return (
            
            <div>
                {(currentRandomcard != null) ? <CompactMealCard meal={currentRandomcard}></CompactMealCard> : ""} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { meals: state };
}

export default connect(mapStateToProps)(RandomPickMeal);

