import React, { Component } from 'react';
import './Receipts.css';

// Shared UI Components
import {
  Heading,
} from 'components';

// TODO turn this into functional component if we arent using state...
class Receipts extends Component {

  render() {
    // console.log("Receipts Props: ", this.props.cause);
    return (
      <div className="Receipts">
        <Heading text={'My Receipts'} />

        <div className="slider">
          <div className="receipt">
            <p>$18</p>
          </div>
          <div className="receipt">
            <p>$143</p>
          </div>
          <div className="receipt">
            <p>$9</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Receipts;
