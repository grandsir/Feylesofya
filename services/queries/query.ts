import {Feylesof} from "../components/Models";

export const postQuery = `
query PostQuery {
  postsConnection {
    edges {
      node {
        slug
        createdAt
        title
        excerpt
        roles
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        feylesoflar {
          nickname
          id
          bio
          name
          photo {
            url
          }
          slug
          followers { 
              nickname
          }
          following { 
            nickname
          }
        }
      }
    }
  }
}
`

export const feylesofQuery = `
query FeylesofQuery {
    feylesoflarConnection {
      edges {
        node {
          name
<<<<<<< Updated upstream:services/queries/query.ts
          registerDate
=======
          photo {
            url
          }
          slug
          feylesofType 
          followers { 
              nickname
          }
          following { 
            nickname
          }
          comments {
            name
          }
>>>>>>> Stashed changes:services/query.ts
        }
      }
    }
<<<<<<< Updated upstream:services/query.ts
  }  
`
=======
}     
`
<<<<<<< Updated upstream:services/queries/query.ts
=======

>>>>>>> Stashed changes:services/query.ts

>>>>>>> Stashed changes:services/queries/query.ts
