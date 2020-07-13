import React, { Component } from 'react'
import Todos from './Todos'
import AddForm from "./AddForm"
export default class App extends Component {
  state = {
    todos: [
      {id:1, content: "buy some milk"},
      {id:2, content: "play mario kart"}
    ]
  }


  deletetodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
     todos
    })
  }
  addForm = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
        <AddForm addForm={this.addForm}/>
      </div>
    )
  }
}
