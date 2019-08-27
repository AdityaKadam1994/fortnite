import React, { useState, useEffect } from "react";

function ItemDetails({ match }) {
  const [item, setData] = useState({});
  useEffect(() => {
    const getItemDet = async () => {
      const response = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}
  `,
        {
          method: "GET",
          headers: {
            Authorization: "9f4f414cd34a145f5b1571fa6cc42412"
          }
        }
      );
      const responseData = await response.json();
      setData(responseData.data.item);
    };
    getItemDet();
  }, [match.params.id]);
  return (
    console.log(item),
    (
      <div className="full-box details-box">
        <div className="upcoming-items">
          <h1>{item.name}</h1>
          <img src={item.images ? item.images.background : "nothing"} alt="" />
          <p>
            <strong>Description: </strong>
            {item.description ? item.description : "No DataFound"}
          </p>
          <p>
            <strong>Cost: </strong>
            {item.cost}
          </p>
          <p>
            <strong>Type: </strong>
            {item.type}
          </p>
          <p>
            <strong>Rarity: </strong>
            {item.rarity}
          </p>
        </div>
      </div>
    )
  );
}

export default ItemDetails;
