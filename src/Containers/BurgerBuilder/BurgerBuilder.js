import React, { Component } from 'react';

import Aux from '../../HOC/Aux.js';
import Burger from '../../Components/Burger/Burger.js';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger/>
      </Aux>
    )
  }
}

export default BurgerBuilder;