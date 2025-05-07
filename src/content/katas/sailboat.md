---
title: "⛵ Sailboat Kata"
description: "Vous êtes à la barre d'un petit voilier, qui cherche à atteindre une île. Votre bateau se déplace au tour par tour en fonction du vent, lequel change à chaque tour."
---

## Explication

*Vous êtes à la barre d'un petit voilier, qui cherche à atteindre une île. Votre bateau se déplace au tour par tour en fonction du vent, lequel change à chaque tour.*

L'objectif de ce kata est de développer une fonction permettant de calculer la position du bateau à chaque tour.

## Déplacement du bateau

On modélise la position du bateau comme une grille à deux dimensions, réputée infinie.

- Si le vent et le bateau sont alignés, alors le bateau avance de 4 cases
  ![Déplacement alignés](/src/images/kata/sailboat/sailboat-kata-examples-déplacement-alignes.png)
- Si le vent et le bateau sont opposés, alors le bateau avance de 1 case
  ![Déplacement opposés](/src/images/kata/sailboat/sailboat-kata-examples-déplacement-opposes.png)
- Si le vent et le bateau sont orthogonaux, alors le bateau avance de 2 cases, et se décale d'une case dans le sens du vent
  ![Déplacement orthogonaux](/src/images/kata/sailboat/sailboat-kata-examples-déplacement-orthogonaux.png)

## Navigation

Avant de se laisser pousser par le vent, le navigateur oriente le bateau dans le sens qui lui semble optimum pour atteindre l'île.

- Le bateau peut tourner dans le sens horaire
  ![Orientation sens horaire](/src/images/kata/sailboat/sailboat-kata-examples-orientation-sens-horaire.png)
- Le bateau peut tourner dans le sens anti-horaire
  ![Orientation sens anti-horaire](/src/images/kata/sailboat/sailboat-kata-examples-orientation-sens-anti-horaire.png)
- Le bateau ne tourne que d'un seul quart de tour à la fois
  ![Orientation un seul quart](/src/images/kata/sailboat/sailboat-kata-examples-orientation-un-seul-quart.png)
- Le bateau tourne dans la direction la plus avantageuse
  ![Orientation plus avantageuse](/src/images/kata/sailboat/sailboat-kata-examples-orientation-plus-avantageuse.png)
- Le bateau peut conserver sa direction
  ![Orientation conservée](/src/images/kata/sailboat/sailboat-kata-examples-orientation-conservée.png)
