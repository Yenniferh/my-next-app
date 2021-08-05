import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import Card from '../components/card';
import Seo from '../components/seo';
import { getAllPosts } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({
  posts,
}: {
  posts: {
    id: string;
    slug: string;
    title: string;
    createdAt: string;
    content: string;
    category: string;
    cover: {
      url: string;
    };
    seo: {
      title: string;
      description: string;
      image: {
        url: string;
      };
    };
  }[];
}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Seo title="Home" description="Find interesting articles related to web development" slug="" isArticle={false} imageUrl="/favicon.ico" />

      <main className='flex flex-col w-full flex-1 px-4 md:px-20'>
        <h1 className='text-5xl font-semibold text-gray-800 my-6'>
          Personal Blog
        </h1>
        <hr />
        <section className='flex flex-col sm:flex-row sm:flex-wrap mb-2 mt-4'>
          {posts.map(({ id, slug, title, cover, seo }) => (
            <Link href={`/posts/${slug}`} key={id}>
              <a>
                <Card
                  imgUrl={cover.url}
                  title={title}
                  description={seo.description}
                />
              </a>
            </Link>
          ))}
        </section>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
}
