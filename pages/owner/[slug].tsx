import { Box, Container, Flex, Heading, } from "../../components/elements"
import { getFiles, getFileBySlug } from "../../lib/mdx"
import { MDXComponents } from "../../components/MDXComponents"
import { MDXRemote } from 'next-mdx-remote'
import Layout from '../../components/Layout'
import Meta from "../../components/Meta"


export default function Page({ source, frontmatter }) {
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
                        bg="white"
                        p={[4, 4, 8, 16]}
                        mx={[0, 0, 0, 0, 4]}
                        my={4}
                        borderRadius="lg"
                        width={["100%", "100%", "100%", "100%", width]}
                    >
                        <Heading as="h1" m={8} size="2xl">
                            {frontmatter.title}
                        </Heading>
                        <MDXRemote {...source} components={MDXComponents} />
                    </Box>
                </Flex>
            </Container>
        </Layout >
    )
  
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
  const paths = pages.map((page) => ({
    params: {
      slug: page.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("pages", params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}
