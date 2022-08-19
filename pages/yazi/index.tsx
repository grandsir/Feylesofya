import Link from 'next/link'
import {getPosts} from "../../services";
import {Post} from "../../services/models";
import {NextPage} from "next";


const PostContent: NextPage<[{node: Post}]> = (posts) => {
  return (
      <div>
        {posts.map(post => (
            <Link href={'/yazi/' + post.node.slug} key={post.node.slug}>
            </Link>
        ))}
      </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}

export default PostContent;