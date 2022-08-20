export type Post = {
  node: PostNode;
};

export type Feylesof = {
  node: FeylesofNode;
};

export type Category = {
  name: string;
  slug: string;
  iconPath: string;
  timesClicked: number;
};

export type Comments = {
  name: string;
  comment: string;
  feylesof: Feylesof;
};

export type FeylesofNode = {
  bio: string;
  id: string;
  slug: string;
  name: string;
  photo: Photo;
  posts: Post[];
  comments: Comments[];
  followers: Feylesof[];
  following: Feylesof[];
  feylesofType: string;
};

export type PostNode = {
  title: string;
  excerpt: string;
  featuredImage: featuredImage;
  slug: string;
  categories: Category[];
  feylesoflar: FeylesofNode[];
  roles: string[];
};

type featuredImage = {
  url: string;
};

type Photo = {
  url: string;
};

const AuthorRole = new Map<string, string>([
  ["lead", "Yazar"],
  ["second", "İkinci Yazar"],
  ["collabrative", "Ortak Yazar"],
  ["guest", "Misafir Yazar"],
  ["editor", "Editör"],
]);

export function toLocalizedAuthor(arg: string): string {
  return AuthorRole.get(arg)!;
}
