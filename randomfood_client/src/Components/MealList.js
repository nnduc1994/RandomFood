import React, { Component } from 'react';
import MealCard from './MealCard';
import {connect} from 'react-redux';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
        this.createMeals = this.createMeals.bind(this);
        this.state = {
            isCardFront : true
        }
        this.flip = this.flip.bind(this);
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

    flip()
    {
       this.setState((prevState) => {
           return {
               isCardFront: !prevState.isCardFront
           }
       })
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
        let src = "https://www.metro.ca/userfiles/image/recipes/pizza-saucisse-piquante-2301.jpg";
        return (
            <div className={(this.state.isCardFront) ? "card-flip " : "card-flip card-rotate"}>
					<div className="flip">
						<div className="front">
                            <div className="card" style={style}>
                                <img className="card-img-top" src={src} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="card-link" onClick={this.flip}>Ingredients</a>
                                </div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="card" style={style}>
                                <div className="card-body">
                                    <h5 className="card-title">This is the back</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
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