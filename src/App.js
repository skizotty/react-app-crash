import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed:false
      },
      {
        id:2,
        title: 'Make Din Din',
        completed:false
      },
      {
        id:3,
        title: 'Meeting with Boss',
        completed:false
      },
    ]
  }

  markComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }
    )})
  }

  render() {
    return (
      <div className="Main">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    )
  }
}

export default App;
