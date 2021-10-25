

import { Box, Container, Flex, Heading,Text } from "../components/elements"
import { formatDate } from "../lib/format-date";
import { getAllFilesFrontMatter } from '../lib/mdx'
import { PostListItem, } from '../components/PostListItem'
import { ScrollToTop, } from '../components/ScrollToTop'
import { usePagination } from "../lib/use-pagination";
import Layout from '../components/Layout'
import Link from 'next/link'
import Meta from "../components/Meta"
import React, { useEffect, useRef, useState } from 'react'
export default function Home({ posts }) {
  const { next, currentPage, currentData, maxPage } = usePagination(posts, 10);
  const [element, setElement] = useState(null);
  const observer = useRef();
  const prevY = useRef(0);

  const currentPosts = currentData();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, []);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
  const width = "100%";

  return (
    <Layout>
      <Meta title="Kenriortega | blog" />
      <Container maxW="container.1sm" px={[0, 4]}>
        <Heading as="h2" m={8} size="md">
          Hola 👋 soy Enrique Ortega conocido por @kenriortega y este es mi blog!!

        </Heading>
        <Text m={8} size="md">
          Estará enfocado el blog a compartir pruebas de conceptos basadas en los siguientes temas golang y nodejs. El uso de estos con sistemas de bases de datos como redis, postgresql y brokers de mensajerias como apache kafka. Otras tecnologías que me resultan interesantes como es el Rusty tecnologías emergentes dentro de la web3.0
        </Text>
        <ScrollToTop />
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
              Últimos Artículos
            </Heading>
            {currentPosts &&
              currentPosts.map((post) => (
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
            {currentPage !== maxPage && (
              <Text fontSize="xl" fontWeight="bold" p={6} ref={setElement}>
                Cargando...
              </Text>
            )}
          </Box>
        </Flex>
      </Container>
    </Layout>

  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts')
  return {
    props: {
      posts
    }
  }
}
