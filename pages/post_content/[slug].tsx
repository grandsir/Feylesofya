import {getPostBySlug, getQuery} from "../../services";

export async function getStaticPaths() {
  const postsData = (await getQuery());

  // @ts-ignore
  const paths = postsData.map(post => ({
    params: { slug: post.node.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

//@ts-ignore
export async function getStaticProps(context) {
  const { params } = context
  const post = (await getPostBySlug(params));
  return {
    props: post
  }
}

//@ts-ignore
export default function PostPage(post){
  return (
      <div>
        <h1>{post.title}</h1>
      </div>
  );
}

