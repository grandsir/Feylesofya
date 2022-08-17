import {gql, request} from 'graphql-request'
import {categoryQuery, feylesofQuery, postQuery} from "./query";
import {getFeylesofBySlugQuery, getPostBySlugQuery} from "./slugs/slugQueries";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export async function getQuery () {
    const q = gql`${postQuery}`

    const result = await request(graphqlAPI ?? "", q);
    return result.postsConnection.edges;
}

export async function getFeylesof() {
    const q = gql`${feylesofQuery}`

    const result = await request(graphqlAPI ?? "", q);
    return result.feylesoflarConnection.edges;
}

export async function getFeylesofBySlug(variables:string) {
    const q = gql`${getFeylesofBySlugQuery}`

    const result = await request(graphqlAPI ?? "", q, variables);
    return result.feylesof;
}

export async function getPostBySlug(variables:string) {
    const q = gql`${getPostBySlugQuery}`

    const result = await request(graphqlAPI ?? "", q, variables);
    return result.post;
}


export async function getCategories() {
    const q = gql`${categoryQuery}`

    const result = await request(graphqlAPI ?? "", q);
    return result.categories
}




