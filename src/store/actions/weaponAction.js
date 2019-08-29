// const weaponAction = { type: "updt_weapon", payload: "changed_value" };
const weaponAction = dispatch => {
  fetch("https://fortnite-api.theapinetwork.com/weapons/get", {
    method: "GET",

    headers: {
      Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
    }
  })
    .then(res => res.json())
    .then(res => dispatch({ type: "updt_weapon", payload: res.data.entries }));
};

export default weaponAction;
