# FWC 2026 Interactive Schedule

Lokalna strona z terminarzem Mistrzostw Swiata 2026, filtrami, widokiem grup i drabinka.

## Wrzucenie na GitHub Pages

1. Utworz nowe repozytorium na GitHubie.
2. Wrzuć pliki z tego folderu do glownego katalogu repozytorium: `index.html`, `styles.css`, `app.js`, pliki JSON, `README.md` oraz `.nojekyll`.
3. Wejdz w `Settings` -> `Pages`.
4. W `Build and deployment` wybierz `Deploy from a branch`.
5. Jako branch wybierz `main` i folder `/root`, potem kliknij `Save`.
6. Po chwili strona bedzie pod adresem w stylu `https://twoj-login.github.io/nazwa-repo/`.

## Uruchomienie

Najwygodniej uruchomic katalog przez lokalny serwer, bo przycisk aktualizacji pobiera JSON:

```sh
python3 -m http.server 8877 --bind 127.0.0.1 --directory outputs/world-cup-2026-schedule
```

Potem otworz:

```text
http://127.0.0.1:8877
```

## Wyniki

Przycisk `Aktualizuj wyniki` pobiera JSON z pola `Zrodlo wynikow`. Domyslnie jest to `./results.sample.json`, czyli pusty przyklad bez bramek. Zeby zobaczyc testowa aktualizacje wynikow i tabel, wpisz w pole zrodla:

```text
./results.example-with-scores.json
```

Format:

```json
{
  "matches": [
    { "id": 1, "homeScore": 2, "awayScore": 1, "status": "finished" },
    { "id": 2, "homeScore": 0, "awayScore": 0, "status": "live" }
  ]
}
```

Pole `id` odpowiada numerowi meczu FIFA. Zrodlem moze byc lokalny plik JSON, wlasny endpoint lub maly proxy-serwer laczacy sie z dostawca wynikow. Tabele grup odswiezaja sie automatycznie po kazdym imporcie wynikow z bramkami.

## GitHub Pages

Strona dziala jako statyczna aplikacja na GitHub Pages. Aktualizacja wynikow zadziala, jezeli `Zrodlo wynikow` wskazuje na publiczny plik JSON albo API, ktore pozwala na odczyt z przegladarki przez CORS.

Jezeli dostawca wynikow wymaga klucza API, tokena albo blokuje CORS, nie wrzucaj klucza do plikow strony. Wtedy potrzebny jest maly backend/proxy, np. Cloudflare Worker, Vercel Function albo Netlify Function, a pole `Zrodlo wynikow` powinno wskazywac na ten proxy endpoint.

Glowne godziny meczow sa wyswietlane w czasie polskim `Europe/Warsaw`. Czas lokalny stadionu jest pokazany mniejszym tekstem pod spodem.
