import { request, gql } from 'graphql-request'
export { postQuery, feylesofQuery } from './query'

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



