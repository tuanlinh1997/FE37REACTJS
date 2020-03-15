import * as ActionType from "./../constant/ActionType";

export const actDelete = user => {
  return {
    type: ActionType.DELETE,
    user
  };
};

export const actEdit = user => {
  return {
    type: ActionType.EDIT,
    user
  };
};
