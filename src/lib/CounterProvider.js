import React, { Component } from 'react';

const MyContext = React.createContext();

const { Provider, Consumer } = MyContext;

export const withCounter = Comp => {
  return class WithCounter extends Component {
    render() {
      return (
        <Consumer>
          {counterStore => {
            return (
              <Comp
                counter={counterStore.value}
                decrease={counterStore.handleDecrease}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class CounterProvider extends Component {
  
  state = {
    value: 0,
  };

  handleDecrease = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    return (
      <Provider
        value={{
          value: this.state.value,
          handleDecrease: this.handleDecrease,
        }}
      >
      {this.props.children}
      </Provider>
    );
  }
}

export default CounterProvider;
