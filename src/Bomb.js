import React, { Component } from 'react';


class Bomb extends Component{
    constructor(props){
        super()
        this.state={
            secondsLeft : props.initialCount
        }
    }

    render(){
        let seconds
        if(this.state.secondsLeft === 0){
            seconds= <p>Boom!</p>
        }
        else{
            seconds=  <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
        return(
            <div>
               {seconds}
            </div>
        )
    }
}
export default Bomb;