# Users App

En React-app som hämtar användare från ett externt REST-API och visar dem i en lista och på en profilsida. Individuell projektuppgift i kursen React (30 yhp) vid Teknikhögskolan i Lund.

**Live:** https://adlianabtawi.github.io/users-app/

## Funktioner

- Lista med alla användare som kort: namn, användarnamn, stad och roll
- Profilsida för varje användare med kontaktuppgifter och inställningar
- Tydliga lägen för laddning, fel (med knappen "Försök igen"), tom lista och användare som inte finns
- Egen 404-sida

## Teknik och val

| Val | Varför |
|---|---|
| React + TypeScript + Vite | Kursens verktyg. TypeScript fångar fel innan koden körs och gör API-datans form tydlig. |
| TanStack Query (`useQuery`) | Sköter laddning, fel och cache, så att appen inte hämtar samma data flera gånger. |
| React Router (`react-router-dom`) | Varje sida får en egen adress som går att länka till. |
| Vanlig CSS i en fil | Appen är liten. En kommenterad fil räcker, utan extra paket. |
| GitHub Actions + GitHub Pages | Varje merge till `main` bygger och publicerar appen automatiskt. |

## Så hålls API-anropen nere

API:t tillåter högst 100 anrop per dag. Appen gör ett anrop och återanvänder svaret.

- Hela appen har en enda query med nyckeln `["users"]`.
- Profilsidan hämtar inget själv. Den läser samma cache och plockar ut rätt användare med `select`.
- `staleTime` är en timme, så datan hämtas inte om när man byter sida.
- `refetchOnWindowFocus` och `refetchOnReconnect` är avstängda, så ett flikbyte ger inget nytt anrop.
- `retry` är 1, så ett misslyckat anrop blir högst två.

Inställningarna ligger i `src/main.tsx`.

## Struktur

    src/
    ├── api/users.ts          getUsers: anropet mot API:t
    ├── types/user.ts         typer för API-datan
    ├── hooks/useUsers.ts     useUsers och useUser (useQuery)
    ├── components/           Navbar, UserCard, RoleList, RoleBadge, StatusMessage
    ├── pages/                HomePage, UsersPage, UserDetailPage, NotFoundPage
    ├── App.tsx               routes
    ├── main.tsx              QueryClient och start
    └── index.css             styling

Ansvaret är uppdelat så här: `api/` pratar med servern, `hooks/` sköter cachen, `pages/` hämtar data och `components/` visar det som skickas in via typade props.

## Kom igång

Kräver Node 20.19 eller senare.

    git clone https://github.com/adlianabtawi/users-app.git
    cd users-app
    npm install
    cp .env.example .env

Fyll i API-nyckeln i `.env` och starta sedan:

    npm run dev

Appen öppnas på `http://localhost:5173/users-app/`.

## API-nyckeln

Nyckeln ligger i `.env`, som inte följer med till GitHub. Vid publicering hämtas den från en secret i GitHub Actions. Det håller nyckeln borta från repot, men den går ändå att läsa i den byggda JavaScript-koden. En nyckel som måste vara hemlig kräver en egen backend.

## Grenar

`main` är produktion och det som är live. `develop` samlar färdigt arbete. Varje uppgift görs i en egen gren (`feature/`, `fix/`, `chore/`, `docs/`) och mergeas till `develop` via pull request. En release går från `develop` till `main` via pull request.

## Planering

Sitemap, datamodell och tidsplan finns i [docs/planering.md](docs/planering.md).