import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      todo:''
    }
    this.getTodo = this.getTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);



  }

  deleteTodo(){

  }

  addTodo(t) {
    var that = this
        $.ajax({
      type:"POST",
      url: '/items',
      data:{
        todo:t
      },
      success: (data) => {
          console.log("Data has been successful",data)
      },
    });

    $.ajax({
      type:"GET",
      url: '/items', 
      success: (data) => {
        that.setState({
          items: data
        })
      },
    });
  }
   getTodo(e) {
      this.setState({
        todo: e.target.value
      })
    }



  render () {
    return (<div>
      <h1>TodoList</h1>
      <input name="nader" onChange={this.getTodo}/>
      <button onClick={()=> this.addTodo(this.state.todo)}>Add to ToDo List</button>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));