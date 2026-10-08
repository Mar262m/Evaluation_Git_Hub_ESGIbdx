# Changelog

Toutes les versions publiées du site Horizon. Le format suit la logique de Git Flow : chaque version est
préparée dans une branche `release/*`, intégrée dans `main` par Pull Request, puis identifiée par un tag.

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
