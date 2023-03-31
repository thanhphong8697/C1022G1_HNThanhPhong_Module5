import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: ['Thanh Phong', 'Anh Quân', 'Minh Trường'],
      item: ''
    }
  }
handleChange = (event) => {
  this.setState(
    {
      item: event
    }
  )
}

handleAddItem = () => {
  let newArr = [...this.state.list, this.state.item]
  this.setState({
    item: '',
    list: newArr
  })
}

render(){
  return(
    <div>
      <input
      value={this.state.item}
      onChange={(events) => this.handleChange(events.target.value)}
      />
      <button
      onClick={() => this.handleAddItem()}>
        Add
      </button>
      <ul>
        {
          this.state.list.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
}


export default App;
