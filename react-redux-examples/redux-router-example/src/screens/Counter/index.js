import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {mainState, onIncrement, onDecrement} = this.props
        return (
            <p>
                Count (From Redux) : {mainState.count}
                <br/>
                <button onClick={onIncrement}> +</button>
                <button onClick={onDecrement}> -</button>
            </p>
        )
    }
}

Counter.propTypes = {
    mainState: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
