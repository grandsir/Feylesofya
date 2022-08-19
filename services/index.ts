import {gql, request, rawRequest} from 'graphql-request'
import {categoryQuery, feylesofQuery, postQuery} from "./query";
import {getFeylesofBySlugQuery, getPostBySlugQuery} from "./slugs/slugQueries";
import {Feylesof, FeylesofResultType, Post, PostResultType} from "./models";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getPosts():
    Promise<[{ node: Post }] | undefined> {
    const q = gql`${postQuery}`

    const result = await rawRequest<PostResultType>(graphqlAPI ?? "", q);
    if (result.data) {
        return result.data.postsConnection.edges
    }
    return undefined
}

export async function getFeylesof(): Promise<[{ node: Feylesof }] | undefined> {
    const q = gql`${feylesofQuery}`

    const result = await rawRequest<FeylesofResultType>(graphqlAPI ?? "", q);
    if (result.data) {
        return result.data.feylesoflarConnection.edges
    }
    return undefined
}


export async function getFeylesofBySlug(variables: { slug: string }) {
    const q = gql`${getFeylesofBySlugQuery}`

    const result = await rawRequest<{ feylesof: Feylesof }>(graphqlAPI ?? "", q, variables);
    if (result.data) {
        return result.data.feylesof
    }
    return undefined
}

export async function getPostBySlug(variables: { slug: string }) {
    const q = gql`${getPostBySlugQuery}`

    const result = await rawRequest<{ post: Post }>(graphqlAPI ?? "", q, variables);
    if (result.data) {
        return result.data.post
    }
    return undefined
}


export async function getCategories() {
    const q = gql`${categoryQuery}`

    const result = await request(graphqlAPI ?? "", q);
    return result.categories
}




