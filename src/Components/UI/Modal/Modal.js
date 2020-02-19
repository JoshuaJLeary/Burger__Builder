import React from 'react';

import classes from './Modal.css';

import Aux from '../../../HOC/Aux.js';
import BackDrop from '../Backdrop/Backdrop.js';

const modal = (props) => (
  <Aux>
    <BackDrop clicked={props.modalClosed} show={props.show} />
    <div className={classes.Modal} style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
      {props.children}
    </div>
  </Aux>
)

export default modal;