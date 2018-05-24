import React, {Component} from "react"

class EmptyCard extends Component
{
    render()
    {
        return(
            <div>
                        <div className="card">
                            <img className="card-img-top img-responsive" src={this.props.ImageSrc} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.Title}</h5>
                                <p className="card-text">{this.props.Description}</p>
                            </div>
                        </div>
            </div>
        );
    }
}

export default EmptyCard;