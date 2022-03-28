import { useQuery, gql } from "@apollo/client";
import MyDataTable from "./MyDataTable";

const getSpeakers = gql`	
    query getSpeakers {
        speakers {                
        id,
        name,
        bio,
        webSite
        }
    }`;

const Speakers = () => {
    const {loading, error, data} = useQuery(getSpeakers);
    if(loading)
        return <div>Loading...</div>
    if(error)
        return <div>Error: error</div>

    return (
        <div className="container">
           <MyDataTable speakers={data.speakers}/>
        </div>
    );
}
export default Speakers;