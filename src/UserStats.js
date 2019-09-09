import React, { useState, useEffect } from "react";
// import store from "./store";
import nameActions from "./store/actions/nameActions";
import gameActions from "./store/actions/gameActions";
import { connect } from "react-redux";
function UserStats({ game, name, updateName, updateGame }) {
  const [users, setUser] = useState(false);
  const [id, setId] = useState("f313b75dc8864c35829c844e1637be4d"); //f313b75dc8864c35829c844e1637be4d
  const [key, setKey] = useState("");
  const [load, setLoad] = useState(true);

  const getId = async e => {
    e.preventDefault();
    setId("");
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/users/id?username=${key}`,
      {
        method: "GET",
        headers: {
          Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
        }
      }
    );
    const responseData = await response.json();
    setId(responseData.data.uid);
  };

  const getUser = async () => {
    console.log(`getUser id = ${id}`);
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${id}`,
      {
        method: "GET",
        headers: { Authorization: "9f4f414cd34a145f5b1571fa6cc42412" }
      }
    );
    const responseData = await response.json();
    setLoad(false);
    setUser(responseData.data);
  };
  const setSearch = e => {
    setKey(e.target.value);
  };
  useEffect(() => {
    getUser();
    // getId();
  }, [id]);

  return (
    <div className="stats-wrapper">
      <h1>User Stats</h1>
      <form className="search-form" onSubmit={getId}>
        <input
          type="text"
          className="search-input"
          onChange={setSearch}
          value={key}
          placeholder="Enter User Name"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {load ? (
        <h1>Loading... </h1>
      ) : users ? (
        <div className="userWrapper">
          {/* <div>{users ? users.stats.gamepad.map(value=>{
          return <div key={value.id}>{value.id}</div>
        }): <div>No Data found</div>}</div> */}
          <div>
            <h3>{users.username}</h3>
            {users.stats.gamepad[0] ? (
              users.stats.gamepad[0].entries.map(value => {
                return (
                  <div key={value.stats.kills}>
                    <p>Kills : {value.stats.kills}</p>
                    <p key={value.stats.matchesplayed}>
                      Matchesplayed : {value.stats.matchesplayed}
                    </p>
                    <p key={value.stats.minutesplayed}>
                      Minutesplayed : {value.stats.minutesplayed}
                    </p>
                    <p key={value.stats.placetop1}>
                      Placetop1 : {value.stats.placetop1}
                    </p>
                    <p key={value.stats.placetop3}>
                      Placetop3 : {value.stats.placetop3}
                    </p>
                    <p key={value.stats.placetop6}>
                      Placetop6 : {value.stats.placetop6}
                    </p>
                    <p key={value.stats.playersoutlived}>
                      Playersoutlived : {value.stats.playersoutlived}
                    </p>
                    <p key={value.stats.score}>Score : {value.stats.score}</p>
                  </div>
                );
              })
            ) : (
              <div> User Data Not Found </div>
            )}
          </div>
        </div>
      ) : (
        <div>No Data found </div>
      )}

      {/* <div>
        <h1> Redux Test</h1>
        <p>Name: {name.name}</p>
        <button onClick={updateName}>Update Name</button>
        <p>Game: {game.game}</p>
        <button onClick={updateGame}>Update Game</button>
      </div> */}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.name,
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: () => {
      dispatch(nameActions);
    },

    updateGame: () => {
      dispatch(gameActions);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);
