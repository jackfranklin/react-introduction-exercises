var App = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },

  buttonClick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function() {
    return (
      <div>
        <p>Current count: { this.state.count }</p>
        <button onClick={this.buttonClick}>Increment</button>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
