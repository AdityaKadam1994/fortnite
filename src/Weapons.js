import React, { useEffect } from "react";
import weaponAction from "./store/actions/weaponAction";
import { connect } from "react-redux";

function Weapons({ weapons, fetchWeapons }) {
  // const [weapons, setWeapon] = useState([]);
  useEffect(() => {
    // getWeapon();
    fetchWeapons();
  }, []);
  console.log(weapons.load);

  // const getWeapon = async () => {
  //   const response = await fetch(
  //     "https://fortnite-api.theapinetwork.com/weapons/get",
  //     {
  //       method: "GET",

  //       headers: {
  //         Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
  //       }
  //     }
  //   );
  //   const responseData = await response.json();
  //   setWeapon(responseData.data.entries);
  //   console.log(responseData.data);
  // };

  return (
    <div className="full-box">
      <h1>Weapon List</h1>
      <div className="item-main">
        {weapons.load ? (
          <h1>Loading...</h1>
        ) : weapons.weapon ? (
          weapons.weapon.slice(0, 60).map((weapon, index) => (
            <div className="item-wrapper weapon-wrapper" key={index}>
              <div className="inner-item">
                <img src={weapon.image} alt="" />
                <h2>{weapon.name}</h2>
                <p>
                  <strong>Rarity: </strong>
                  {weapon.rarity}
                </p>
                <p>
                  <strong>DPS: </strong>
                  {weapon.stats.dps}
                </p>
                <p>
                  <strong>Firerate: </strong>
                  {weapon.stats.firerate}
                </p>
                <p>
                  <strong>Magazine Size: </strong>
                  {weapon.stats.magazinesize}
                </p>
                <p>
                  <strong>Reload Time: </strong>
                  {weapon.stats.reloadtime}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    weapons: state.weapons,
    load: state.load
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeapons: () => dispatch(weaponAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapons);
