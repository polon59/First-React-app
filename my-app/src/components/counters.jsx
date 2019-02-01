import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component{
    state = {
        counters:[
            {id: 1, initValue: 0},
            {id: 2, initValue: 4},
            {id: 3, initValue: 0},
            {id: 4, initValue: 0},
            {id: 5, initValue: 0}
        ]
    }

    render(){
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} initValue={counter.initValue}/>)}
            </div>
        );
    }
}

export default Counters;