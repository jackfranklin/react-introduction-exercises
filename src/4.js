var App = React.createClass({
  componentDidMount: function() {
    this.refs.searchInput.focus();
  },

  buttonClick: function() {
    console.log('Searched for', this.refs.searchInput.value);
  },

  render: function() {
    return (
      <div>
        <input type="text" ref="searchInput" placeholder="Cats" />
        <button onClick={this.buttonClick}>Search</button>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
