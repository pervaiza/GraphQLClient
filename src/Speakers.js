import { useQuery, gql } from "@apollo/client";

const getSpeakers = gql`	
 query getSpeakers {
    speakers {
      bio,
      name,
      id
    }
 }`;

function Speakers(){
    const { loading, error, data} = useQuery(getSpeakers);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    console.log(data);
    return (
        <div>
                {data.speakers.map(item => {
                    return <div key={item.id}>
                        <p>Id: { item.id}</p>
                        <p>Name: {item.name} </p>
                    </div>
                })}
        </div>
    );
}
export default Speakers;