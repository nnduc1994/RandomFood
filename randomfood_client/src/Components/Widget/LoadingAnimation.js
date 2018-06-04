import React, { Component } from 'react'
// import logo from '../../../public/Images/Loading_icon.gif';

class LoadingAnimation extends Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="loading-animation">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                <h3>Fetching data ....</h3>
            </div>
        );
    }
}

export default LoadingAnimation;