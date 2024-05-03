import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            count : 0,
            count2 : 2,
        }
    }
    

    render () {
        const { name , city } = this.props;
        const { count , count2 } = this.state;
        return (
            <div className="user_function">
            <h1>{name}</h1>
            <h1>
               count2  :  {count}
            </h1>
            <button onClick={() => {
               this.setState( {count : this.state.count + 1 ,
                count2 : this.state.count2 + 1 }
            )
            }}>count ++</button>
            <h1>
                count2  : {count2}
            </h1>
            <h2>
            {city}
            </h2>
            <h3>GIt repo : javascrip ,react</h3>
        </div>
        )
    }
}

export default UserClass;