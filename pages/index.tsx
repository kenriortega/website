
import { Box, Container, Flex, Heading, } from "../components/elements"

import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import Meta from "../components/Meta"
import { PostListItem, } from '../components/PostListItem'
import { getAllFilesMetadata } from '../lib/mdx'
import { useStylesApp } from '../hooks/useStylesApp'
import { formatDate } from "../lib/format-date";
export default function Home({ posts }) {
  const { border, colorBase } = useStylesApp()
  const width = "100%";

  return (
    <Layout>
      <Meta title="Kenriortega | blog" />
      <Container maxW="container.2xl" px={[0, 4]}>
        <Flex
          d="flex"
          direction={["column", "column", "column", "column", "row"]}
          mx="auto"
        >
          <Box
            as="article"
            bg="white"
            p={[4, 4, 8, 16]}
            mx={[0, 0, 0, 0, 4]}
            my={4}
            borderRadius="lg"
            width={["100%", "100%", "100%", "100%", width]}
          >
            <Heading as="h1" m={8} size="2xl">
              Últimos Artículos
            </Heading>
            {posts.map((post) => (
              <Link key={post.slug} href={`blog/${post.slug}`}>
                <a>
                  <PostListItem
                    title={post.title}
                    date={formatDate(post.date)}
                    tags={post.tags}
                  />
                </a>
              </Link>
            ))}
          </Box>
        </Flex>
      </Container>
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
