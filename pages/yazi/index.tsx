import Link from 'next/link'
import {getQuery} from "../../services";
import {Post} from "../../components/Models";
import {NextPage} from "next";


const PostContent: NextPage<Post[]> = (posts) => {
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
  const posts = (await getQuery()) || [];

  return {
    props: { posts }
  }
}

export default PostContent;