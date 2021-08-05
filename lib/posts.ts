import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getAllPosts() {
  const query = gql`
    {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        createdAt
        content
        category
        cover {
          url
        }
        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
  `;
  interface TData {
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
    };
  }
  const { posts } = await graphcms.request<TData>(query);
  return posts;
}

export async function getAllPostSlugs() {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  const { posts } = await graphcms.request(query);
  return posts;
}

export async function getPost(slug: string) {
  const query = gql`
    query postByID($slug: String!) {
      post(where: { slug: $slug }) {
        slug
        title
        createdAt
        content
        category
        cover {
          url
        }
        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
  `;
  interface TData {
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
  }
  const { post } = await graphcms.request<TData>(query, {
    slug: slug,
  });

  return post;
}
