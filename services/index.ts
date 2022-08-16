import {gql, request} from 'graphql-request'

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

export async function getFeylesofBySlug(query:string, variables:string) {
    const q = gql`${query}`
    const result = await request(graphqlAPI ?? "", q, variables);

    return result.feylesof;
}

export async function getCategories(query:string) {
    const q = gql`${query}`
    const result = await request(graphqlAPI ?? "", q);
    return result.categories
}




