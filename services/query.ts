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
        comments {
        feylesof {
          bio
          id
          name
          nickname
          photo {
            url
          }
          slug
        }
        comment
        score
        slug
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
          comments {
            comment
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
          followers { 
              nickname
          }
          following { 
            nickname
          }
          comments {
            comment
          }
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




