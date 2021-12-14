export const EDIT_WEIGHT = "EDIT_WEIGHT";
export const EDIT_WEEK = "EDIT_WEEK";

export const editWeight = (exercise, weight) => {
  return {
    type: EDIT_WEIGHT,
    payload: { exercise, weight },
  };
};

export const editWeek = (week) => {
  return {
    type: EDIT_WEIGHT,
    week,
  };
};
