import { useRouteError , Link } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return(
        <div>
            <h1>Ooop....!!!! page not found</h1>
            {console.log(err)}
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
            <Link to="http://localhost:1234/">Redirect to  page </Link>
        </div>
    )
}
export default Error;