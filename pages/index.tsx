import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import {PostCard, PostWidget, Categories} from '../components';
import { Post } from '../components/Models';
import { getQuery, getFeylesof } from '../services'
import { postQuery, feylesofQuery } from '../services'
type HomeProps = { 
  posts: Post[];
  children: JSX.Element;
}

// @ts-ignore
const Home: NextPage = ({posts}: HomeProps) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css" />

        <title>Feylesofya</title>
        <link rel="icon" href="/favicon.ico" />        
        <script src='https://unpkg.com/@themesberg/flowbite@1.3.0/dist/datepicker.bundle.js' />
        <script src='https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js' />

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
  const posts = (await getQuery(postQuery)) || [];
  const feylesofs = (await getFeylesof(feylesofQuery)) || [];

  console.log(feylesofs)

  return {
    props: { posts }
  }
}

export default Home
