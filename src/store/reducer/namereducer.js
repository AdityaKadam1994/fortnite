const nameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "updt_name":
      return {
        name: payload
      };

    default:
      return state;
  }
};

export default nameReducer;
