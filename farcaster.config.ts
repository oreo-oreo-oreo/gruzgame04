import { getSiteUrl } from "./lib/siteUrl";

const ROOT_URL = getSiteUrl();

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
    name: 'Pirate Cannon Tap',
    subtitle: 'Pirate Tap Game',
    description: 'Tap the cannon, perform onchain check-ins every 2 minutes, and climb the pirate leaderboard on Base.',
    imageUrl: `${ROOT_URL}/sphere.svg`,
    buttonTitle: 'Fire the Cannon',
    screenshotUrls: [`${ROOT_URL}/sphere.svg`],
    iconUrl: `${ROOT_URL}/sphere.svg`,
    splashImageUrl: `${ROOT_URL}/sphere.svg`,
    splashBackgroundColor: '#0b1f3a',
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: 'games',
    tags: ['game', 'tap', 'pirate', 'leaderboard', 'onchain', 'base'],
    heroImageUrl: `${ROOT_URL}/sphere.svg`,
    tagline: 'Tap. Check in. Rule the seas.',
    ogTitle: 'Pirate Cannon Tap',
    ogDescription: 'Pirate tap game for Base App.',
    ogImageUrl: `${ROOT_URL}/sphere.svg`,
    castShareUrl: ROOT_URL,
  },
} as const;
