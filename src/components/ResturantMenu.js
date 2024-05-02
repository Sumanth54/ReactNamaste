import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import Contact from "./Contact";
import { useParams } from "react-router-dom";
import { Res_ID_API } from "../Utils/constants";

const ResturantMenu = () => {
  const [MenuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const params = useParams();
  

  const fetchData = async () => {
    try {
      let data = await fetch(Res_ID_API + params.id);
      let json = await data.json();

      setMenuData(json.data);
      console.log(MenuData);
      
      //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards[0].card.info.name
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  if (MenuData === null) {
    return <Shimmer />;
  }

  const resDATA = MenuData?.cards[2]?.card?.card?.info;

  const itemCards =
    MenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h1>{resDATA.name}</h1>
      <h2>{resDATA.cuisines.join(",")}</h2>
      <h3>{resDATA.locality}</h3>

      <span>{"Rs. " + resDATA.costForTwo / 100 + " for two"}</span>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} {"---  RS."}{" "}
            {items.card.info.defaultPrice / 100 || items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;