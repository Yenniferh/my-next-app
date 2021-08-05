import Head from 'next/head';

// TODO: implement SEO component
export default function Seo(
  props: {
    title: string
    description: string
    imageUrl: string
    slug: string
    isArticle: boolean
  }){
  const url = process.env.PAGE_URL_ENDPOINT as string;
  const location = `${url}/${props.slug}`
  return (
    <Head>
      <title>{props.title} | My blog</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="description" content={props.description} />
      <meta name="image" content={props.imageUrl} />

      {location && <meta property="og:url" content={location} />}

      {(props.isArticle ? true : null) && (
        <meta property="og:type" content="article" />
      )}

      {props.title && <meta property="og:title" content={props.title} />}

      {props.description && (
        <meta property="og:description" content={props.description} />
      )}

      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content="@yenniferha" />

      {props.title && <meta name="twitter:title" content={props.title} />}

      {props.description && (
        <meta name="twitter:description" content={props.description} />
      )}

      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}
    </Head>
  )
}