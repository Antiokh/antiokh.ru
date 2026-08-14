# antiokh.ru

Personal website of Anton Vladislavovich Nazarov (`Antiokh`): IT manager, systems architect, Head of IT / CTO, and founder of NeedleBit.

The site is a bilingual, static Astro website deployed to Cloudflare Pages:

- Production: <https://antiokh.pages.dev>
- Intended custom domain: <https://antiokh.ru>
- Repository: <https://github.com/Antiokh/antiokh.ru>

## Purpose

The homepage is a personal one-page narrative, not an agency landing page or a conventional CV. Its reading order is intentional:

1. Who Anton is
2. Career story and track record
3. Portfolio and selected cases
4. Client evidence
5. Anton's current role leading NeedleBit
6. Personal interests and identity clarification
7. Contact

The site must clearly distinguish Anton Nazarov (`Antiokh`, IT manager in Belgrade, founder of NeedleBit) from his exact namesake Mortimer, associated with “Осознанная меркантильность”.

## Canonical source repositories

This repository is the presentation layer. Do not invent or silently update biography, employment, outcomes, testimonials, or agency claims here without checking their canonical source.

### Antiokh/CV — personal facts and evidence

- GitHub: <https://github.com/Antiokh/CV>
- Typical local sibling checkout: `../`
- Use for:
  - identity and contact details
  - career history and dates
  - roles, responsibilities, and measurable outcomes
  - education, languages, and work authorization
  - client recommendations and evidence
  - portfolio case studies, screenshots, and project media
  - personal positioning and long-form career story

Useful entry points in `Antiokh/CV`:

- `README.md` — public positioning overview
- `RESUME.md` — concise verified resume
- `data/anton_nazarov_profile.json` — structured canonical profile
- `data/anton_nazarov_recommendations.json` — testimonials and provenance
- `data/public_summary.md` — short public biography
- `portfolio/README.md` — project index
- `portfolio/<project>/README.md` — canonical case study
- `GPT/_notebooklm_import/01C_CAREER_STORY_CURATED.txt` — career narrative

### needlebit-marketing — agency and project marketing context

- Repository: `Antiokh/needlebit-marketing`
- Typical local sibling checkout: `../../needlebit-marketing`
- Use for:
  - current NeedleBit positioning and messaging
  - service descriptions and target audiences
  - agency voice and editorial rules
  - current project narratives used in agency communication
  - campaign context, published content, and marketing terminology

NeedleBit's public websites are:

- Russian: <https://needlebit.ru>
- English: <https://needlebit.dev>

When the repositories disagree, use `Antiokh/CV` for facts about Anton and factual project evidence. Use `needlebit-marketing` for current agency framing, tone, and commercial presentation. Never let marketing copy override verified dates, roles, metrics, or project provenance.

## Architecture

```text
src/
├── components/
│   ├── HomePage.astro
│   └── blocks/
│       ├── HeroBlock.astro
│       ├── StoryBlock.astro
│       ├── PortfolioBlock.astro
│       ├── NeedleBitBlock.astro
│       └── PersonalBlock.astro
├── data/
│   └── home.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── projects.astro
│   └── en/
└── styles/
```

`src/data/home.ts` contains localized homepage content. Astro components contain presentation and semantic structure. Keep Russian and English versions structurally equivalent.

## Development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

The build must finish with zero Astro errors and warnings.

## Deployment

Cloudflare Pages project: `antiokh`

```bash
npm run build
npx wrangler pages deploy dist --project-name antiokh --branch main
```

Cloudflare credentials must come from the local environment. Never commit API tokens, account secrets, `.env` files, or Wrangler authentication state.

## Publishing rule

Every completed website update must be:

1. validated with `npm run build`;
2. committed intentionally;
3. pushed to `main` in `Antiokh/antiokh.ru`;
4. deployed to Cloudflare Pages;
5. reported with the commit hash and deployment URL.

See [AGENTS.md](./AGENTS.md) for the agent-specific operating contract.
