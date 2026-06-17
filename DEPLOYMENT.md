# Deployment Notes

## Vercel Settings

- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave as Vercel default
- Node.js version: 20.x or newer

Next.js 16 requires Node.js `>=20.9.0`.

## Environment Variables

Add these variables in Vercel for Production, Preview, and Development:

```text
NEXT_PUBLIC_SUPABASE_URL=https://awsywnazalysifrbnqvi.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_d3jOJKS3b760oR6XfOHBaw_xeZOQoCA
```

These are publishable Supabase values. Do not add a Supabase service role key to this app unless a server-only workflow is introduced later.

## Supabase

The remote Supabase project is already linked locally:

```text
awsywnazalysifrbnqvi
```

The required `lead_submissions` table and row-level-security policies have already been pushed through Supabase migrations. The public form path writes through `POST /api/lead-submissions` and stores the complete form payload in `lead_submissions.payload`.

Before deploying, this check should pass:

```bash
supabase db advisors --linked
```

## Preflight

Run these before a production deploy:

```bash
npm run lint
npm run build
```

## Vercel CLI Option

If deploying from the local machine:

```bash
npx vercel
npx vercel --prod
```

If using Git integration, push the branch/repo and let Vercel build from Git.

## Troubleshooting

If Vercel reports `npm error Invalid Version:` during dependency install, make
sure the project is using the committed `vercel.json` settings. The deployment
should install with `npm ci`, not `npm install`, so Vercel uses the checked-in
lockfile exactly.
