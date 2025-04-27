# Troisième révision de code

## Utilisation de pourcentages
Des pourcentages sont utilisés à quelques endroits dans le code. Ainsi, une fonction qu'on peut importer, utiliser dans toutes ces classes et qui s'occupe de transformer un nombre en pourcentage aurait été une bonne idée.

## Tests de GameManager.vue
Les tests dans _GameManager.test.ts_ ne testent que l'affichage initial et le chargement. Si possible, des tests qui vérifient le lancement des fonctions sous certaines conditions auraient été pertinent.


## Test de NewPlayerForm.vue
_NewPlayerForm.test.ts_ manque un test par rapport au bouton. Celui-ci aurait du vérifier qu'appuyer le bouton d'envoi ouvre la page de jeu avec les bonnes informations.


## Utilisation de logique dans GameView.vue
La vue du jeu, _GameView.vue_, possède une logique qui pourrait être considérée comme assez compliquée pour empêcher son placement directement dans la vue. Un composant, comme pas exemple _GameRouter.vue_, qui s'occupe du router de la vue, aurait pu être utilisé.

## Séparation des services
Les services sont en ce moment séparés entre les fichiers _enemiesService.ts_, _shipsService.ts_ et _leaderboardService.ts_. Cette séparation n'est pas, à mes yeux, très pertinente.