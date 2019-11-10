import React from "react";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {mount, shallow} from "enzyme";

import App from "../../../src/app";

describe("Test App", function() {
    let app;
    let mockStore;
    let mockState;

    beforeEach(function() {
        mockState = {
            sum:0
        }
        mockStore = configureMockStore([])(mockState);
        app = mount(
            <Provider store={mockStore}>
                <App/>
            </Provider>
        );
    });

    it("should app show counters sum and a counter group when render", function() {
        const containerDiv = app.find(".container");
        const label = containerDiv.childAt(0);
        const counterGroup = containerDiv.childAt(1);

        expect(label.text()).toBe("The Sum: 0");
        expect(counterGroup.name()).toBe("CounterGroup");
        expect(counterGroup.find("Counter")).toHaveLength(3);
    });
});
