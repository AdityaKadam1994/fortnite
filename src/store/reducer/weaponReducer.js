const weaponReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "updt_weapon":
      return payload;

    default:
      return state;
  }
};

export default weaponReducer;
