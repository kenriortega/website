import { getFiles, getFilesBySlug } from "../../lib/mdx"
import { MDXRemote } from 'next-mdx-remote'
import React from "react"
import Layout from '../../components/Layout'
import Meta from "../../components/Meta"
import { MDXComponents } from "../../components/MDXComponents"
import { Box, Container, Flex, Heading, } from "../../components/elements"
import { PostMetadata } from "../../components/PostMetada"
export default function Post({ source, frontMatter }) {
    const width = "100%";
    return (
        <Layout>
            <Meta title={`blog | ${frontMatter.slug}`} />
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
                            {frontMatter.title}
                        </Heading>
                        <PostMetadata metadata={frontMatter} />
                        <MDXRemote {...source} components={MDXComponents} />
                    </Box>
                </Flex>
            </Container>
        </Layout >
    )
}


export async function getStaticProps({ params }) {
    const { source, frontMatter } = await getFilesBySlug(params.slug)

    return {
        props: {
            source,
            frontMatter
        }
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map(post => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}