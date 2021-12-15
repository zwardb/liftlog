export const EDIT_WEIGHT = "EDIT_WEIGHT";

export const editWeight = (exercise, weight) => {
  return {
    type: EDIT_WEIGHT,
    payload: { exercise, weight },
  };
};
