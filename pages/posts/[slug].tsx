import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostSlugs, getPost } from '../../lib/posts';
import Date from '../../components/date';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  interface PostPaths {
    slug: string;
  }
  const posts = (await getAllPostSlugs()) as Array<PostPaths>;

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export default function Post({
  post,
}: {
  post: {
    id: string;
    slug: string;
    title: string;
    createdAt: string;
    content: string;
    category: string[];
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
  };
}) {
  return (
    <>
      <Head>
        <title>{post.title} | Personal Blog</title>
      </Head>
      <article>
        <img
          src={post.cover.url}
          alt={post.title}
          className='h-72 w-full object-cover'
        />
        <div className='my-8 mx-4 md:mx-40'>
          <h1 className='text-3xl md:text-5xl my-2 md:my-4 font-semibold text-blue-600 tracking-tight md:leading-loose'>
            {post.title}
          </h1>
          <Date dateString={post.createdAt} />

          <div className='my-4 prose prose-lg'>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <small className='text-sm text-gray-900 font-medium'>
            Tags:
            {post.category.map((category) => (
              <span className='text-sm text-gray-500 font-light leading-tight mx-1'>
                {category}
              </span>
            ))}
          </small>
        </div>
      </article>
    </>
  );
}
