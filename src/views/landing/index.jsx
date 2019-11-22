import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import NavBar from "../../components/landing/navbar";
import Header from "../../components/landing/header";
import WhatIs from "../../components/landing/whatIs";
import JoinUs from "../../components/landing/joinUs";
import HowDoesItWorks from "../../components/landing/howDoesItWorks";
import Thanks from "../../components/landing/thanks";
import Footer from "../../components/landing/footer";
import { Container } from "./styled.js";

import * as Scroll from "react-scroll";

var Element = Scroll.Element;
export const Landing = ({ login }) => {
    return (
        <Container>
            <NavBar onLogin={login} />
            <Header />
            <Element name="what-is-spluga" className="element">
                <WhatIs />
            </Element>
            <Element name="how-does-it-work" className="element">
                <HowDoesItWorks />
            </Element>
            <Element name="contact" className="element">
                <JoinUs />
                <Thanks />
                <Footer />
            </Element>
        </Container>
    );
};

export default connect(null, { login })(Landing);
