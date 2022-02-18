import { gql } from "@apollo/client"

const gqlGetSpeakers = gql`	
 query getSpeakers {
    speakers {
      bio,
      name,
      id
    }
 }`;

 export {
     gqlGetSpeakers
 }