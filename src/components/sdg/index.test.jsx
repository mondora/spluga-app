import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Sdg, { Description, Summary, SdgButton } from ".";
import Modal from "../modal";
import SDG1 from "../../views/sdgs/assets/E_WEB_01.png";

Enzyme.configure({ adapter: new Adapter() });

describe("Sdg", () => {
    const sdgTest = { sdgIcon: SDG1, sdgGif: SDG1, isUsed: false, description: "Description", summary: "summary" };
    it("Renders sdg icon without error", () => {
        const component = shallow(
            <Sdg
                sdgIcon={sdgTest.sdgIcon}
                sdgGif={sdgTest.sdgGif}
                isUsed={sdgTest.isUsed}
                description={sdgTest.description}
                summary={sdgTest.summary}
            />
        );
        expect(component.find(SdgButton).length).toBe(1);
    });

    describe("when i click on Sdg Icon", () => {
        it("Renders sdg modal with correct info", () => {
            const component = shallow(
                <Sdg
                    sdgIcon={sdgTest.sdgIcon}
                    sdgGif={sdgTest.sdgGif}
                    isUsed={sdgTest.isUsed}
                    description={sdgTest.description}
                    summary={sdgTest.summary}
                />
            );
            expect(component.find(Modal).props().show).toBe(false);
            component.find(SdgButton).simulate("click");
            expect(component.find(Modal).props().show).toBe(true);
            expect(component.find(Description).text()).toBe(sdgTest.description);
            expect(component.find(Summary).text()).toBe(sdgTest.summary);
        });
    });
});
