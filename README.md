# MatchIQ — Football Intelligence Dashboard

A static football-first sports website prototype inspired by modern live-score apps, but designed to go deeper with match context, stats, player comparison, tactical notes, and multi-sport expansion later.

## Pages

- `index.html` — homepage with featured match, live match cards, competitions, player spotlight, and smart reads
- `matches.html` — fixture/match centre with league and status filters
- `match.html` — match detail page with score, stats, timeline, lineups, and MatchIQ analysis
- `leagues.html` — league tables and competition overview
- `teams.html` — team profile cards
- `players.html` — player cards and comparison lab

## Data

The project currently uses mock data in:

```text
js/data.js
```

This makes it safe to deploy on GitHub Pages without needing an API key.

## How to run locally

Open `index.html` in your browser.

For best results, use VS Code with the Live Server extension.

## How to deploy on GitHub Pages

1. Upload all files to your repository.
2. In GitHub, go to Settings → Pages.
3. Choose the branch you want to deploy from.
4. Choose `/root` if these files are in the repository root.
5. Choose `/docs` only if you place these files inside a docs folder.

## Next build ideas

- Add real API integration
- Add individual team detail pages
- Add individual player detail pages
- Add radar charts
- Add football news layout
- Add favorites/watchlist
- Add dark/light theme toggle
- Add cricket/basketball architecture after football MVP
