import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { SafeArea } from './components/SafeArea';
import { farcasterConfig } from '../farcaster.config';
import { Providers } from './providers';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: farcasterConfig.miniapp.name,
    description: farcasterConfig.miniapp.description,
    other: {
      'base:app_id': '6a145b6eed0edcf2e9a87709',
      'fc:frame': JSON.stringify({
        version: farcasterConfig.miniapp.version,
        imageUrl: farcasterConfig.miniapp.heroImageUrl,
        button: {
          title: farcasterConfig.miniapp.buttonTitle,
          action: {
            name: 'Launch',
            type: 'launch_frame',
          },
        },
      }),
    },
  };
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
          <head>
      <meta
        name="talentapp:project_verification"
        content="454d7ffe1cf460a8a395cb89bbdcdce87c342016257d5a7fcc1d9f583c1dc55c2fbb71aab8b617eb18a195f954c87bace4c2399093eaba6086dacfd0ad9fab78"
      />
    </head>
      <body className={`${inter.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
        <Providers>
          <SafeArea>{children}</SafeArea>
        </Providers>
      </body>
    </html>
  );
}
