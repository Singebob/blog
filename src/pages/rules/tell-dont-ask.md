---
layout: '../../layouts/Rules.astro'
title: "Tell, don't ask"
pageTitle: 'Tell Dont Ask'
type: 'Code'
---

> [🔗 https://martinfowler.com/bliki/TellDontAsk.html](https://martinfowler.com/bliki/TellDontAsk.html)

Aucune méthode ne peut renvoyer de valeur (toutes les méthodes doivent renvoyer void).

Au lieu de requêter de la donnée dans vos objets, de la manipuler et de la modifier, demandez directement à vos objets d'effectuer les opérations.
