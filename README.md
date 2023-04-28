# Cvičení: Volání API

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 2. Generátor hesel

Vyrobíme stránku, která pomůže uživateli vygenerovat opravdu silné a neprůstřelné heslo. Použijeme k tomu [tréninkové API](https://apps.kodim.cz/daweb/trening-api/docs/heslo) na generování hesel.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/daweb/js2/server-komunikace/cv-volani-api/cvlekce%3Egenerator-hesel/ukazka.gif)

- Založte si nový projekt příkazem

```javascript
npm init kodim-app@latest cviceni-generator-hesel html-css-js
```
- Otevřete si ve VS Code vytvořenou složku `cviceni-generator-hesel`.

- Prohlédněte si dokumentaci API pro generování hesla a vyzkoušejte si jej „na sucho“ v prohlížeči. Zkuste vygenerovat hesla různých délek a prohlédněte si, jak vypadá struktura dat, která API vrací.

- Vytvořte stránku s jedním tlačítkem. Když na něj uživatel klikne, zobrazí se mu vygenerované heslo délky **16**. S každým dalším kliknutím by se mělo heslo změnit, přegenerovat.

**Bonus**
- Přepracujte stránku tak, aby obsahovala formulář s textovým políčkem, do kterého uživatel může zadat délku hesla. Po odeslání formuláře se mu zobrazí heslo zadané délky.