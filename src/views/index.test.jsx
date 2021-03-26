import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Routes from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Routes", () => {
    const propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } },
        },
    };

    it("Render view with only required data", () => {
        const view = shallow(<Routes auth={propTypes.auth} />);
        expect(view.find("BrowserRouter").length).toBe(1);
        expect(view.find("Route").length).toBe(1);
    });
});
