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
    /*this.deleteTodo = this.deleteTodo.bind(this);*/




  }



/*  deleteTodo(){

  }*/

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



    return (<div class="checkbox">
      <h1 style ={{color:'white', fontSize: 70}}>Groceries</h1>
      <input style={{width: 350, align:'center'}} name = "test" onChange = { this.getTodo } />
      <button  style ={{width: 350, color:'black'}} onClick = {() => this.addTodo( this.state.todo )}> Add to ToDo List</button>
{/*   <button onClick = {() => this.deleteTodo( this.state.todo )}> Delete an item </button>*/}
      <List items = { this.state.items } />

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));