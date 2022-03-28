import { useQuery, gql } from "@apollo/client";
import { MyDataTable } from "./table";

const getSpeakers = gql`	
    query getSpeakers {
        speakers {                
        id,
        name,
        bio,
        webSite
        }
    }`;

export const Speakers = () => {
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
