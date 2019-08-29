const gameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "updt_game":
      return {
        game: payload
      };

    default:
      return state;
  }
};

export default gameReducer;
