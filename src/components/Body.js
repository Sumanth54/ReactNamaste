import resList from "../Utils/mockData"; 
import { useState } from "react";
import RestCard from "./ResturantCard";

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
    
  const [listOfResturant , setListOfResturant] = useState(resList);

    return (
      <div className="body">
        <button className="sortByrating" onClick={() => {
           let filterdRest = listOfResturant.filter(
            (res) =>  res.info.avgRating > 4.5
           )
           setListOfResturant(filterdRest)
        }}>to rated resturant </button>
        <div className="res-container">
          {listOfResturant.map((resobj)=>  <RestCard key= {resobj.info.id} restData = {resobj} />)}
        </div>
      </div>
    );
  };


  export default Body