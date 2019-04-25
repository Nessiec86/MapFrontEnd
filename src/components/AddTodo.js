import React, { Component } from 'react';

class Add extends Component {
  
  state = {
    todo: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const { todo } = this.state
    this.props.onClick(todo);
    this.setState({
      todo: '',
    })
  }

  render() {
    const { todo } = this.state;
    return (
      <>
        <input 
          type="text"
          value={todo}
          onChange={this.handleInput}
          name='todo'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <p>{this.state.todo}</p>
        <button onClick={this.handleClick}>ADD</button>
      </>
    );
  }
}

export default Add;