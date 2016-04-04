var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onCreate(this.refs.todoInput.value);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todoInput" />
        <button type="submit">Create</button>
      </form>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return { todos: ['Run workshop'] }
  },

  onCreate: function(todo) {
    this.setState({
      todos: this.state.todos.concat([todo])
    });
  },

  render: function() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm onCreate={this.onCreate} />
        { this.state.todos.map(function(todo) {
            return <p key={todo}>{todo}</p>
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
