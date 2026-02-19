# REST API 
Av Rebecca Smith, resm2400
Detta repository innehåller kod för ett enklare REST API byggt med Fastify. APIet är byggt för att spara filmer med dess titel, premiäråt och om man sett den eller inte.
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad. Denna READme-fil är anpassad från exemplet: https://github.com/MallarMiun/Exempel_README_till_API/. 


## Installation, databas
APIet använder en MongoDB-databas.
Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. För att starta serverns kör kommandot node server.
Schemat finns i filen film.model.js

Man får fram/sparar följande information:


_id (string) 
title (string)
premierYear (integer)
seen (boolean)
createdAt (date)


## Användning
Nedan är ett exempel på hur man når API:et.

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/films    |Hämtar alla tillgängliga filmer                                  |
|POST   |/film    |Lagrar en ny film                                                 |
|PUT    |/film/:ID |Uppdaterar en existerande film med angivet ID.                        |
|DELETE |/film/:ID |Raderar en film med angivet ID.                                       |
|GET |/film/:ID |Hämtar en tillgänglig film.                                   |

Ett objekt returneras/skickas som JSON med följande struktur:
```
{
    "_id": "69937fc1e8060bf0a9f3587a",
    "title": "Zootropolis 2",
    "premiereYear": 2025,
    "seen": false, 
    "createdAt": "2026-02-16T20:48:49.775Z"
}
```

