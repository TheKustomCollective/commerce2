# AI Coding Agent Instructions for `commerce2`

## Project Architecture

**CommerceCult** - AI-powered business intelligence SaaS platform deployed at `commercecult.app`

### Repository Structure
```
commerce2/
├── CommerceCult_app_v2-1/frontend/    # Main Next.js 14 app (TypeScript + Tailwind)
├── bot/                                # Autonomous marketing bot (Node.js)
├── LivingLegacy/                       # Sub-brand media kit
└── vercel.json                         # Root deployment config
```

**Critical**: All development happens in `CommerceCult_app_v2-1/frontend/` - there is NO top-level package.json.

### Tech Stack
- **Frontend**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- **Deployment**: Vercel (configured via root `vercel.json`)
- **Authentication**: In-memory user store (`lib/auth.ts`) - OAuth ready but using Map-based storage
- **API Routes**: Next.js Route Handlers in `app/api/*/route.ts`
- **AI Integration**: OpenAI GPT-4o-mini for business plan generation
- **State Management**: React hooks, no external state library

## Developer Workflows

### Local Development
```bash
cd CommerceCult_app_v2-1/frontend
npm install              # First time setup
npm run dev             # Start dev server on :3000
npm run build           # Production build
npm run lint            # TypeScript/ESLint checks
```

**Important**: Always run commands from `CommerceCult_app_v2-1/frontend/`, not repo root.

### Deployment
- **Auto-deploy**: Push to `main` triggers Vercel build
- **Build config**: Root `vercel.json` specifies build command, output directory, and ignore rules
- **Build command**: `cd CommerceCult_app_v2-1/frontend && npm run build`
- **Output**: `CommerceCult_app_v2-1/frontend/.next`
- **Ignore**: Builds only if frontend files changed (see `ignoreCommand` in vercel.json)

### Environment Variables (Required for Production)
See `OAUTH-SETUP.md` for detailed setup. Required variables:
- `OPENAI_API_KEY` - AI business plan generation
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` - OAuth
- `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` - AdSense integration
- `NEXT_PUBLIC_URL` - OAuth callback URL (https://commercecult.app)

**Note**: OAuth routes have graceful fallback if credentials not configured. See `app/api/auth/google/route.ts` lines 12-18.

## Project-Specific Patterns

### Authentication Architecture
- **Storage**: In-memory Map (`lib/auth.ts` line 14) - NOT persistent across deployments
- **User model**: email, password (base64 encoded), name, company, plan, provider
- **OAuth protection**: Users who sign up via OAuth CANNOT log in with password (see `app/api/login/route.ts` line 37)
- **Demo account**: `demo@commercecult.app` / `demo1234` always available
- **Session**: JWT-like pattern but simplified (see auth.ts for implementation)

**Critical for auth changes**: Update `User` interface in `lib/auth.ts` AND all signup/OAuth routes.

### Next.js App Router Conventions
- **Client components**: MUST include `'use client'` directive (see all pages in `app/`)
- **API routes**: Use `route.ts` files, export `GET`/`POST` functions returning `NextResponse`
- **Layout hierarchy**: Root `layout.tsx` wraps all pages with Navigation, Footer, RaphaelAssistant, LiveChat
- **Metadata**: Server components can export `metadata` object for SEO

### Component Patterns
1. **Global layout components** (always rendered):
   - `Navigation` - Top nav bar
   - `Footer` - Site footer
   - `RaphaelAssistant` - Chatbot widget (auto-opens on first visit)
   - `LiveChat` - Support chat widget

2. **AdSense integration**: `GoogleAd` component takes slot/format props, renders programmatic ads

3. **State management**: All pages use `useState` for local state, no Redux/Context API

### API Route Structure
Example pattern from `app/api/generate-plan/route.ts`:
```typescript
export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // Check for required env vars
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json(fallbackTemplate, { status: 200 })
  }
  
  // Make external API call
  const response = await fetch('https://api.openai.com/v1/...')
  
  return NextResponse.json(result)
}
```

**Pattern**: Graceful degradation when API keys missing (return template data, never throw errors).

### Marketing Bot (`bot/` directory)
- **Purpose**: Autonomous social media posting, content curation
- **Tech**: Node.js with twitter-api-v2, axios, dotenv
- **Scripts**: `npm run post`, `npm run curate`
- **Config**: `config/posting-schedule.json` defines campaign timing
- **Persona**: "Omni" - AI marketing intelligence bot (see `agents.md`)

**Integration**: Bot is separate from main app, runs via scheduled tasks (future GitHub Actions).

## Common Tasks

### Adding a New Page
1. Create `app/[pagename]/page.tsx` with `'use client'` directive
2. Add navigation link in `app/components/Navigation.tsx`
3. Use Tailwind for styling (globals.css imported in layout)

### Adding an API Endpoint
1. Create `app/api/[endpoint]/route.ts`
2. Export async `POST` or `GET` function
3. Return `NextResponse.json()` with data
4. Handle missing env vars gracefully (return fallback, don't crash)

### Modifying Authentication
1. Update `User` interface in `lib/auth.ts` FIRST
2. Update all signup routes: `app/api/signup/route.ts`, `app/api/auth/google/callback/route.ts`
3. Update demo user initialization (auth.ts line 26)
4. Test OAuth flow AND password login

### TypeScript Errors
- **"Cannot find module 'react'"**: Dependencies not installed, run `npm install` in frontend directory
- Always run `npm run build` to catch type errors before pushing

## Key Files Reference

| File | Purpose |
|------|---------|
| `vercel.json` | Deployment config (build commands, output dir) |
| `app/layout.tsx` | Root layout, global components, AdSense script |
| `lib/auth.ts` | User storage, password hashing, demo account |
| `app/api/generate-plan/route.ts` | AI business plan generation (275 lines) |
| `app/components/RaphaelAssistant.tsx` | Chatbot widget (268 lines) |
| `OAUTH-SETUP.md` | Environment variable setup guide |
| `DEPLOYMENT.md` | Vercel deployment instructions |
| `SITE-COMPLETION-ROADMAP.md` | Feature status and TODOs |

## Known Quirks

1. **No backend**: API routes ARE the backend. No separate Express/Node server.
2. **No database**: User storage is in-memory Map (resets on deploy). Future: migrate to Supabase/MongoDB.
3. **OAuth accounts can't use password login**: Intentional security feature (see login route.ts line 37-42).
4. **Malformed JSON note removed**: `package.json` is valid, previous instructions were outdated.
5. **Components always mount**: RaphaelAssistant, LiveChat mount on every page (see layout.tsx).

## Before Making Changes

1. Run `npm run build` in frontend directory to verify TypeScript types
2. Check `SITE-COMPLETION-ROADMAP.md` for current feature status
3. If modifying auth: test both OAuth AND password login flows
4. If adding env vars: update `OAUTH-SETUP.md` documentation
5. If changing API routes: check for graceful fallback patterns

---

**Questions?** Check documentation files in repo root (OAUTH-SETUP.md, DEPLOYMENT.md, SETUP-INSTRUCTIONS.md) or ask the team.