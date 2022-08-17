export const getFeylesofBySlugQuery = `
  query getFeylesofBySlug($slug: String!) {
      feylesof(where: { slug: $slug }) {   
          nickname
          id
          bio
          name
          photo {
            url
          }
          feylesofType 
      }
  }
  `
export const getPostBySlugQuery = `
query GetPostContent($slug:String!) {
  post(where: {slug: $slug}) {
    title
    roles
    featuredPost
    featuredImage {
      url
    }
    feylesoflar {
      bio
      name
      photo {
        url
      }
      slug
      feylesofType
    }
    content {
      raw
    }
  }
}

`

