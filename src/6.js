var App = React.createClass({
  getInitialState: function() {
    return {
      searchTerms: [],
      inputValue: ''
    }
  },

  componentDidMount: function() {
    this.refs.searchInput.focus();
  },

  buttonClick: function() {
    console.log('Searched for', this.state.inputValue)
    this.setState({
      searchTerms: this.state.searchTerms.concat([this.state.inputValue])
    });
  },

  inputChange: function(event) {
    this.setState({
      inputValue: event.target.value
    });
  },

  render: function() {
    return (
      <div>
        <input type="text" ref="searchInput" placeholder="Cats" value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.buttonClick}>Search</button>
        <hr />
        {
          this.state.searchTerms.map(function(term) {
            return <p>{ term }</p>;
          })
        }
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
