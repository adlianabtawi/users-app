# Users App

En React-app som hämtar användare från ett externt REST-API och visar dem i en lista och på en profilsida. Projektuppgift i kursen React (30 yhp) vid Teknikhögskolan i Lund.

**Live:** _kommer när första releasen är ute på GitHub Pages_

## Teknik

- React + TypeScript (Vite)
- TanStack Query (`useQuery`) för datahämtning och caching
- React Router (`react-router-dom`) för navigering
- GitHub Actions + GitHub Pages för publicering

## Så jobbar vi med grenar

`main` är produktion. Det som ligger där är live och det är det som lämnas in. Ingen commitar direkt till `main` eller `develop`.

```
feature/...  ─┐
fix/...      ─┼──► develop ──(release-PR)──► main ──► GitHub Pages
chore/...    ─┘
```

| Gren | Syfte |
|---|---|
| `main` | Produktion. Uppdateras bara via release-PR från `develop`. |
| `develop` | Integration. Här samlas färdiga features och testas tillsammans. |
| `feature/<namn>` | Ny funktion, till exempel `feature/users-list`. |
| `fix/<namn>` | Buggfix. |
| `chore/<namn>` | Setup, config och verktyg. |
| `docs/<namn>` | Dokumentation. |

En gren gör en sak. Den mergeas till `develop` via pull request och tas sedan bort.

## Kom igång

_Fylls i när projektet är uppsatt med Vite._

## Planering

Sitemap, datamodell, komponentstruktur, cachestrategi och tidsplan finns i [docs/planering.md](docs/planering.md).
