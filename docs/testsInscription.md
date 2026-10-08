# Tests du formulaire d'inscription (issue #5)

Ces tests concernent la fonctionnalité C (section `#inscription` de `index.html`).
Ils ont été exécutés **manuellement dans un navigateur** (page servie en local,
fenêtre émulée en 375 × 812 px) : le projet n'a ni backend ni outil de test automatisé.

## Scénarios et résultats

| # | Scénario | Résultat attendu | Résultat obtenu |
|---|----------|------------------|-----------------|
| T1 | Soumission valide (nom, prénom, email valide, événement choisi) | Message de confirmation affiché, formulaire vidé, page non rechargée | ✅ Conforme |
| T2 | Tous les champs vides | Soumission bloquée, message d'erreur sous chacun des 4 champs, focus sur le premier | ✅ Conforme |
| T2b | Tout rempli sauf l'événement (aucun événement sélectionné) | Soumission bloquée, erreur « Veuillez sélectionner un événement. » uniquement | ✅ Conforme |
| T2c | Champ rempli uniquement avec des espaces | Considéré comme vide, erreur affichée | ✅ Conforme |
| T3 | Emails incorrects : `abc`, `abc@`, `@esgi.fr`, `abc@esgi`, `a b@esgi.fr`, `abc@@esgi.fr`, `abc@esgi.f` | Les 7 sont refusés avec un message sur le format | ✅ 7 / 7 refusés |
| T3b | Emails valides : `tom.dupont@esgi.fr`, `a+b@sous.domaine.com`, `prenom-nom@esgi.fr` | Les 3 sont acceptés | ✅ 3 / 3 acceptés |
| T3c | Correction d'un champ en erreur | L'erreur disparaît dès la saisie, sans nouvelle soumission | ✅ Conforme |
| T4 | Injection HTML dans le nom (`<img src=x onerror=…>`) | Texte affiché tel quel, aucun script exécuté | ✅ Conforme |
| T5 | Comportement sans backend | Aucune requête réseau, aucun stockage, URL inchangée | ✅ Conforme (détail ci-dessous) |
| T6 | Affichage mobile 375 px | Pas de défilement horizontal | ✅ Largeur du contenu = largeur de la fenêtre |

## Détail du test T5 (sans backend)

Pendant la soumission valide, les appels suivants ont été comptés :

| Mesure | Valeur |
|--------|--------|
| `fetch` | 0 |
| `XMLHttpRequest` | 0 |
| `sendBeacon` | 0 |
| Écritures dans `localStorage` / `sessionStorage` | 0 |
| Nouvelles ressources réseau chargées | 0 |
| Cookies | aucun |
| Paramètres ajoutés à l'URL | aucun |

Le message de confirmation précise lui-même qu'il s'agit d'une simulation et qu'aucune donnée
n'est transmise ni enregistrée.

## Refaire les tests

1. Servir le dépôt en local, par exemple avec `python -m http.server 8000`.
2. Ouvrir `http://localhost:8000/index.html#inscription`.
3. Rejouer les scénarios du tableau ci-dessus (champs vides, emails incorrects, soumission valide…).
4. Réduire la fenêtre à 375 px de large pour vérifier l'affichage mobile.
