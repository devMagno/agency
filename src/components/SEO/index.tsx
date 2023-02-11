import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  shouldExcludeTitlePreffix?: boolean
}

export function SEO({
  title,
  description,
  image,
  url,
  shouldExcludeTitlePreffix,
}: SEOProps) {
  return (
    <Head>
      <title>{shouldExcludeTitlePreffix ? title : `Agency - ${title}`}</title>
      <meta
        name="title"
        content={shouldExcludeTitlePreffix ? title : `Agency - ${title}`}
      />
      {description && <meta name="description" content={description} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={`${url}${image}`} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {image && <meta property="twitter:image" content={`${url}${image}`} />}
    </Head>
  )
}
