import { Email_logo, Github_logo , Linkedin_logo } from "../Utils/constants"

const Footer = () =>{
    return(
      <>
      <div className=" flex justify-center p-5 bg-teal-50  hover:bg-pink-500 ">
        Thank you for visiting the site
      </div>
      <div className="flex  flex-row justify-center bg-pink-100  hover:bg-pink-500  " >
      <a href="https://github.com/Sumanth54/ReactNamaste" target="blank" className="mx-10 py-3 "><img src={Github_logo} alt="github"  /> </a>
      
        <a href="https://www.linkedin.com/in/sumanths2911/ " target="_blank" className="mx-10 py-2"><img src={Linkedin_logo} alt="Linkedin"/>  </a>
        <a href="mailto:ssumanth053@gmail.com" className="mx-10  py-2"><img src={Email_logo} alt="Email"/>  </a>
      </div>

     
     
      </>
    )
  }

  export default Footer