import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
    };

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        if(this.state.count === 0){classes+="warning";}
        else{classes+="primary";}
        return classes;
    }

    render(){
        let classes = this.getBadgeClasses();

        return(
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>
        );
    }


    formatCount(){
        const count = this.state.count;
        return count === 0 ? 'Zero' : count;
    }
}


export default Counter;

