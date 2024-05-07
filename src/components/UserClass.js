import React from "react";

class UserClass extends React.Component {

    constructor(props){
      
        super(props);
        // console.log( this.props.name + "child constructor")
        this.state  = {
            count : 0,
            count2 : 2,
            userInfo : {

            },
        }
    }

    async componentDidMount() {
        // console.log( this.props.name + "child component did mount ")

        let data = await fetch("https://api.github.com/users/Sumanth54");
        let json = await data.json();
      
        this.setState( {
            userInfo : json
        })

    }

   componentDidUpdate() {
    this.timer  =  setInterval(()=> {
        console.log("timer")
    },2000)
   }

   componentWillUnmount () {
   
        clearInterval(this.timer)
    
   }
    

    

    render () {
        // console.log( this.props.name + "child render")
        const { name , city } = this.props;
        const { count , count2 } = this.state;
        return (
            <div className="user_function">

                <h1>{this.state.userInfo.login}</h1>
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
           
        </div>
        )
    }
}

export default UserClass;