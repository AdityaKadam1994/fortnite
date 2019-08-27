import React, { useState, useEffect } from "react";
function UserStats() {
  const [users, setUser] = useState({});
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
    console.log(responseData.data.stats.gamepad[0].entries[0].stats.kills);
  };

  return (
    <div>
      <h1>User Stats</h1>
      {users ? (
        <div>{/* <h3>{users.username}</h3> */}</div>
      ) : (
        <div>No Data found </div>
      )}
    </div>
  );
}
export default UserStats;
