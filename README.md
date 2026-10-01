# Treasure’s little corner of the internet

A personal portfolio for Ehiomhen Treasure, Product & Platform Engineer. Pale pink and black, a cursor-following portrait, and a watercolor beach footer.

## Preview

With Node.js installed, run:

```sh
node server.mjs
```

Open **http://localhost:3000**. No dependency install or build is needed to run the site. You can also open `public/index.html` directly.

## Edit

- `public/index.html` — biography, projects, experience, education, skills, articles, talks, and links. Copy an existing card or skill pill to add another entry.
- `public/styles.css` — layout, typography, and colors. The variables at the top define both themes.
- `public/app.js` — saved theme preference and cursor interaction.
- `public/intro.js` and `public/intro.css` — pale-pink welcome screen with a letter-by-letter serif reveal. Plays once per tab session, has a skip button and Escape shortcut, and is omitted for reduced-motion visitors and direct section links. A new tab/session replays it; clear `treasure-welcomed` in session storage to replay during development.
- `public/beyond.html` — leadership, volunteering/community, and seven certifications from the supplied screenshots. Certification links open the LinkedIn certifications section.
- `public/beyond.css` — styling for the Beyond the classroom page.
- `public/assets/` — local fonts, illustrations, and downloadable résumé.

The portrait has nine views in a 3×3 sprite sheet. Pointer position selects the gaze direction. Touch screens and reduced-motion preferences use the neutral portrait. The theme follows the device preference until the visitor chooses a mode.

## Browser checks

```sh
npm install
npm test
```

The tests use locally installed Google Chrome. Set `BROWSER_CHANNEL=msedge` to use Edge. They cover theme persistence, head direction, reduced motion, mobile overflow, experience expansion, local assets, and the résumé link. Screenshots are saved to `.artifacts/`.

## Publish

Deploy the **public** directory to a static website host. There is no build command and no server-side dependency. `server.mjs` is only a local preview server.

## Content and artwork

Project and experience descriptions come from the supplied résumé and experience screenshot. The third selected project is the AWS serverless Customer Complaint System. Education is included on the page; the downloadable original résumé is unchanged. The talk links to the supplied Instagram post without assuming an event date. Its card is custom typography rather than a copy of the event poster.

Illustrations were made with the built-in image generation tool; see `ARTWORK.md` for prompts. Fonts are self-hosted under the SIL Open Font License, included alongside each font. There are no analytics or API keys.
