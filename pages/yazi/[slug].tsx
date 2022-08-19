import {getFeylesof, getFeylesofBySlug, getPostBySlug, getPosts} from "../../services";
import {GetStaticPaths, GetStaticProps} from "next";
import {Feylesof, Post} from "../../services/models";
import {ParsedUrlQuery} from "querystring";
import PostDetail from "../../components/PostDetail";

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths : GetStaticPaths = async() => {
  const postsData = await getPosts() ?? [];

  const paths = postsData.map((posts) => ({
    params: { slug: posts.node.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Post, IParams> = async(context) => {
  const post = await getPostBySlug(context.params!);
  return {
    props: post!
  };
}



export default function PostPage(post : Post){
  return (
      <div>
        <PostDetail {...post}></PostDetail>
      </div>
  );
}

