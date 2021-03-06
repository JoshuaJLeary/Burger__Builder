import React from 'react';

import classes from './Layout.css';

import Aux from '../../HOC/Aux.js';

const layout = (props) => {
 return (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
 )
}

export default layout;