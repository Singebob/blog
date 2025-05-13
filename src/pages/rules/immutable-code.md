---
layout: '../../layouts/Rules.astro'
title: 'Immutable Code / Code Immuable'
pageTitle: 'Immutable Code'
type: 'Code'
---
L'objectif de cette contrainte est de favoriser un code plus prévisible et moins sujet aux effets de bord en évitant toute mutation d'état.

- ##### Niveau 1
  Une fois qu'une variable est initialisée, sa valeur ne peut plus jamais être modifiée. Toutes les variables doivent être déclarées comme constantes (const en JavaScript, final en Java, etc.).

- ##### Niveau 2
  Tous les objets doivent être immuables. Une fois créés, leurs propriétés ne peuvent plus être modifiées. Pour "modifier" un objet, vous devez créer une nouvelle instance avec les changements souhaités.

>  ⚠️ Attention
>
> **Aucune liste ou collection ne peut être enrichie ou filtrée après sa création**

- ##### Niveau 3
  Aucune méthode ne peut modifier l'état interne d'un objet. Toutes les méthodes qui semblent modifier l'état doivent retourner une nouvelle instance de l'objet avec les modifications appliquées.
