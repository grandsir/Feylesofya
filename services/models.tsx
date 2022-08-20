import { RichTextContent } from '@graphcms/rich-text-types';

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

export type Comments = {
  name: string;
  comment: string;
  feylesof: Feylesof;
};

export type Feylesof = {
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

export type Post = {
  title: string;
  excerpt: string;
  featuredImage: featuredImage;
  slug: string;
  categories: Category[];
  feylesoflar: Feylesof[];
  roles: string[];
  content : {
    raw: RichTextContent
  }
};








type featuredImage = {
  url: string;
};

type Photo = {
  url: string;
};
