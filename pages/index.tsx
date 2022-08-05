import type { NextPage } from 'next'
import Head from 'next/head'
import {PostCard, PostWidget, Categories} from '../components';
import { Post } from '../components/Models';
import { getPosts } from '../services'

type HomeProps = { 
  posts: Post[];
  children: JSX.Element;
}

// @ts-ignore
const Home: NextPage = ({posts}: HomeProps) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Feylesofya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post: Post) =>  <PostCard {...post}></PostCard>)
          }
        </div>

        <div className='lg:col-span-4 col-span-1'> 
          <div className='lg:sticky relative top-8'>
            <PostWidget /> 
            <Categories />
          </div> 
        </div> 
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];


  return {
    props: { posts }
  }
}

export default Home
