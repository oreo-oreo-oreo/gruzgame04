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
NEXT_PUBLIC_URL=http://localhost:3000
BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_GRUZGAME04_CONTRACT_ADDRESS=0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9
```

**Deployed contract (Base Mainnet):** [0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9](https://basescan.org/address/0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9)

**Builder Code:** `bc_k6hoeukp` — appended to every `tap` / `checkIn` tx calldata for [base.dev](https://base.dev) attribution (works from website + Base App).

## Run

```bash
npm install
npm run dev
```

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
