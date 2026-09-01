import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Bursa merkezli Ramazan Şahin Hukuk Bürosu — ceza, aile, ticaret, icra-iflas ve daha birçok alanda güvenilir hukuki danışmanlık ve dava takibi.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Ramazan Şahin Hukuk Bürosu',
  title: 'Ramazan Şahin Hukuk Bürosu',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
