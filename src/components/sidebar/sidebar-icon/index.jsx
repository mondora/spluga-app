import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Targets } from "../assets/award.svg";
import { ReactComponent as Apps } from "../assets/cloud.svg";
import { ReactComponent as Company } from "../assets/users.svg";
import { ReactComponent as SDGs } from "../assets/circle.svg";
import { ReactComponent as Activities } from "../assets/check-circle.svg";
import { ReactComponent as Profile } from "../assets/user.svg";

const SidebarIcon = (props) => {
    switch (props.name) {
        case "targets":
            return <Targets {...props} />;
        case "apps":
            return <Apps {...props} />;
        case "company":
            return <Company {...props} />;
        case "sdgs":
            return <SDGs {...props} />;
        case "activities":
            return <Activities {...props} />;

        //profile
        default:
            return <Profile {...props} />;
    }
};

SidebarIcon.propTypes = {
    name: PropTypes.string,
};

export default SidebarIcon;
