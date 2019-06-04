import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import Todos from './components/Todos'
import Addtodo from './components/addTodo'
import Header from './components/layout/header'
import About from './components/pages/about'

//import uuid from 'uuid'
import Axios from 'axios';


class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(res => this.setState({todos: res.data}))
  }
  //toggle complete tasks
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }
    )})
  }
  //delete task
  delTodo = (id) => {
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]}))
  }

  addTodo = (title) => {
    console.log(title)
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      title:title,
      completed: false
    }).then(res=>this.setState({todos:[...this.state.todos,res.data]}))
    
  }
  render() {
    return (
      <BrowserRouter>
      <div className="Main">
        <div className="container">
          <Header />
          <Route exact path='/' render={props => 
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
              <Todos delTodo={this.delTodo} todos={this.state.todos} markComplete={this.markComplete} />
            </React.Fragment>

          }/>
          <Route path='/about' component={About} />
          
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
