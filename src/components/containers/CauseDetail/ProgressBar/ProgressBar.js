import React from 'react';
import './ProgressBar.css';


const ProgressBar = ({ goal_amount = 0, totalRaised = 0 }) => {
    const calculateBarWidth = (percentRaised) => {
        if (percentRaised > 5) {
            return percentRaised - 7;
        } else {
            return 1;
        }
    };

    const percentRaised = (totalRaised / goal_amount * 100).toFixed(0);
    let barStyle = { width: `${calculateBarWidth(percentRaised)}%` };

    return (
        <div className="ProgressBar">
            <div className='percent-bar' style={barStyle}>
                <h3>{percentRaised >= 100 ? 'Goal Accomplished!!' : `Raised  $${totalRaised || 0} of $${goal_amount || 0} (${percentRaised}%)`} </h3>
            </div>
        </div>
    );
};

export default ProgressBar;
