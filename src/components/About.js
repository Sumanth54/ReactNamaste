import User from "./User";
import UserClass from "./UserClass";
//import React from "react"



/* class About extends React.Component {
    constructor (props) {
        super(props);
        console.log("Parent constructor");
    }

componentDidMount( ) {
    console.log("Parent component did mount ")
}

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>this is About US page</h1>
                 <h1>this is About US page</h1>
                 < User  name={"Sumanth Function"}/>
                 <UserClass name={"First"} city={"sagara class"}  /> 
                
            </div>
            
        )
    }
} */

const About  = () => {
    return (
        <div>
            <h1>this is About US page</h1>
             <h1>this is About US page</h1>
             < User  name={"Sumanth Function"}/>
            {/*  <UserClass name={"Sumanth Class"} city={"sagara class"}  />  */}
        </div>
        
    )
}

export default About;