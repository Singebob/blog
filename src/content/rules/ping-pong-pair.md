---
title: 'Ping Pong Pair Programming'
pageTitle: 'Ping Pong Pair programming'
type: 'Interaction'
---

> Contrainte spécifique au [Pair-Programming](/rules/pair-programming)

Le binômage dit ping-pong permet de coupler la pratique du binômage avec le TDD. Dans ce cadre, les itérations ne sont plus rythmées par le temps, mais par le cycle du TDD. Les rôles alternent à chaque fois qu’on termine une phase rouge du cycle de TDD.

Exemple : Alice et Bertrand binôment.

- ##### ➡️ Alice est pilote, Bertrand est copilote
  Alice écrit un premier test en échec et passe la main à Bertrand.
- ##### ➡️ Les rôles alternent : Alice devient copilote, Bertrand devient pilote
  Bertrand corrige le test.
  Bertrand effectue les refactorings nécessaires.
  Bertrand écrit un nouveau test en échec et passe la main à Alice.
- ##### ➡️ Les rôles alternent : Alice devient pilote, Bertrand devient copilote
  Alice corrige le test.
  Alice effectue les refactorings nécessaires.
  Alice écrit un nouveau test en échec et passe la main à Bertrand.
