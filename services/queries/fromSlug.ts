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
  }`
