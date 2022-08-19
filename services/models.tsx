export type PostResultType = {
  postsConnection: {
    edges: [
      { node: Post }
    ]
  }
};

export type FeylesofResultType = {
  feylesoflarConnection: {
    edges: [
      { node: Feylesof }
    ]
  }
};

export type Category = {
  name: string;
  slug: string;
  iconPath: string;
  timesClicked: number;
};

export type Feylesof = {
  bio: string;
  id: string;
  slug: string;
  name: string;
  photo: Photo;
  followers: Feylesof[];
  following: Feylesof[];
  feylesofType: string;
};

export type Post = {
  title: string;
  excerpt: string;
  featuredImage: featuredImage;
  slug: string;
  categories: Category[];
  feylesoflar: Feylesof[];
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
