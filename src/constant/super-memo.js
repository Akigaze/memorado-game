export const PIECE_TYPE = {
  SILENT: 0,
  ACTIVE: 1
};

export const PIECE_STATUS = {
  SILENT: { className: "silent", color: "white" },
  ACTIVE: { className: "active`", color: "#00bd98" },
  INCORRECT: { className: "incorrect", color: "grey" }
};

export const PIECE_DELAY = 3000;

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
