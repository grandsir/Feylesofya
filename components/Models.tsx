export type Post = {
    node: PostNode;
}

export type Feylesof = {
    node: FeylesofNode
}

export type Category = {
    name: string; 
    slug: string;
    iconPath: string;
    timesClicked: number;
}

export type FeylesofNode = {
    bio: string;
    id: string;
    slug: string;
    name: string;
    photo: Photo;
    feylesofType: string;
    followers: Feylesof[]
    following: Feylesof[]
}

type PostNode = {
    title: string;
    excerpt: string;
    featuredImage: featuredImage;
    slug: string;
    categories: Category[];
    feylesoflar: FeylesofNode[];
    roles: string[];
}

type featuredImage = {  
    url: string;
}

type Photo = {
    url: string;
}

const AuthorRole = {
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