import React, { useState, useEffect } from "react";
function UserStats() {
  const [users, setUser] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=f313b75dc8864c35829c844e1637be4d",
      {
        method: "GET",
        headers: { Authorization: "9f4f414cd34a145f5b1571fa6cc42412" }
      }
    );
    const responseData = await response.json();
    setUser(responseData.data);
    console.log(responseData.data);
    console.log(responseData.data.stats.gamepad[0].entries[0].stats.kills);
  };

  return (
    <div>
      <h1>User Stats</h1>
      {users ? (
        <div>
        <div><h3>{users.username}</h3></div>
        {/* <div>{users ? users.stats.gamepad.map(value=>{
          return <div key={value.id}>{value.id}</div>
        }): <div>No Data found</div>}</div> */}
        <div>{users.stats.gamepad[0].entries.map(value=>{
          return <div>
          <div key={value.stats.kills}>Kills : {value.stats.kills}</div>
          <div key={value.stats.matchesplayed}>Matchesplayed : {value.stats.matchesplayed}</div>
          <div key={value.stats.minutesplayed }>Minutesplayed   : {value.stats.minutesplayed }</div>
          <div key={value.stats.placetop1}>Placetop1 : {value.stats.placetop1}</div>
          <div key={value.stats.placetop3}>Placetop3 : {value.stats.placetop3}</div>
          <div key={value.stats.placetop6}>Placetop6 : {value.stats.placetop6}</div>
          <div key={value.stats.playersoutlived}>Playersoutlived : {value.stats.playersoutlived}</div>
          <div key={value.stats.score}>Score : {value.stats.score}</div>
          </div>
        })}</div>
        </div>
      ) : (
        <div>No Data found </div>
      )}
    </div>
  );
}
export default UserStats;
