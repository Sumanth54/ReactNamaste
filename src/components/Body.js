import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import RestCard , { IsNewlyOnboardedComp } from "./ResturantCard";
import SearchBOx from "./Search";
import Shimmer from "./Shimmer";
import ResturantMenu from "./ResturantMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

/* let resList = [
    {
      "info": {
        "id": "47385",
        "name": "Priyadarshini Grand",
        "cloudinaryImageId": "c9elzh8awx7jcx70cood",
        
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chaat",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.6,
        
        "sla": {
          "deliveryTime": 36,
          
        },
        
    }
  },
    {
      "info": {
        "id": "46647",
        "name": "Ayodhya Upachar",
        "cloudinaryImageId": "74914b1ea91d2c6b1ddce5db6ce8759f",
        "locality": "Banashankari",
        "areaName": "Banashankari",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Ice Cream",
          "Chaat"
        ],
        "avgRating": 4.4,
        "sla": {
          "deliveryTime": 32,
        },
       
      },
        
        
    
        
     
    },
    {
      "info": {
        "id": "47389",
        "name": "SUmanth Grand",
        "cloudinaryImageId": "c9elzh8awx7jcx70cood",
        
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chaat",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 3.6,
        
        "sla": {
          "deliveryTime": 36,
          
        },
        
    }
  }]
 */

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filterdREsturant, setfilterdREsturant] = useState([]);
 const [searchRest, setsearchRest] = useState("");

 const NewlyAdded = IsNewlyOnboardedComp(RestCard);
  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json.data);
      
      setListOfResturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      );
      setfilterdREsturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      
      console.log("data called and udpadted", listOfResturant);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

    const onlineStatus = useOnlineStatus()

  if( onlineStatus === false){
    return (
      <h1>HI you are offline</h1>
    )
  }

  if (listOfResturant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-orange-100 ">
      <input
        type="text"
        placeholder="enter the resturant name "
        
        className="m-5 w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:bg-zinc-200"
        value={searchRest}
        onChange={(e) => {
          setsearchRest(e.target.value);
        }}
      />
      <button
        className=" px-5 p-1 m-1 border-solid border-2 border-orange-600 rounded-lg hover:bg-orange-300  "
        onClick={() => {
          let filteredRest = listOfResturant.filter((res) => {
            return res.info?.name
              .toLowerCase()
              .includes(searchRest.toLocaleLowerCase());
          });
          setfilterdREsturant(filteredRest);
        }}
      >
        Find
      </button>
      <button
        className="px-5 p-1 m-1 border-solid border-2 border-orange-600 rounded-lg  hover:bg-orange-300"
        onClick={() => {
          let filterdRestByRating = listOfResturant.filter(
            (res) => res.info.avgRating > 4.5
          );
          setfilterdREsturant(filterdRestByRating);
        }}
      >
        Top rated resturant
      </button>
 
      <div className=" flex flex-wrap" >
        {filterdREsturant?.map((resobj) => (
          <Link key={resobj.info.id} to={"Restaurant/" + resobj.info.id}>
            {resobj?.info?.isNewlyOnboarded ? <NewlyAdded restData={resobj} /> : <RestCard key={resobj.info.id} restData={resobj} />}

            
          </Link>
        ))}
      </div> 
    </div>
  );
};

export default Body;
