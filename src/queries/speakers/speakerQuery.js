import { gql } from "@apollo/client";

export const gqlGetSpeakers = gql`	
    query getSpeakers {
        speakers {                
        id,
        name,
        bio,
        webSite
        }
    }`;