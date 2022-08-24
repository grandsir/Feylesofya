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

export type CommentType = {
  comment: string
  slug: string
  score: number
  post: Post
  feylesof: Feylesof
  replies: Reply[]
}

export type Category = {
  name: string;
  slug: string;
  iconPath: string;
  timesClicked: number;
};

export type Feylesof = {
  bio: string;
  id: string;
  nickname: string;
  slug: string;
  name: string;
  photo: Photo;
  posts: Post[];
  comments: CommentType[];
  followers: Feylesof[];
  following: Feylesof[];
  feylesofType: string;
};

export type Reply = {
  feylesof: Feylesof;
  reply: string;
  score: number
}

export type Post = {
  title: string;
  excerpt: string;
  featuredImage: featuredImage;
  slug: string;
  categories: Category[];
  feylesoflar: Feylesof[];
  roles: string[];
  comments: CommentType[]
  content: {
    raw: RichTextContent
  }
};

type featuredImage = {
  url: string;
};

type Photo = {
  url: string;
};
