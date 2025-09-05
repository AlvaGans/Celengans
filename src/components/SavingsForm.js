import React, { useState } from 'react';

const SavingsForm = ({ onAddSavings }) => {
    const [itemName, setItemName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName && targetAmount && image) {
            onAddSavings({ itemName, targetAmount, image });
            setItemName('');
            setTargetAmount('');
            setImage(null);
        }
    };

    return (
        <div className="savings-form">
            <h2>Input Your Savings Goal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Item Name:</label>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Target Amount:</label>
                    <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                {image && <img src={image} alt="Preview" className="image-preview" />}
                <button type="submit">Add Savings Goal</button>
            </form>
        </div>
    );
};

export default SavingsForm;