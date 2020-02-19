import React, { Component } from 'react';

import Aux from '../../HOC/Aux.js';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js';
import Burger from '../../Components/Burger/Burger.js';
import Modal from '../../Components/UI/Modal/Modal.js';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary.js';

const INGREDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.8,
  meat: 1.2,
  bacon: 1
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  }

  updatePurchaseableState (currentIngredients) {
    const sum = Object.keys(currentIngredients).map((igKey) => {
      return currentIngredients[igKey];
    })
    .reduce(( sum, el ) => {
      return sum + el;
    }, 0 );
    this.setState({
      purchaseable: sum > 0
    })
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredient
    });
    this.updatePurchaseableState(updatedIngredient);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredient
    });
    this.updatePurchaseableState(updatedIngredient);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={disabledInfo}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purchaseHandler}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;