import React, { Component } from 'react'
import { connect } from 'react-redux';
import CompactMealCard from './CompactMealCard';

class RandomPickMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRandomcard: this.props.meals[Math.floor(Math.random() * this.props.meals.length)]
        }
        this.randomPickCard = this.randomPickCard.bind(this);
    }

    randomPickCard(e) 
    {   e.preventDefault();
        this.setState(
            { currentRandomcard: this.props.meals[Math.floor(Math.random() * this.props.meals.length)] }
        )
    }

    render() {
        return (
            
            <div>
                {(this.state.currentRandomcard != null) ? <CompactMealCard meal={this.state.currentRandomcard}></CompactMealCard> : ""} 
                <button onClick={this.randomPickCard} className="inline btn btn-warning">
                        <i class="fa fas fa-random"></i> Random Pick
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { meals: state };
}

export default connect(mapStateToProps)(RandomPickMeal);

