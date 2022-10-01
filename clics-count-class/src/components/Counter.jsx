import '../styles/Counter.css';
import React from 'react'

class Counter extends React.Component {
  render() {

    return (
    <div className="counter">
      {this.props.clicsNumber}
    </div>
    )
  }
}

export default Counter;