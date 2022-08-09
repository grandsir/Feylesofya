

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
          authors {
            bio
            id
            name
            slug
            photo {
              url
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
          registerDate
          surname
        }
      }
    }
  }  
`