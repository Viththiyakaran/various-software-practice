

import React,{Component} from 'react';

class Abc extends Component
{
    constructor()
    {
        super()
        this.state = {
            count : 0
        }

    }

    myClick = () =>
    {
        this.setState({
            count : this.state.count + 1 
        })
    }

    render()
    {
        return(
            <div> 
                <h1>{ this.state.count}</h1> 
                <button onClick={ this.myClick}>Count me</button>
            </div>
        )
    }
}

export default Abc;