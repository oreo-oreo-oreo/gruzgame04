# Gruz Game 04

Base App mini app scaffold (Next.js + wagmi + Farcaster Mini App SDK).

Based on the [Build an app on Base](https://docs.base.org/apps/quickstart/build-app) guide and the shared structure from `gruzgame03`, without game-specific logic or deployed contract addresses.

## Stack

- Next.js App Router
- wagmi + viem (`base` mainnet)
- `@base-org/account` connector
- Farcaster Mini App SDK + Quick Auth

## Environment

Copy `.example.env` to `.env.local`:

```bash
# optional — only for localhost override
NEXT_PUBLIC_URL=http://localhost:3000
```

**Vercel:** no manual env required (same as gruzgame02 / gamegruz1).

- Site URL: auto from `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` via `lib/siteUrl.ts`
- Contract address: hardcoded in `lib/contracts/gruzgame04Onchain.ts`

**Deployed contract (Base Mainnet):** [0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9](https://basescan.org/address/0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9)

**Builder Code:** `bc_w6mg1cwt` — appended to every `tap` / `checkIn` tx calldata for [base.dev](https://base.dev) attribution.

Suffix (ERC-8021): `0x62635f77366d67316377740b0080218021802180218021802180218021`

## Run

```bash
npm install
npm run dev
```wge

## Next steps

1. Update `farcaster.config.ts` (name, assets, account association).
2. Add `public/` icons, splash, hero images for publishing.
3. Add contract ABI/address under `lib/contracts/` when ready.
4. Replace `app/page.tsx` with your game UI and onchain flows.

## Verified commits (oreo-oreo-oreo)

SSH signing key: `~/.ssh/id_ed25519_oreo_oreo_oreo_signing`

After adding the public key to GitHub (Signing keys), enable signing in this repo:

```bash
git config user.email "oreoblack666@gmail.com"
git config user.name "oreo-oreo-oreo"
git config gpg.format ssh
git config user.signingkey ~/.ssh/id_ed25519_oreo_oreo_oreo_signing.pub
git config commit.gpgsign true
```
