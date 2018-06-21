import React from 'react';
// import ActionButton from '../../../../components/ActionButton';
import './CartFooter.css';

const CartFooter = (props) => {
  return(
    <div className="CartFooter">

      <div className="total-container">
        <h4>Total</h4>
        <h3 className='total'>${props.total}</h3>
      </div>

      <div className={props.total === 0 ? "placeholder-btn disabled": "placeholder-btn"}>
        Checkout
      </div>

      {/* <ActionButton /> */}
    </div>
  );
};

export default CartFooter;