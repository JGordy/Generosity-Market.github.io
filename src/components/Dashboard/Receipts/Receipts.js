import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Receipts.css';

import {
  causeSelected,
} from 'ducks/cause';

// Shared UI Components
import {
  Heading,
  ReceiptItem,
} from 'components/shared';

// TODO turn this into functional component if we arent using state...
export class Receipts extends PureComponent {

  render() {
    const {
      causeSelected,
      supportedCauses,
    } = this.props;

    const causes = supportedCauses && supportedCauses.map(cause => {
      return (
        <ReceiptItem
          key={cause.icon + cause.name}
          selectCause={causeSelected}
          cause={cause}
        />
      );
    });

    return (
      <div className="Receipts">
        <Heading text={'Causes I Support'} />

        {causes}

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    cause: {
      causeList
    },
  } = state;

  return {
    causeList,
  };
};

const mapDispatchToProps = {
  causeSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipts);
