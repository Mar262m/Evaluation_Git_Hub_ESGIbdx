# Evaluation_Git_Hub_ESGIbdx

## Fonctionnalité C — Inscription à un événement

Section `#inscription` de [`index.html`](index.html), réalisée par @TomLeDev (étudiant 3).
Le visiteur renseigne ses coordonnées et choisit l'événement auquel il souhaite participer.

### Fonctionnement

1. Le visiteur remplit le formulaire et clique sur **S'inscrire**.
2. `inscription.js` vérifie chaque champ. Si un champ est invalide, la soumission est bloquée,
   un message d'erreur s'affiche sous le champ concerné et le focus se place sur le premier champ en erreur.
   L'erreur disparaît dès que le champ est corrigé.
3. Si tout est valide, un message de confirmation s'affiche et le formulaire est vidé.

### Champs

| Champ | Type | Règle de validation |
|-------|------|---------------------|
| Nom | texte | obligatoire (des espaces seuls sont refusés) |
| Prénom | texte | obligatoire (des espaces seuls sont refusés) |
| Adresse email | email | obligatoire, au format `nom@domaine.ext` |
| Événement | liste déroulante | obligatoire, un seul choix parmi les trois événements du catalogue |

### Pas de backend, pas de stockage

L'inscription est **simulée** : aucune donnée n'est envoyée à un serveur (ni `fetch`, ni `XMLHttpRequest`)
et rien n'est conservé (ni `localStorage`, ni cookie). Les valeurs saisies servent uniquement à
construire le message de confirmation, qui rappelle lui-même qu'il s'agit d'une simulation.
Ce comportement est vérifié dans le [rapport de tests](docs/testsInscription.md).

### Fichiers

| Fichier | Rôle |
|---------|------|
| [`index.html`](index.html) | Structure du formulaire dans la section `#inscription` |
| [`inscription.css`](inscription.css) | Style du formulaire, affichage responsive |
| [`inscription.js`](inscription.js) | Validation et soumission simulée |
| [`docs/testsInscription.md`](docs/testsInscription.md) | Scénarios de test et résultats |

### Captures d'écran

Affichage sur ordinateur :

![Formulaire d'inscription sur ordinateur](docs/images/inscriptionDesktop.png)

Affichage sur mobile :

![Formulaire d'inscription sur mobile](docs/images/inscriptionMobile.png)
