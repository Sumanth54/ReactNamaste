import { useState } from "react";

const User  = (props) => {

    const [count , setCount] = useState(0);
    const [count2, setCount2] = useState(2);
   
    

    return (
        <div className="user_function">
            <h1>{(props.name)}</h1>
            <h1>count : {count}</h1>
            <button  onClick={() => {
                  setCount(count +1)
                  setCount2(count2 +1)
            }}>add count</button>
         <h1>count : {count2}</h1>
            <h2>
                Sagara
            </h2>
            <h3>GIt repo : javascrip ,react</h3>
        </div>
    )
}


export default User;