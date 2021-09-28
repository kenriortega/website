import { getFiles, getFilesBySlug } from "../../lib/mdx"
import { MDXRemote } from 'next-mdx-remote'
export default function Post({ source, frontMatter }) {
    return <MDXRemote {...source} />
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