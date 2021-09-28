
import { Box, Center, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import Meta from "../components/Meta"
import { getAllFilesMetadata } from '../lib/mdx'
export default function Home({ posts }) {
  return (
    <Layout>
      <Meta title="Kenriortega | blog" />
      <main className={"main"}>
        <h1 className={"title"} >
          Blog personal
        </h1>
        <p className={"description"}>
          Desarrollador Backend:
          <span className={"description"}>
            <a href="https://github.com/kenriortega">@kenriortega!</a>
          </span>
        </p>
        <div className={'grid'}>
          {posts.map((post) => (
            <Fragment key={post.slug}>
              <>
                <Link href={`/blog/${post.slug}`}>
                  <span className={"card"} >
                    <Box w="500" >
                      <p>{post.title}</p>
                      <h5>{post.tags}</h5>
                      <h5>
                        {post.date}
                      </h5>
                    </Box>
                  </span>
                </Link>
              </>
            </Fragment>
          ))}
        </div>
      </main>
    </Layout>

  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: {
      posts
    }
  }
}
