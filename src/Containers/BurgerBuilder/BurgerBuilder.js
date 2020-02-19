import React, { Component } from 'react';

import Aux from '../../HOC/Aux.js';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js';
import Burger from '../../Components/Burger/Burger.js';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    )
  }
}

export default BurgerBuilder;