import React, { Component } from 'react';

import Layout from './Components/Layout/Layout.js';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.js';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
