import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UpcomingItems() {
  useEffect(() => {
    getUpcoming();
  }, []);
  const [upcomingItems, setUpcoming] = useState([]);
  const getUpcoming = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get",
      {
        method: "GET",
        headers: {
          Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
        }
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    setUpcoming(responseData.data);
  };
  return (
    <div className="up-wrapper">
      <h1>Upcoming Items</h1>
      <div className="item-main">
        {upcomingItems ? (
          upcomingItems.slice(0, 10).map((item, index) => (
            <Link to={`/items/${item.itemId}`}>
              <div className="item-wrapper upcoming-wrapper" key={item.itemId}>
                <div className="inner-item">
                  <img src={item.item.images.background} alt="" />
                  <h2>{item.item.name}</h2>
                  <p>Click For Details</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

export default UpcomingItems;
