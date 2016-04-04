var App = React.createClass({
  render: function() {
    return <p>My Name is: { this.props.name }</p>;
  }
});

ReactDOM.render(
  <App name="jack" />,
  document.getElementById('app')
);
