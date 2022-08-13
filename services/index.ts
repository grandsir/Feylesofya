import { request, gql } from 'graphql-request'
<<<<<<< Updated upstream
export { postQuery, feylesofQuery } from './queries/query'

=======
export { postQuery, feylesofQuery, filteredFeylesofQuery } from './query'
>>>>>>> Stashed changes

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getQuery (query:string) {
    const q = gql`${query}`

    const result = await request(graphqlAPI ?? "", q);
    return result.postsConnection.edges;
}

export async function getFeylesof(query:string) {
    const q = gql`${query}`

    const result = await request(graphqlAPI ?? "", q);
    return result.feylesoflarConnection.edges;
}

<<<<<<< Updated upstream
=======
export async function getFeylesofBySlug(query:string, variable:string) {
    const q = gql`${query}`

   const result = await request(graphqlAPI ?? "", q, variable);
   return result.feylesof;
}

>>>>>>> Stashed changes
