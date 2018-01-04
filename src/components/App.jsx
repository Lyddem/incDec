import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    }
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(event) {
    this.setState({
      clicks: --this.state.clicks
    })
  }

  increment(event) {
    this.setState({
      clicks: ++this.state.clicks
    })
  }

  render() {
    return (
      <div>
        clicks: {this.state.clicks} <br />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}


export default App;