import React from "react";
import {mount} from "enzyme";

import Counter from "../../../src/component/counter"

describe("Test Counter", () => {
    let counter;
    let mockProps;

    beforeEach(() => {
        mockProps = {
            count: 0,
            clickAdd: jest.fn(),
            clickReduce: jest.fn()
        }
        counter = mount(<Counter {...mockProps}/>);
    })

    it("shoud show two buttons and one number label when render", () => {
        const label = counter.find("h1");
        const buttons = counter.find("button");

        expect(label.text()).toBe("0");
        expect(buttons).toHaveLength(2);
        expect(buttons.at(0).text()).toBe("Increase");
        expect(buttons.at(1).text()).toBe("Decrease");
    });

    it("shoud call the clickAdd function when click Increase button", () => {
        const increaseButton = counter.find("button").at(0);
        increaseButton.simulate("click");

        expect(mockProps.clickAdd).toHaveBeenCalled();
    });

    it("shoud call the clickReduce function when click Decrease button", () => {
        const decreaseButton = counter.find("button").at(1);
        decreaseButton.simulate("click");

        expect(mockProps.clickReduce).toBeCalled();
    });
});
