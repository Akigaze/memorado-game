import * as actionType from "../constant/action-type";

export const updateStep = (index, status) => {
  return {
    type: actionType.UPDATE_SUPER_MEMO_CURRENT_STEP,
    payload: { index, status }
  };
};

export const initParams = ({ targets, nrow, ncol }) => {
  return {
    type: actionType.INIT_SUPER_MEMO_PARAMS,
    payload: { targets, nrow, ncol }
  };
};

export const reset = () => {
  return {
    type: actionType.RESET_SUPER_MEMO_STATE
  };
};
