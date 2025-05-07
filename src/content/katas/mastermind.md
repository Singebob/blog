---
title: "🎮 Mastermind Kata"
description: "Implémentez le jeu de Mastermind, un jeu de réflexion où un joueur doit deviner une combinaison de couleurs créée par un autre joueur."
---

## Explication

*Le Mastermind est un jeu de réflexion où un joueur (le décodeur) doit deviner une combinaison de couleurs créée par un autre joueur (le codificateur) en un nombre limité d'essais.*

L'objectif de ce kata est de développer une fonction qui évalue une proposition par rapport à une combinaison secrète et retourne un feedback.

## Règles du jeu

Le jeu se joue traditionnellement avec:
- Une combinaison secrète de 4 pions de couleurs
- 6 couleurs différentes possibles (rouge, bleu, jaune, vert, blanc, noir)
- 12 essais maximum pour trouver la combinaison

## Évaluation d'une proposition

Après chaque proposition du décodeur, le codificateur donne un feedback:
- Un pion noir pour chaque pion de la bonne couleur à la bonne position
- Un pion blanc pour chaque pion de la bonne couleur mais à la mauvaise position
- Rien pour les pions de couleurs qui ne sont pas dans la combinaison secrète

Exemples:
- Combinaison secrète: Rouge, Bleu, Jaune, Vert
- Proposition: Rouge, Bleu, Blanc, Noir
  - Feedback: 2 pions noirs (Rouge et Bleu sont à la bonne position)
  
- Combinaison secrète: Rouge, Bleu, Jaune, Vert
- Proposition: Vert, Jaune, Rouge, Bleu
  - Feedback: 4 pions blancs (toutes les couleurs sont présentes mais à la mauvaise position)

- Combinaison secrète: Rouge, Bleu, Jaune, Vert
- Proposition: Rouge, Jaune, Jaune, Vert
  - Feedback: 2 pions noirs (Rouge et Vert sont à la bonne position), 1 pion blanc (un Jaune est présent mais à la mauvaise position)

