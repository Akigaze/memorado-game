import {increaseAction, decreaseAction} from "../../../src/action/countActionCreator";

describe("counter action test", () => {
    it("create a increase action", () => {
        const action = increaseAction();

        expect(action).toEqual({type: "INCREASEMENT"})
    });

    it("create a decrease action", () => {
        const action = decreaseAction();

        expect(action).toEqual({type: "DECREASEMENT"})
    });
});
