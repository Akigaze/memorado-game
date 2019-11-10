import * as actionType from "../constant/action-type";
import { STEP_STATUS } from "../constant/super-memo";

const initedState = {
  params: {
    targets: 0,
    nrow: 0,
    ncol: 0
  },
  currentStep: {
    index: 0,
    status: STEP_STATUS.IN_PROGRESS
  }
};

const reducer = (state = initedState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.INIT_SUPER_MEMO_PARAMS: {
      return { ...state, params: payload };
    }
    case actionType.UPDATE_SUPER_MEMO_CURRENT_STEP: {
      return { ...state, currentStep: payload };
    }
    case actionType.RESET_SUPER_MEMO_STATE: {
      return initedState;
    }
    default:
      return state;
  }
};

export default reducer;
