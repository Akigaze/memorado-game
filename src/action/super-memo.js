import * as actionType from "../constant/action-type";

export const updateStep = (index, status) => {
  return {
    type: actionType.UPDATE_SUPER_MEMO_CURRENT_STEP,
    payload: { index, status }
  };
};

export const initParams = ({ target, nrow, ncol }) => {
  return {
    type: actionType.INIT_SUPER_MEMO_PARAMS,
    payload: { target, nrow, ncol }
  };
};

export const reset = () => {
  return {
    type: actionType.RESET_SUPER_MEMO_STATE
  };
};

export const resetStep = () => {
  return {
    type: actionType.RESET_SUPER_MEMO_STEP
  };
};

export const restart = () => {
  return {
    type: actionType.SUPER_MEMO_GAME_RESTART
  };
};

export const end = () => {
  return {
    type: actionType.SUPER_MEMO_GAME_END
  };
};
