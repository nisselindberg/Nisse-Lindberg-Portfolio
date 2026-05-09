# Nisse Lindberg — Portfolio

Vite + React + TypeScript. Kör lokalt eller bygg för produktion.

## Krav

- **Node.js 20** (eller nyare), se `engines` i `package.json`
- Studio-referens: [AI Studio](https://ai.studio/apps/7f1a0406-fc19-48f3-99b7-7872e944e6df) (mall du utgick från)

## Kom igång (lokalt)

1. Installera beroenden: `npm ci` (eller `npm install`)

2. Miljövariabel för AI-assistenten — kopiera mallen och redigera:

   ```bash
   cp .env.example .env.local
   ```

   Lägg din nyckel i **`.env.local`** eller **`.env`** som:

   `VITE_GEMINI_API_KEY=din_nyckel`

   *(Vite kräver prefixet `VITE_`; README:n från AI Studio nämnde ibland fel namn.)*

3. Utveckling: `npm run dev`

4. Produktionsbygge: `npm run build` — resultat hamnar i `dist/`

5. Kolla TypScript utan emit: `npm run typecheck`

## Bygga ihop med andra / PRs

- Kör **`npm run typecheck`** och **`npm run build`** innan du pushar eller öppnar PR.
- **CI**: vid pull requests mot `main` eller `master` körs automatisk typkontroll och build (`.github/workflows/ci.yml`).
- **GitHub Pages**: workflow ligger under **`.github/workflows/deploy.yml`** (tidigare fann en kopia felaktigt bara som `deploy.yml` i roten och kördes då inte).

För Gemini på den publicerade sajten: repot **Secrets** → `VITE_GEMINI_API_KEY` (valfritt; utan nyckel byggs sidan fortfarande).

## AI Studio-källa

Ursprungsmall: AI Studio-drive som refererades i projektets historia.
