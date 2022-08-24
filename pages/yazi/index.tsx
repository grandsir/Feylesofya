import Link from 'next/link'
import {getPosts} from "../../services";
import {Post} from "../../services/models";
import { NextPage } from "next";
import React, { useEffect, useState } from 'react';

const PostContent: NextPage<[{ node: Post }]> = () => {
  const [posts, setPosts] = useState<[{node: Post}] | []>([])

  useEffect(() => {
    getPosts().then((posts: [{node: Post}] | undefined) => {
      setPosts(posts ?? []);
    });
  }, []);
  return (
      <div>
        {posts && posts.map(post => (
            <Link href={'/yazi/' + post.node.slug} key={post.node.slug}>
            </Link>
        ))}
      </div>
  );
};

export default PostContent;