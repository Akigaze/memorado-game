import reducer from "../../../src/reducer/index";
import {allEqualTo} from "../../util/assert";

expect.extend({allEqualTo});

describe("counter reducer test", () => {
    let initState;
    beforeEach(() => {
        initState = {
            sum:0
        }
    });

    it("should return the default state when action not match", () => {
        const state = reducer(undefined, {})

        expect(state).toEqual({sum:0});
    });

    it("should plus one at the specific couter of state when give a INCREASEMENT action", () => {
        const state = reducer(initState, {type:"INCREASEMENT"})

        expect(state.sum).toEqual(1);
    });

    it("should reduce one at the specific couter of state when give a DECREASEMENT action", () => {
        const state = reducer(initState, {type:"DECREASEMENT"})

        expect(state.sum).toEqual(-1);
    });

    it("should sum be the sum of all the counters of state", () => {
        let state = reducer(initState, {type:"INCREASEMENT"})
        state = reducer(state, {type:"INCREASEMENT"})
        state = reducer(state, {type:"INCREASEMENT"})
        state = reducer(state, {type:"DECREASEMENT"})

        expect(state.sum).toEqual(2);
    });
});
