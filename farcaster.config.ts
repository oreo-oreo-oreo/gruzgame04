const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  accountAssociation: {
    header: '',
    payload: '',
    signature: '',
  },
  miniapp: {
    version: '1',
    name: 'Gruz Game 04',
    subtitle: 'Base Mini App',
    description: 'Base App mini app scaffold. Replace metadata and assets before publishing.',
    imageUrl: `${ROOT_URL}/sphere.svg`,
    buttonTitle: 'Open App',
    screenshotUrls: [`${ROOT_URL}/sphere.svg`],
    iconUrl: `${ROOT_URL}/sphere.svg`,
    splashImageUrl: `${ROOT_URL}/sphere.svg`,
    splashBackgroundColor: '#000000',
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: 'games',
    tags: ['base', 'miniapp', 'game'],
    heroImageUrl: `${ROOT_URL}/sphere.svg`,
    tagline: 'Build your onchain game on Base.',
    ogTitle: 'Gruz Game 04',
    ogDescription: 'Base App mini app scaffold.',
    ogImageUrl: `${ROOT_URL}/sphere.svg`,
    castShareUrl: ROOT_URL,
  },
} as const;
