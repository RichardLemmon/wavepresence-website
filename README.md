# wavepresence-website

The marketing landing page and Apple App Site Association host for [wavepresence.com](https://wavepresence.com).

This repo serves three purposes:

1. **Marketing landing page** at `/` — placeholder for now, real design later.
2. **Apple App Site Association** at `/.well-known/apple-app-site-association` — tells iOS that the `/pair*` URL pattern is an App Clip, so iPhone Camera scans of the in-app pairing QR code surface the App Clip card directly.
3. **`/pair` fallback page** for visitors whose entry path didn't trigger the AASA flow (Messages-shared link, Android, desktop). Contains inline JavaScript that attempts an `appclip.apple.com` deep-link on iOS.

## ⚠️ Known blocker: no App Clip target exists yet (Path B)

The AASA file declares a handler for bundle ID `MZ9RT5S9R5.com.wavepresence.app.Clip`, but as of 2026-04-08 **no such App Clip target exists in the iOS project** (`wavepresence-app`), and the declared bundle ID also violates Apple's rule that App Clip bundle IDs must be prefixed by the parent app's bundle ID (`com.wavepresence.wavepresence`). Scanning the in-app QR code currently returns "this app clip is not currently available in your country or region."

The website infrastructure is correct and production-ready. The missing piece is upstream native iOS work (build the App Clip Swift target, fix the bundle ID, submit to App Store Connect). See [issue #1](https://github.com/RichardLemmon/wavepresence-website/issues/1) and the handoff doc at `wavepresence-api/docs/superpowers/handoffs/2026-04-08-app-clip-path-b-handoff.md`.

When the App Clip is built, two files will need updating:
- `.well-known/apple-app-site-association` in this repo
- `src/index.js:48` in `wavepresence-api` (the backup AASA route)

## Local preview

Pure static — no build step. Serve the directory with any HTTP server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Visit <http://localhost:8000/pair?person_id=test&profile_id=test&name=Topper> to test the fallback page.

## Deploy

Hosted on Cloudflare Pages. Pushes to `main` auto-deploy production. PRs auto-deploy to a `*.pages.dev` preview URL.

## Editing the AASA file — STOP AND READ THIS

`.well-known/apple-app-site-association` is the file that decides whether the iOS App Clip launches when someone scans the pairing QR code. Breaking it silently breaks every family's onboarding.

**Before editing it:**

- The CI workflow validates the JSON parses and that the Team ID prefix is correct.
- After deploying any change to AASA, manually verify the App Clip still launches by scanning a real pairing QR code with a real iPhone Camera. The curl checks are necessary but not sufficient — Apple has subtle validation rules that can pass HTTP checks and still fail App Clip association.
- Apple caches AASA via their CDN (`https://app-site-association.cdn-apple.com/a/v1/wavepresence.com`). Changes can take up to 24 hours to fully propagate.

If you're not sure, ask before editing.
