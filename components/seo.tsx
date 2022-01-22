import { NextSeo } from 'next-seo';

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
    <NextSeo
      titleTemplate='%s| My blog'
      title={props.title}
      defaultTitle='My blog'
      description={props.description}
      canonical={url}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        }
      ]}
      openGraph={{
        url: url,
        title: "My blog",
        description: "Informative articles about web development. Find tutorials that will boost your next web development project.",
        site_name: 'My Blog',
      }}
      twitter={{
        handle: '@yenniferha',
        site: '@yenniferha',
        cardType: 'summary_large_image',
      }}
    />
  )
}