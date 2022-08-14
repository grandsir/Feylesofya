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
          nickname
          id
          bio
          name
          photo {
            url
          }
          slug
          feylesofType 
        }
      }
    }
}     
`

export const categoryQuery = `
query CategoryQuery {
      categories {
          name
          timesClicked
          slug
          iconPath
      } 
}
`




