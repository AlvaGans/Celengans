import React, { useState } from 'react';
import { estimateTargetDate } from '../utils/dateUtils';

const TargetEstimator = ({ targetAmount, currentSavings, dailySavings }) => {
    const [estimatedDate, setEstimatedDate] = useState(null);

    const calculateEstimate = () => {
        if (dailySavings > 0) {
            const remainingAmount = targetAmount - currentSavings;
            const daysNeeded = Math.ceil(remainingAmount / dailySavings);
            const targetDate = estimateTargetDate(daysNeeded);
            setEstimatedDate(targetDate);
        } else {
            setEstimatedDate('Daily savings must be greater than zero.');
        }
    };

    return (
        <div className="target-estimator">
            <h2>Target Estimator</h2>
            <button onClick={calculateEstimate}>Estimate Target Date</button>
            {estimatedDate && (
                <div className="estimate-result">
                    <p>Estimated Date to Reach Goal: {estimatedDate}</p>
                </div>
            )}
        </div>
    );
};

export default TargetEstimator;