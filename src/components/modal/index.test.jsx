import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Modal, { Content, Container, Header, Actions, Button, Body } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Modal", () => {
    it("Renders modal without error", () => {
        const view = shallow(<Modal />);
        expect(view.find(Container).length).toBe(1);
        expect(view.find(Content).length).toBe(1);
        expect(view.find(Header).length).toBe(1);
        expect(view.find(Actions).length).toBe(1);
        expect(view.find(Button).length).toBe(1);
        expect(view.find(Body).length).toBe(1);
    });
    it("Renders modal with correct props", () => {
        const child = <div>{"child test"}</div>;
        const handleCloseMock = jest.fn();
        const view = shallow(<Modal children={child} handleClose={handleCloseMock} show={false} title={"test"} />);
        expect(view.find(Header).text()).toBe("test");
        expect(view.find(Button).props().onClick).toBe(handleCloseMock);
        expect(view.find(Body).text()).toBe("child test");
    });
});
