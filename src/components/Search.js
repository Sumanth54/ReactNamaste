import { useState } from "react";
import resList from "../Utils/mockData";



const SearchBOx = () => {

const [sortBySaerch,setSortBySaerch] = useState(resList);


    return ( 
      
<>
         
         <input type="text" placeholder="enter the resturant name " id="searchRest" className="searchRest" name="searchRest"/>
         <button  className="goToRest" onClick={() => {
             let searchInner = document.getElementById("searchRest");
             let sortedData = sortBySaerch.filter((res) => res.info.name.includes(searchInner.value))
             setSortBySaerch(sortedData)          
             }}>Find</button>
       
       </>

        
    );
}


export default SearchBOx;