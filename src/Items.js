import React, { useEffect, useState } from "react";
import UpcomingItems from "./UpcomingItems";
import "./App.css";

function Items() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/items/list",
      {
        method: "GET",
        headers: {
          Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
        }
      }
    );
    const responseData = await response.json();
    setItems(responseData.data);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="full-box">
      <h1>Items</h1>
      <div className="item-main">
        {items ? (
          items.slice(0, 10).map((item, index) => (
            <div className="item-wrapper" key={item.itemId}>
              <div className="inner-item">
                <img src={item.item.images.background} alt="" />
                <h2>{item.item.name}</h2>
                <p>
                  <strong>Description: </strong>
                  {item.item.description}
                </p>
                <p>
                  <strong>Cost: </strong>
                  {item.item.obtained}
                  &nbsp;
                  {item.item.obtained_type}
                </p>
                <p>
                  <strong>Type: </strong>
                  {item.item.type}
                </p>
                <p>
                  <strong>Rarity: </strong>
                  {item.item.rarity}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <UpcomingItems />
    </div>
  );
}

export default Items;
