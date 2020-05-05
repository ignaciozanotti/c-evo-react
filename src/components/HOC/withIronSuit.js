import React, { Component } from 'react'

const withIronSuit = (WrappedComponent) => {
    class WithIronSuit extends Component {
        constructor(props)
        {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            alert('Iron Suit Evolves');
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    />
            )
        }
    }

    return WithIronSuit;
}

export default withIronSuit
