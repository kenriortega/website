import { Box, Container, Flex, Heading, } from "../../components/elements"
import { getFiles, getFileBySlug } from "../../lib/mdx"
import { MDXComponents } from "../../components/MDXComponents"
import { MDXRemote } from 'next-mdx-remote'
import { PostMetadata } from "../../components/PostMetada"
import Layout from '../../components/Layout'
import Meta from "../../components/Meta"
import React from "react"
export default function Post({ source, frontmatter }) {
    const width = "100%";
    return (
        <Layout>
            <Meta title={`blog | ${frontmatter.slug}`} />
            <Container maxW="container.2xl" px={[0, 4]}>
                <Flex
                    d="flex"
                    direction={["column", "column", "column", "column", "row"]}
                    mx="auto"
                >
                    <Box
                        as="article"
                        p={[4, 4, 8, 16]}
                        mx={[0, 0, 0, 0, 4]}
                        my={4}
                        borderRadius="lg"
                        width={["100%", "100%", "100%", "100%", width]}
                    >
                        <Heading as="h1" m={8} size="2xl">
                            {frontmatter.title}
                        </Heading>
                        <PostMetadata metadata={frontmatter} />
                        <MDXRemote {...source} components={MDXComponents} />
                    </Box>
                </Flex>
            </Container>
        </Layout >
    )
}


export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug("posts", params.slug);

    return {
        props: {
            source,
            frontmatter
        }
    }
}

export async function getStaticPaths() {
    const posts = await getFiles("posts");
    const paths = posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }