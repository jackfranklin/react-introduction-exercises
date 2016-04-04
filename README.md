# Beginning

## Setup
- Clone the repository
- Run `npm install`
- Run `npm start` in one tab
- Run `npm run babel` in the other

- Visit `localhost:3001` and visit each of the HTML files in turn.


## 1-getting-started.html
- We’re using Babel to transpile; this isn’t doing anything other than converting JSX into regular JS code
- JSX isn’t HTML in your JS - it all gets converted into JavaScript!
- React itself contains no DOM logic - you need ReactDOM for that (React can be used in all environments)

## 2-props.html
- Sometimes we need to give components some information that can be used to configure the component
- We use props to do this.
- Props can never be changed by the component that’s given them.
- this.props contains all the properties given to your component.
- Props can also be JavaScript values :

```js
var name = “Jack";
ReactDOM.render(
  <App name={name} />,
  document.getElementById('app')
)
```

## 3-state-changes.html
- Often components will have some data that changes over time
- You should aim to have as few of these as possible! Isolate your state into few places, components that don’t change state are much easier to work with and deal with.
- We use getInitialState to set the initial state object, which we access as this.state
- Call this.setState to update the state - you can’t just update this.state directly.
- React will bind all event handlers with the correct this for you.
- Exercise: add another button that decrements count by one when it’s clicked.
- Exercise: add a prop that sets the initial value of this.state.count.

## 4-refs-and-focus.html
- sometimes we need access to the DOM element, for example when we want to autofocus an element
- we can use refs for this - you should try to keep your usage of them down to a minimum though!
- React has a lot of lifecycle hooks to hook into stages of a component - we can use componentDidMount
- Exercise: what’s the difference with componentDidMount and componentWillMount?

## 5-controlled-inputs.html
- in the previous example we reached into the DOM to get the value in the input, but it’s best to do it through React - reaching into the DOM should be avoided when possible
- In React terms we call this a controlled input.
- We store the input’s value in state and use the onChange event to update the state
- Exercise: when the user clicks the button to “search”, clear the input box so it’s empty again

## 6-more-render.html
- it would be nice if we could output the past search terms in a nicer fashion!
- The beauty of React, JSX and its render function is that we can use regular JS in it to map over objects and produce JSX.
- Exercise: when you add a search term you’ll see a warning in the console about a missing key property. Read up on it and see if you can get rid of the error.
- Exercise: our render function has got pretty big. Can you split it up and pull the code that outputs the search terms into a new function, and then call it from render?

## 7-multiple-components.html
- our App component from exercise 6 is pretty long now, and also has a lot of stuff in it
- the logic around the input and its value could be moved, as could the search terms list
- Let’s create a SearchTermsList component.
- You should be pretty strict and aggressive at separating components out - lots of small components is the way forward!

## 8-better-search-component.html
- our SearchTermsList component needs to be given the searchTerms prop to work, else it’s useless.
- We can use React’s propTypes to tell the component what it needs, and then it will error if not given the right props.
- These checks are only made with React’s development build to avoid slowing down your production apps.
- Exercise: fix this code! You’ll see a warning in the console that you should fix.
- Exercise: Study https://facebook.github.io/react/docs/reusable-components.html and be aware of the types of checks we can make.
- Exercise: make searchTerms not required, and make it so if we’re not passed anything we default to an empty array.

## 9-simple-communication.html
- this is a fairly typical React structure and the first problem newer React developers hit when they start working in React
- we have an App component that renders todos, and a form for adding new ones
- However, we need to some how communicate back from the child component to app component when a new todo is made, so it can be added to the state.
- Exercise / Question: how could we do this?

### Implementing:

We can pass props into components that can be any JS object - including functions. Let’s give the TodoForm a function to call when it adds a new todo:

```js
onCreate: function(todo) {
  // add the todo
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
```

Next we can update the TodoForm to call this method:

```js
handleSubmit: function(e) {
  e.preventDefault();
  this.props.onCreate(this.refs.todoInput.value);
},
```

and finally, add the new todo to the state:

```js
onCreate: function(todo) {
  this.setState({
    todos: this.state.todos.concat([todo])
  });
},
```
