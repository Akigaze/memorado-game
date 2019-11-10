import * as ActionType from "../action/actionType";

const initState = {
    sum:0
}

const counterReducer = (state = initState, action) => {
    let {sum,counters} = state
    switch(action.type){
        case ActionType.INCREASEMENT: {
            sum++;
            return {sum}
        }
        case ActionType.DECREASEMENT: {
            sum--;
            return {sum}
        }
        default: return state
    }
}

export default counterReducer;
