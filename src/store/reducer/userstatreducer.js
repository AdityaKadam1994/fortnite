const userstatReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "updt_userstat":
      return payload;

    default:
      return state;
  }
};

export default userstatReducer;
