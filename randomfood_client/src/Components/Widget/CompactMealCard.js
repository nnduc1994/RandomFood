import React, { Component } from 'react';

class CompactMealCard extends Component 
{
    constructor(props)
    {
        super(props);
    }

   render()
   {
        let style= {maxWidth:"18rem;"};
        return(
                <div>
                    <div className="card" style={style}>
                        <img className="card-img-top img-responsive" src={this.props.meal.PictureUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.meal.Name}</h5>
                            <p className="card-text">{this.props.meal.Description}</p>
                            <p className="card-text">Cooking Duration: {this.props.meal.CookingDuration}</p>
                        </div>
                    </div>
                </div>
        );
   }
}

export default CompactMealCard;