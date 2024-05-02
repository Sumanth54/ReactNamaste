import { RES_CDN } from "../Utils/constants";

const RestCard = (props) => {
    const restData = props.restData
   


    
  
    return (
      <div className="res-card">
        <img 
        className="res-logo"
          alt="resturant image"
          src={RES_CDN +restData?.info?.cloudinaryImageId}
        />
        <h3>{restData?.info?.name}</h3>
        <h4>{restData?.info?.cuisines}</h4>
        <h4> {restData?.info?.avgRating} starts</h4>
        <h4>{restData?.info?.sla?.slaString}</h4>
        <h4>{restData?.info?.costForTwo}</h4>
  
  
      </div>
    );
  };

  export default RestCard;