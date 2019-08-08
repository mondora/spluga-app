import React, { useState } from "react";
import { PropTypes } from "prop-types";

const FormCompany = ({ auth, addCompany }) => {
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        addCompany({ name: value }, auth.currentUser.id);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit" value="Submit">
                submit
            </button>
        </form>
    );
};

FormCompany.propTypes = {
    auth: PropTypes.object.isRequired,
    addCompany: PropTypes.func
};

export default FormCompany;

/**
 * nell'handleSubmit richiamo la addcompany actionCreator
 * for delete company faccio button a parte nella view che lo gestisce
 */
