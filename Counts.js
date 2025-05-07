import React from 'react';

class Counts extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      count: 0,
    };
    console.log ('Constructor: Initialization');
  }

  componentDidMount () {
    console.log ('ComponentDidMount: Component has mounted');
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log (`ComponentDidUpdate: Count updated to ${this.state.count}`);
    }
  }

  componentWillUnmount () {
    console.log ('ComponentWillUnmount: Component is about to unmount');
  }

  increment = () => {
    this.setState (prevState => ({count: prevState.count + 1}));
  };

  decrement = () => {
    this.setState (prevState => ({count: prevState.count - 1}));
  };

  render () {
    return (
      <div style={{textAlign: 'center', padding: '20px'}}>
        <h2>React Lifecycle Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment} style={{marginRight: '10px'}}>
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counts;
