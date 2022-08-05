import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async () => { 
    const query = gql`
    query PostQuery {
        postsConnection {
            edges {
                node {
                    authors {
                    bio
                    id
                    name
                    photo {
                        url
                    }
                }
                slug
                createdAt
                title
                featuredImage {
                    url
                }
                excerpt
                categories {
                    name
                    slug
                }
                roles
            }
        }
    }
}
`
    const result = await request(graphqlAPI ?? "", query);
    return result.postsConnection.edges;
} 