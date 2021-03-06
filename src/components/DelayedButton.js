
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    clickHandler = (event) => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }


    render() {
        return(
            <button value='Delay' onClick={this.clickHandler}/>
        )
    }
}