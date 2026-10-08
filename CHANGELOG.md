# Changelog

Toutes les versions publiées du site Horizon. Le format suit la logique de Git Flow : chaque version est
préparée dans une branche `release/*`, intégrée dans `main` par Pull Request, puis identifiée par un tag.

## v1.0.2 — 8 octobre 2026

Release documentaire préparée dans `release/v1.0.2` depuis `develop`, qui contient déjà le hotfix v1.0.1.
**Aucun changement de code** : seuls `README.md` et ce journal sont modifiés.

### Modifié

- `README.md` en version finale : travaux transverses et responsabilités, workflow (release et hotfix), étapes du
  développement, conflit entre les améliorations A et B et sa résolution, versions publiées, difficultés rencontrées.
  Le README de `main` indiquait encore qu'aucune version n'était publiée.

### Traçabilité

- Issue : #25
- Branche : `release/v1.0.2`, créée depuis `develop`
- Pull Request vers `main`, puis tag `v1.0.2`, puis Pull Request vers `develop`.

## v1.0.1 — 8 octobre 2026

Correctif de production (hotfix) créé depuis `main` au niveau du tag `v1.0`, sans aucun développement de `develop`.

### Corrigé

- **Lien « Événements » du menu sur mobile** (incident #35, simulé conformément au §10 de l'énoncé) : en cliquant sur
  un lien du menu, le haut de la section ciblée restait masqué sous l'en-tête collant. `scroll-padding-top` valait
  120 px alors que l'en-tête mesure 161 px à 320 px de large ; il vaut maintenant 170 px dans la règle mobile.
  Vérifié à 320 px et 700 px : plus aucun pixel masqué pour « À propos », « Événements » et « Inscription ».

### Traçabilité

- Issue : #35
- Branche : `hotfix/lienEvenements`, créée depuis `v1.0`
- Pull Request vers `main`, puis tag `v1.0.1`, puis Pull Request vers `develop` pour que la correction reste présente
  dans les versions futures.

## v1.0 — 8 octobre 2026

Première version stable du site, préparée dans la branche `release/v1.0` depuis `develop`.
Aucune nouvelle fonctionnalité n'est ajoutée pendant la préparation.

### Contenu de la version

| Fonctionnalité | Pull Requests |
|----------------|---------------|
| A — Présentation, identité visuelle et navigation (@ISeevenI) | #13, #17, #24 |
| B — Catalogue d'événements (@Mar262m) | #18 |
| C — Inscription à un événement (@TomLeDev) | #15, #33 |
| Amélioration B — adaptation mobile du menu, avec résolution du conflit sur `.nav a` | #30 |
| Maintenance corrective — cartes d'événements qui débordaient sur mobile | #31 |
| Documentation — README, questions de synthèse | #20, #22, #27 |

### Vérifications avant livraison

- Les quatre ancres du menu (`#accueil`, `#a-propos`, `#evenements`, `#inscription`) existent dans `index.html`.
- Tous les fichiers référencés par `index.html` sont présents (`style.css`, `inscription.css`, `evenements.css`, `inscription.js`).
- Aucun marqueur de conflit (`<<<<<<<`, `>>>>>>>`) dans les fichiers du dépôt, aucun `id` dupliqué.
- Le README contient le tableau d'identification des trois membres et les réponses aux questions 1 à 8.
- Le formulaire d'inscription et l'absence de débordement horizontal sont vérifiés sur la page servie en local (voir la Pull Request de release).

### Suite prévue

- Incident de production simulé sur le lien de navigation vers les événements, corrigé par une branche `hotfix/*`
  et publié sous le tag `v1.0.1`.
