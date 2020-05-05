import React, { Component } from 'react'
import WithIronSuit from './withIronSuit'

export class TonyStark extends Component {

    render() {

    const{count, incrementCount} = this.props

        return (
            <div>
                <p>Hi I'm Tony Stark. Mi Armor Level is {count}  
                    </p>   
                <button onClick={incrementCount}>Up!</button>
            </div>
        )
    }
}

export default WithIronSuit(TonyStark)
