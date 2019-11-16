import * as actionType from "../constant/action-type";
import { STEP_STATUS } from "../constant/super-memo";

const initedState = {
  params: {
    target: 0,
    nrow: 0,
    ncol: 0
  },
  currentStep: {
    index: 0,
    status: STEP_STATUS.IN_PROGRESS
  },
  times: 1,
  end: false
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
    case actionType.RESET_SUPER_MEMO_STEP: {
      return { ...state, currentStep: initedState.currentStep };
    }
    case actionType.SUPER_MEMO_GAME_END: {
      return { ...state, end: true };
    }
    case actionType.SUPER_MEMO_GAME_RESTART: {
      return { ...state, end: false , times: state.times + 1};
    }
    case actionType.RESET_SUPER_MEMO_STATE: {
      return initedState;
    }
    default:
      return state;
  }
};

export default reducer;
