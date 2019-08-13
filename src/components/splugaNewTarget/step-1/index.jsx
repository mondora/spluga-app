import React from "react";

const Step1 = ({ onNameChange, onDescriptionChange, name, description }) => {
    const handleNameChange = ({ target: { value } }) => {
        onNameChange(value);
    };

    const handleDescriptionChange = ({ target: { value } }) => {
        onDescriptionChange(value);
    };

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter target's name"
                value={name}
                onChange={handleNameChange}
            />
            <div>
                <label htmlFor="description">Decscription</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
        </div>
    );
};
export default Step1;
