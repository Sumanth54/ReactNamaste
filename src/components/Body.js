import resList from "../Utils/mockData"; 
import { useEffect, useState } from "react";
import RestCard from "./ResturantCard";
import SearchBOx from "./Search";
import Shimmer from "./Shimmer";
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
    
  const [listOfResturant , setListOfResturant] = useState([]);
  const [filterdREsturant , setfilterdREsturant] = useState([]);

 const [searchRest , setsearchRest] = useState("");

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterdREsturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
   /*  let data  =  await fetch("https://www.swiggy.com/dapi/restaurants/list")
    let json = await data.json(); */

    
  }


  if(listOfResturant.length === 0 ){
    return(
      <Shimmer />
    )
  }

    return (
      <div className="body">
          <input type="text" placeholder="enter the resturant name " id="searchRest" className="searchRest" value={searchRest} onChange={(e) => {
             setsearchRest( e.target.value) ;
             
          }}/>
         <button  className="goToRest" onClick={() => {
          let filteredRest  =  listOfResturant.filter((res) => {
            return res.info?.name.toLowerCase().includes(searchRest.toLocaleLowerCase())
          })
          setfilterdREsturant (filteredRest);
         }}>Find</button>
        <button className="sortByrating" onClick={() => {
           let filterdRestByRating = listOfResturant.filter(
            (res) =>  res.info.avgRating > 4.5
           )
           setfilterdREsturant(filterdRestByRating)
        }}>top rated resturant </button>
        
        <div className="res-container">
          {filterdREsturant.map((resobj)=>  <RestCard key= {resobj.info.id} restData = {resobj} />)}
        </div>
      </div>
    );
  };


  export default Body