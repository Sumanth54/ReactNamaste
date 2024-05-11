import { RES_CDN } from "../Utils/constants";

const RestCard = (props) => {
    const restData = props.restData
   


    
  
    return (
      <div className="m-5  h-[522px] w-[300px] border-solid border-2 bg-slate-100 outline-offset-2 hover:bg-lime-200 rounded-xl">
        <img 
        className="p-1 h-[280px] size-full border-solid border-1 border-black-100 rounded-2xl"
          alt="resturant image"
          src={RES_CDN +restData?.info?.cloudinaryImageId}
        />
        <h3 className="decoration-solid  font-bold text-2xl font-serif p-1">{restData?.info?.name}</h3>
        <h4 className="decoration-solid  font-extralight text-lg font-serif p-1">{restData?.info?.cuisines.join(", ")}</h4>
        <h4 className="decoration-solid  font-normal text-base font-serif p-1"> {restData?.info?.avgRating} starts</h4>
        <h4 className="decoration-solid  font-light text-base font-serif p-1">{restData?.info?.sla?.slaString}</h4>
        <h4 className="decoration-solid  font-light text-base font-serif p-1">{restData?.info?.costForTwo}</h4>
  
   
      </div>
    );
  };


  export const IsNewlyOnboardedComp = (RestCard) => {
    return (props) => {
     return(
      <div>
        <label className="absolute bg-green-400 text-white p-1 m-6  rounded-full hover:text-sm">Newly added</label>
        {console.log(props)}
        <RestCard {...props}/>
      </div>
     )
    }
  } 


 

  export default RestCard;