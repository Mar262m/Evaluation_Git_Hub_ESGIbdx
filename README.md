# Horizon — Site d'une association étudiante

Site web de l'association étudiante **Horizon**, réalisé en HTML, CSS et JavaScript (sans backend) pour l'évaluation Git & GitHub. Il présente l'association, ses événements à venir et permet de s'inscrire à un événement. L'objectif du projet est surtout de montrer un travail collaboratif avec Git Flow, les Issues, GitHub Projects, les Pull Requests et les revues de code.

- Dépôt : <https://github.com/Mar262m/Evaluation_Git_Hub_ESGIbdx>
- GitHub Project (Kanban et Roadmap) : <https://github.com/users/Mar262m/projects/2>

## Équipe

| Pseudonyme GitHub | Nom | Prénom | Rôle |
|-------------------|-----|--------|------|
| @ISeevenI | Leost | Calvin | Étudiant 1 |
| @Mar262m | Machado | Marius | Étudiant 2 |
| @TomLeDev | Vinsonneau | Tom | Étudiant 3 |

## Fonctionnalités et responsabilités

| Fonctionnalité | Responsable | Contenu | Pull Requests |
|----------------|-------------|---------|---------------|
| A — Présentation et navigation | @ISeevenI (Étudiant 1) | identité visuelle (couleurs, police, logo), présentation de l'association, menu de navigation | #13, #17 |
| B — Catalogue d'événements | @Mar262m (Étudiant 2) | trois événements avec titre, date, lieu, description et bouton d'inscription | #18 |
| C — Inscription | @TomLeDev (Étudiant 3) | formulaire (coordonnées et choix d'un événement), validation, confirmation simulée | #15 |

Les questions de synthèse sont réparties ainsi : questions 1 à 3 par @ISeevenI, 4 à 6 par @Mar262m, 7 et 8 par @TomLeDev (PR #20 et #22).

## Choix de workflow

- **Git Flow** : `main` contient les versions stables (identifiées par un tag), `develop` les développements en cours. Les travaux se font dans des branches `feature/*`, `bugfix/*`, `release/*` et `hotfix/*`, nommées en camelCase après le `/` (par exemple `feature/presentationNavigation`).
- **Protection des branches** : un ruleset GitHub (`Anti_push`) s'applique à `main` et à `develop` : Pull Request obligatoire, **2 approbations**, suppression et force-push interdits.
- **Revue de code** : toute intégration passe par une Pull Request relue par les autres membres.
- **Traçabilité** : chaque Issue a un responsable et des critères de réalisation, les messages de commit citent l'Issue (`(#3)`), les Pull Requests contiennent `Closes #n`, et le GitHub Project (vues Kanban et Roadmap) suit l'avancement.
- **Limite connue** : les Pull Requests visent `develop`, qui n'est pas la branche par défaut. GitHub ne ferme donc pas les Issues tout seul à la fusion : elles sont fermées à la main ou citées dans la PR de release vers `main`.

## Étapes du développement

1. Mise en place : dépôt, branches `main` et `develop`, Issues, GitHub Project et protection de `main`.
2. Structure de la page d'accueil (PR #13).
3. Formulaire d'inscription (PR #15, Issues #1 à #5 et #12).
4. Identité visuelle, présentation et menu de navigation (PR #17, Issues #8, #9 et #10).
5. Catalogue des événements (PR #18, Issues #7 et #11).
6. Questions de synthèse du README (PR #20 et #22).
7. Protection de `develop` : 2 approbations obligatoires, comme sur `main`.
8. À venir : améliorations parallèles et résolution du conflit, correction des cartes d'événements sur mobile, release v1.0, puis hotfix v1.0.1. Les sections ci-dessous seront complétées au fur et à mesure.

## Conflit Git et résolution

*À compléter après le conflit volontaire entre l'amélioration A (identité visuelle) et l'amélioration B (adaptation mobile) : origine du conflit, fichiers concernés et choix de résolution.*

## Versions publiées

Aucune version n'est publiée pour l'instant.

| Version | Contenu | Statut |
|---------|---------|--------|
| v1.0 | première version stable, depuis une branche `release/*` | à publier |
| v1.0.1 | correction du lien de navigation vers les événements (hotfix depuis `main`) | à publier |

## Difficultés rencontrées

- **Mauvaise branche cible** : la première Pull Request de la navigation visait `main` au lieu de `develop`. La revue l'a repérée et elle a été redirigée vers `develop`.
- **Force-push après approbation** : réécrire la branche d'une PR déjà approuvée a annulé l'approbation, il a fallu relire.
- **Branche partie de l'« Initial commit »** : la première version du catalogue réécrivait `index.html` et entrait en conflit avec `develop`. La PR #14 a été fermée, puis le travail a été repris à partir de `develop` dans la PR #18.
- **Protection de `develop` tardive** : elle n'a été ajoutée qu'après les premières fusions. Les PR #13 et #18 ont donc été fusionnées sans leurs deux approbations (celle de #18 a été ajoutée après coup).
- **Issues non fermées automatiquement** : voir la limite connue ci-dessus. Certains titres d'Issues ont aussi un numéro qui ne correspond pas à celui de GitHub.

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

## Questions de synthèse

### 1. Quel est l'intérêt de séparer développements en cours et versions stables ?

*Réponse de @ISeevenI (Étudiant 1)*

Avec Git Flow, `main` ne contient que des versions stables, publiées et identifiées par un tag (`v1.0`…), tandis que `develop` accueille le travail en cours, intégré au fil des Pull Requests depuis les branches `feature/*`. Une fonctionnalité inachevée ou un bug introduit pendant le développement ne touche donc jamais la version en production.

Cette séparation permet aussi de livrer à un moment choisi, quand le contenu de `develop` a été vérifié, et de corriger rapidement la production (hotfix depuis `main`) sans embarquer des développements non validés.

### 2. Pourquoi imposer une revue de code avant intégration ?

*Réponse de @ISeevenI (Étudiant 1)*

La revue fait relire chaque changement par un autre membre avant qu'il n'arrive sur `develop` ou `main` : elle détecte les erreurs, les oublis et les incohérences avec le reste du site (par exemple un `id` renommé qui casserait le menu, ou des intitulés d'événements différents entre le catalogue et le formulaire).

Elle garde aussi une trace des discussions et des décisions dans la Pull Request, et fait circuler la connaissance du code : chacun sait ce que les autres ont modifié. C'est pour ça que, dans notre dépôt, toute intégration passe par une Pull Request et que `main` exige deux approbations avant une fusion.

### 3. Quelles situations provoquent un conflit Git et pourquoi sa résolution n'est-elle pas toujours automatique ?

*Réponse de @ISeevenI (Étudiant 1)*

Un conflit apparaît quand deux branches modifient les mêmes lignes d'un fichier, ou quand l'une modifie un fichier que l'autre a supprimé ou renommé, puis qu'on les fusionne (merge, rebase, cherry-pick, pull). C'est arrivé dans notre projet avec `index.html` : deux branches avaient réécrit la même section à partir de versions différentes.

Git sait fusionner seul des modifications sur des lignes différentes, mais quand les mêmes lignes changent des deux côtés, il ne peut pas savoir laquelle garder, ni s'il faut combiner les deux. Ce choix dépend du sens du code et de l'intention de chaque développeur : c'est à un humain de le faire, puis de vérifier que le résultat fonctionne.

### 4. Quelle différence entre correction classique et correction urgente de production ?

*Réponse de @Mar262m (Étudiant 2)*

Une correction classique (`bugfix/*`) traite une anomalie trouvée dans la version en cours de développement : elle part de `develop`, y revient par Pull Request et sera livrée avec la prochaine release, comme une fonctionnalité.

Une correction urgente (`hotfix/*`) traite un bug déjà présent en production : elle part directement de `main`, pour ne contenir que la correction et aucun développement non validé. Elle est fusionnée dans `main`, publiée sous un nouveau tag de correctif (par exemple `v1.0.1`), puis fusionnée aussi dans `develop`.

### 5. Pourquoi répercuter une correction de production dans les développements en cours ?

*Réponse de @Mar262m (Étudiant 2)*

Un hotfix part de `main` : la correction n'existe donc pas encore dans `develop`. Si on ne la fusionne pas aussi dans `develop` (ou dans la branche `release/*` en cours), la prochaine version publiée depuis `develop` ramènera le bug en production.

La répercuter tout de suite garantit que la correction est présente dans toutes les versions futures. Cela évite aussi un conflit plus difficile à résoudre plus tard, si le même code a continué d'évoluer entre-temps.

### 6. Quel est le rôle d'une branche de release ?

*Réponse de @Mar262m (Étudiant 2)*

Une branche `release/*` part de `develop` quand les fonctionnalités prévues pour une version sont terminées. Elle sert à préparer la livraison : vérifications, petites corrections, documentation et numéro de version, sans ajouter de nouvelle fonctionnalité. Pendant ce temps, l'équipe peut continuer à développer sur `develop`.

Une fois prête, elle est fusionnée dans `main` et taguée (par exemple `v1.0`), puis fusionnée dans `develop` pour que les corrections faites pendant la préparation y soient aussi présentes.

### 7. Comment GitHub Projects et les Issues facilitent-ils organisation et traçabilité ?

*Réponse de @TomLeDev (Étudiant 3)*

Les Issues servent à découper le projet en tâches claires : chacune a une description, des critères pour savoir quand elle est terminée, un responsable et un jalon (milestone) qui la rattache à une fonctionnalité. Chacun sait donc ce qu'il a à faire et comment vérifier que c'est fait. GitHub Projects donne la vue d'ensemble : le Kanban montre l'avancement de chaque tâche et la Roadmap l'ordre prévu et les dépendances.

Pour la traçabilité, on relie tout : le numéro de l'issue dans les messages de commit (`(#3)`), puis `Closes #3` dans la Pull Request. On peut ainsi partir d'un changement et retrouver la tâche qui l'a demandé et la personne qui en était responsable. À noter : nos PR visent `develop` et pas `main`, donc GitHub ne ferme pas les issues tout seul à la fusion (il ne le fait que sur la branche par défaut). Il faut les fermer à la main ou les citer dans la PR de release vers `main`.

### 8. Comment retrouver l'origine d'une modification dans l'historique GitHub ?

*Réponse de @TomLeDev (Étudiant 3)*

Sur GitHub, le bouton **Blame** d'un fichier affiche pour chaque ligne le dernier commit qui l'a modifiée et son auteur. En cliquant sur le commit, on voit son message (qui contient le numéro de l'issue) et la Pull Request associée, avec la discussion et les revues : on comprend qui a changé quoi, quand et pourquoi. Le bouton **History** d'un fichier permet de suivre toutes ses modifications dans le temps.

En ligne de commande, `git log` (avec `--oneline --graph` pour voir les branches) donne l'historique, `git log -- fichier` celui d'un seul fichier, `git show <sha>` le détail d'un commit et `git blame fichier` le même résultat que sur GitHub. Les tags de version (comme `v1.0`) indiquent dans quelle version une modification est arrivée, et `git bisect` aide à trouver le commit qui a introduit un bug.
