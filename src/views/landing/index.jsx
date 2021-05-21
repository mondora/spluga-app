import React from "react";
import { logInWithGoogle } from "../../features/realm";
import NavBar from "../../components/landing/navbar";
import Header from "../../components/landing/header";
import WhatIs from "../../components/landing/whatIs";
import JoinUs from "../../components/landing/joinUs";
import HowDoesItWorks from "../../components/landing/howDoesItWorks";
import Thanks from "../../components/landing/thanks";
import Footer from "../../components/landing/footer";
import { Container } from "./styled.js";

import * as Scroll from "react-scroll";
import ValueYourBusiness from "../../components/landing/valueYourBusiness";
import { useDispatch } from "react-redux";

var Element = Scroll.Element;
export const Landing = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <NavBar onLogin={() => dispatch(logInWithGoogle())} />
            <Header />
            <Element name="what-is-spluga" className="element">
                <WhatIs />
            </Element>
            <Element name="value-your-business" className="element">
                <ValueYourBusiness />
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

export default Landing;
