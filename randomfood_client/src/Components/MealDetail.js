import React, { Component } from 'react';
import EditMealForm from './Widget/EditMealForm'

class MealDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.EditButtonToggle = this.EditButtonToggle.bind(this);
    }

    EditButtonToggle() {
        this.setState((prevState) => {
            return { isEdit: !prevState.isEdit }
        })
    }

    render() {
        let ingredientsDOM = this.props.recipe.Ingredients.map(i => {
            return <li className="list-group-item">{i.Name} - {i.Amount}</li>
        });

        return (

            <div>
                <img src={this.props.recipe.PictureUrl} className="img-fluid"></img>
                <hr />
                <h4 className="inline">{this.props.recipe.Name}</h4>
                <button onClick={this.EditButtonToggle} className="inline btn btn-light">
                    <i class="fa fas fa-edit"></i> {(this.state.isEdit) ? " Cancle Edit" : "Edit"}
                </button>
                <p>{this.props.recipe.Description}</p>
                <strong><p>Cooking Duration: {this.props.recipe.CookingDuration}</p></strong>

                <hr />
                <h4>Ingredients</h4>
                <ul class="list-group list-group-flush">
                    {ingredientsDOM}
                </ul>
            </div>
        );
    }
}

export default MealDetail;