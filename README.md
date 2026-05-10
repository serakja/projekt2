# Projekt 2 — Webová prezentace

**Autor:** Jan Šerák (xserakj00)  
**Předmět:** ITW

## Popis řešení

Jednoduchá osobní webová prezentace tvořená jediným HTML souborem se šesti sekcemi na jedné stránce (single-page).
Informační obsah není 100% pravdivý, i když je velmi inspirovaný realitou.
Jelikož je stránka veřejná, nechtěl jsem v sekci "O mně" dávat svoji fotografii, tudíž jsem ji nahradil emotikonem.
Odkazy na 2/3 projektů vedou na privátní github stránku, jelikož je momentálně nechci zveřejňovat. Ze szejného důvodu jsou nad projkety emotikony místo obrázků.

### Soubory

- `index.html` - Jediný HTML soubor, veškerý obsah na jedné stránce
- `style.css` - Styly, animace a responzivní design
- `javascript.js` - Ovládání hamburger menu

### Sekce stránky

1. **Úvod** — Flexbox, dva sloupce, terminál s informacemi pro zaplnění prázdného místa a doplnění vizuálu
2. **O mně** — CSS Grid, emotikon s mým stručným popisem
3. **Dovednosti** — CSS Grid auto-fit, karty s animovanými progress bary
4. **Vzdělání** — Timeline s pseudo-elementy, opačné barevně schéma pro oživení stránky a odlišení
5. **Projekty** — CSS Grid auto-fit, projektové karty s odkazy
6. **Kontakt** — kontaktní informace s odkazy na stránky (github, linkedin)

### Použité technologie

- **HTML5** — sémantické tagy (`nav`, `section`, `article`, `footer`)
- **CSS** — Grid, Flexbox, `@keyframes` animace, custom properties, responzivní design
- **JavaScript** — hamburger menu (toggle třídy `.is-open`)
- **Font Awesome 6.5** (CDN) — ikony

## Využití AI

Při tvorbě projektu byl jako podpůrný nástroj využit Gemini.
Pomáhal mi s barevným a vizuálním rozvžením stránky, výplňovými texty a řešení problémů.
Negeneroval větší kusy kódu, pouze doporučoval a vysvětloval funkce, jakými by se problém dal řešit.
