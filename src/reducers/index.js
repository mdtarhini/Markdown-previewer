import { combineReducers } from "redux";

const textReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXT_UPDATED":
      return action.payload;
    case "INSERT_SOMETHING": {
      console.log(action);
      switch (action.payload) {
        case "h1":
          return `${state} \n# `;
        case "h2":
          return `${state} \n## `;
        case "link":
          return `${state} [TEXT](URL)`;
        case "img":
          return `${state} ![ALT](URL)`;
        case "codeBlock":
          return (
            state +
            `
\`\`\`
CODE HERE
\`\`\`
          `
          );
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

const formatReducer = (state = true, action) => {
  if (action.type === "CHANGE_FORMAT") {
    return !state;
  }
  return state;
};
export default combineReducers({
  textReducer: textReducer,
  formatReducer: formatReducer,
});
