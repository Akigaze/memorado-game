export const PIECE_TYPE = {
  SILENT: 0,
  ACTIVE: 1
};

export const PIECE_STATUS = {
  SILENT: { className: "silent", color: "white" },
  ACTIVE: { className: "active", color: "#00bd98" },
  ACTIVE_OUT: { className: "active-out", color: "white" },
  INCORRECT: { className: "incorrect", color: "grey" },
  NONE: { color: "white" }
};

PIECE_STATUS.ACTIVE.next = PIECE_STATUS.ACTIVE_OUT;
PIECE_STATUS.ACTIVE_OUT.next = PIECE_STATUS.SILENT;
PIECE_STATUS.SILENT.next = PIECE_STATUS.SILENT;

export const PIECE_DELAY = {
  DEFAULT: 500,
  ANIMATION_DELAY: 1000,
  TO_IN_PROGRESS: 3000
};

export const RESTART_DELAY = 2000;

export const QUERY_PARAMETER = {
  nrow: { name: "nrow", defaultValue: 4 },
  ncol: { name: "ncol", defaultValue: 4 },
  targets: { name: "targets", defaultValue: 4 }
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
