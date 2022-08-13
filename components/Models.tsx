export type Post = {
    node: Node;
}

export type Category = {
    name: string; 
    slug: string;
}

export type Feylesof = {
    bio: string;
    id: string;
    slug: string;
    name: string;
    photo: Photo;
    followers: Feylesof[];
    following: Feylesof[];
}

type Node = {
    title: string;
    excerpt: string;
    featuredImage: featuredImage;
    slug: string;
    categories: Category[];
    feylesoflar: Feylesof[];
    roles: string[];
}

type featuredImage = {  
    url: string;
}

type Photo = {
    url: string;
}

var AuthorRole = { 
    "lead" : "Yazar",
    "second" : "İkinci Yazar", 
    "collabrative" : "Ortak Yazar",
    "guest" : "Misafir Yazar",
    "editor" : "Editör"
}

export function toLocalizedAuthor(arg: string) : string {
    //@ts-ignore
    return AuthorRole[arg]
}