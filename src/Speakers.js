import { useQuery, gql } from "@apollo/client";
const getSpeakers = gql`	
 query  getSpeakers {
    speakers {
      bio,
      name,
      id
    }
 } 
`;
//somechanges
function Speakers(){
    const { loading, error, data} = useQuery(getSpeakers);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    console.log(data);
    return data.speakers.map(({id,name}) => {
        <div key={id}>
            <h4>List of speakers</h4>
            <p>Id:{id}</p>
            <p>Name : {name}</p>
        </div>
    });
}
export default Speakers;