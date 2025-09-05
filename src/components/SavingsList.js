import React from 'react';

const SavingsList = ({ savingsGoals }) => {
    return (
        <div className="savings-list">
            <h2>Your Savings Goals</h2>
            {savingsGoals.length === 0 ? (
                <p>No savings goals added yet.</p>
            ) : (
                <ul>
                    {savingsGoals.map((goal, index) => (
                        <li key={index} className="savings-item">
                            <img src={goal.image} alt={goal.name} className="savings-image" />
                            <div className="savings-details">
                                <h3>{goal.name}</h3>
                                <p>Target Amount: ${goal.targetAmount}</p>
                                <p>Estimated Days to Reach: {goal.estimatedDays}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SavingsList;