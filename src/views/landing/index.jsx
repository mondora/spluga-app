import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import LandingNav from "../../components/landingNav";
import LandingHeader from "../../components/landingHeader";
import LandingWhatIs from "../../components/landingWhatIs";
import LandingJoinUs from "../../components/landingJoinUs";
import LandingHowDoesItWorks from "../../components/landingHowDoesItWorks";
import LandingThanks from "../../components/landingThanks";
import LandingFooter from "../../components/landingFooter";
import { PageContainer } from "./styled.js";

import * as Scroll from "react-scroll";

var Element = Scroll.Element;
export const Landing = ({ login }) => {
    return (
        <PageContainer>
            <LandingNav onLogin={login} />
            <LandingHeader />
            <Element name="what-is-spluga" className="element">
                <LandingWhatIs />
            </Element>
            <Element name="how-does-it-work" className="element">
                <LandingHowDoesItWorks />
            </Element>
            <Element name="contact" className="element">
                <LandingJoinUs />
                <LandingThanks />
                <LandingFooter></LandingFooter>
            </Element>
        </PageContainer>
    );
};

export default connect(
    null,
    {
        login
    }
)(Landing);
