# Agent instructions for antiokh.ru

These instructions apply to the entire repository.

## Mission

Maintain a credible, personal, bilingual website for Anton Vladislavovich Nazarov (`Antiokh`). The site should read as a human career story supported by evidence—not as a generic AI-generated portfolio, an agency homepage, or a keyword-stuffed CV.

## Required source routing

Before changing factual content, consult the appropriate sibling repository.

### Personal biography, career, evidence, and portfolio

Canonical repository: `Antiokh/CV`

- Remote: `https://github.com/Antiokh/CV`
- Expected local path from this checkout: `..`
- Start with:
  - `../README.md`
  - `../RESUME.md`
  - `../data/anton_nazarov_profile.json`
  - `../data/anton_nazarov_recommendations.json`
  - `../portfolio/README.md`
  - the relevant `../portfolio/<project>/README.md`

Use this source for names, dates, employers, roles, metrics, education, languages, recommendations, project facts, screenshots, and career storytelling.

### NeedleBit, agency positioning, and marketing context

Canonical repository: `Antiokh/needlebit-marketing`

- Expected local path from this checkout: `../../needlebit-marketing`
- Use it for current agency positioning, services, audience language, editorial voice, and project narratives used in NeedleBit communications.
- Cross-check public claims against `https://needlebit.ru` and `https://needlebit.dev` when current website wording matters.

### Conflict rule

- `Antiokh/CV` wins for verifiable facts about Anton and project evidence.
- `needlebit-marketing` wins for current NeedleBit framing and marketing language.
- Never transfer private, internal, speculative, or unapproved information into this public website.
- Do not invent dates, metrics, clients, testimonials, roles, or technologies.
- If a claim cannot be supported, omit it or mark it for review.

## Identity requirements

Always use the full Russian name `Антон Владиславович Назаров` where disambiguation matters. English transliteration: `Anton Vladislavovich Nazarov`.

Reliable identifiers:

- handle: `Antiokh`
- location: Belgrade, Serbia
- profession: IT manager and systems architect
- company: NeedleBit
- GitHub: `https://github.com/Antiokh`
- LinkedIn: `https://www.linkedin.com/in/nazarovanton/`

Anton has an exact namesake, Mortimer, associated with “Осознанная меркантильность”. State that they are different people without attacking, diagnosing, or editorializing about the namesake.

## Content model

The primary experience is a one-page story in this order:

1. personal introduction;
2. career story;
3. timeline and proof metrics;
4. portfolio and detailed cases;
5. client recommendations;
6. current NeedleBit chapter and links;
7. hobbies and personal context;
8. identity clarification and contact.

Do not turn the homepage into a tool list. Technology supports the story; it is not the story.

## Astro conventions

- Reusable homepage sections live in `src/components/blocks/`.
- `src/components/HomePage.astro` only composes blocks.
- Localized content lives in `src/data/home.ts`.
- Route files in `src/pages/` should stay thin.
- Shared metadata, navigation, Schema.org, and language alternates belong in `src/layouts/BaseLayout.astro`.
- Maintain equivalent Russian and English information architecture.
- Prefer semantic HTML and static rendering.
- Preserve `hreflang`, canonical URLs, sitemap generation, `robots.txt`, and LLM-readable files.
- Use real project media from `Antiokh/CV`; do not fabricate screenshots.
- Do not generate or retouch Anton's portrait. Use only a user-provided photograph.

## Public-data safety

The source repositories contain material that may be inappropriate for a public website. Before publishing any datum, check that it is already public or clearly approved for public use.

Never publish:

- API tokens, cookies, session files, or environment variables;
- private client names or internal repository paths;
- phone numbers, tax IDs, permit identifiers, or registration documents unless explicitly requested;
- confidential project implementation details;
- unverified psychological or assessment conclusions;
- drafts presented as final client statements.

## Quality checks

For every change:

1. run `npm run build`;
2. require zero Astro errors and warnings;
3. check both `/` and `/en/` when shared blocks or data change;
4. confirm section anchors and language switching;
5. preserve mobile behavior;
6. verify external links when they change.

## Mandatory publish workflow

The user requires every completed update to be pushed.

1. Inspect `git status` and the diff.
2. Commit only the intended site changes.
3. Push the commit to `origin/main`.
4. Deploy the built `dist/` directory to Cloudflare Pages project `antiokh`.
5. Verify production returns HTTP 200 and contains the changed content.
6. Report the commit hash and deployment URL.

Do not leave finished changes only in the local working tree or only in Cloudflare.
