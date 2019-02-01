import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count: 0,
    };

    handleIncrement(){
        this.setState({count:this.state.count+1})
        console.log("inc clicked " + this.state.count);
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        if(this.state.count === 0){classes+="warning";}
        else{classes+="primary";}
        return classes;
    }


    formatCount(){
        const count = this.state.count;
        return count === 0 ? 'Zero' : count;
    }


    render(){
        let classes = this.getBadgeClasses();

        return(
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement.bind(this)}>baton</button>
        </div>
        );
    }

}


export default Counter;

