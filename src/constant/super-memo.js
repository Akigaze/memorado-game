export const PIECE_TYPE = {
  SILENT: 0,
  ACTIVE: 1
};

export const PIECE_DELAY = {
  DEFAULT: 500,
  ANIMATION_DELAY: 1000,
  TO_IN_PROGRESS: 3000
};

export const PIECE_STATUS = {
  SILENT_ENTER: {
    className: "silent-enter",
    style: { backgroundColor: "white" },
    delay: 4000
  },
  SILENT: { className: "silent", style: { backgroundColor: "white" } },
  ACTIVE: {
    className: "active",
    style: { backgroundColor: "#00bd98" },
    delay: 3000
  },
  ACTIVE_OUT: {
    className: "active-out",
    style: { backgroundColor: "white" },
    delay: 1000
  },
  INCORRECT: { className: "incorrect", style: { backgroundColor: "grey" } },
  NONE: { style: { backgroundColor: "white" }, delay: 1000 },
  END: {
    className: "disappear",
    style: { backgroundColor: "white" },
    delay: 1000
  }
};

export const RESTART_DELAY = 2500;

export const QUERY_PARAMETER = {
  nrow: { name: "nrow", defaultValue: 4 },
  ncol: { name: "ncol", defaultValue: 4 },
  target: { name: "target", defaultValue: 4 }
};

export const STEP_STATUS = {
  READY: { key: "READY" },
  IN_PROGRESS: { key: "IN_PROGRESS", className: "in-progress" },
  FINISHED: { key: "FINISHED", className: "finished" },
  LOSING: { key: "LOSING", className: "losing" }
};

STEP_STATUS.isEuqal = (s1, s2) => {
  return s1.key === s2.key;
};
