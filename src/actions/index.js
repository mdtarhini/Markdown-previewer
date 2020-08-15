export const textUpdating = (updatedText) => {
  return {
    type: "TEXT_UPDATED",
    payload: updatedText,
  };
};

export const changeFormat = () => {
  return {
    type: "CHANGE_FORMAT",
  };
};

export const InsertSomething = (something) => {
  return {
    type: "INSERT_SOMETHING",
    payload: something,
  };
};
