import * as actionType from "../constant/action-type";

const initedState = {
  level: 0
};

const reducer = (state = initedState, action = {}) => {
  console.log("SuperMemo reducer ...");
  switch (action.type) {
    case actionType.LEVEL_UP: {
      return { level: state.level + 1 };
    }
    default:
      return state;
  }
};

export default reducer;
