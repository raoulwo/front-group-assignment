# Technologie ADR

## Status

Akzeptiert

## Context

Für die Implementierung unseres Gruppen-Projekts muss Web Framework gewählt
werden. Die Grundentscheidung für Vue.js (bzw. Nuxt) steht fest, nach
Anforderungen der LVA.

Deswegen stehen zwei (Vue-basierte) Optionen zur Auswahl:

1. Ein manuelles Setup auf Basis einer reinen *Vue* Single Page Application
   (SPA) mit zusätzlichen Paketen (u. a. `vue-router`, `unplugin-auto-import`,
   `eslint`, `prettier`).
2. Die Verwendung des Meta-Frameworks *Nuxt*.

Anforderungen an das Setup:

- Geringer Aufwand bei der initialen Konfiguration des Projekts.
- Vordefinierte Struktur für Code-Organisation (Convention over Configuration).
- Unterstützung unterschiedlicher Rendering-Modi (CSR, SSR, SSG). Dies ist
  besonders relevant für folgende Aufgaben bzgl. dieses Projekts.
- Kompatibilität mit gängigen UI-Bibliotheken (z.B. Nuxt UI).

## Decision

Wir verwenden *Nuxt* anstelle eines manuell konfigurierten Vue-Setups.

### Begründung:

- **File-Based Routing:** Routen werden automatisch anhand der Datei- und
  Ordnerstruktur unter `/pages` generiert. Ein manuelles Konfigurieren des
  `vue-router` ist nicht nötig.
- **Automatische Imports:** Komponenten, Composables und Vue-APIs werden
  automatisch importiert, was den Schreibaufwand reduziert. Manuelle
  Konfiguration von bspw. `unplugin-auto-import` nicht erforderlich.
- **Formatting und Linting:** Vorkonfigurierte Setups für ESLint und/oder
  Prettier sparen Zeit beim ersten Projekt Setup.
- **Rendering-Strategien:** Nuxt unterstützt Client-Side Rendering (CSR),
  Server-Side Rendering (SSR) und Static Site Generation (SSG). Ein Wechsel
  oder Mischen der Strategien ist ohne Framework-Wechsel möglich.
- **UI Libraries:** Integrationen für Bibliotheken wie Nuxt UI sind direkt
  verfügbar.
- **Vorerfahrung:** Durch Vorerfahrung (von Raoul Wograndl) mit Vue und Nuxt
  ist keine Einarbeitungszeit notwendig (für ein Teammitglied). Außerdem kann
  man beim Einlernen die anderen Teammitglieder unterstützen.

## Consequences

### Positiv

- Geringerer Aufwand beim ersten Setup des Projekts.
- Einheitliche Projektstruktur durch Vorgaben des Frameworks (Convention over
  Configuration).
- Flexibilität bei der Wahl des Rendering-Modus, falls sich Anforderungen
  ändern (relevant für spätere Aufgaben).

### Negativ

- Höhere Abstraktion und Overhead im Vergleich zu einer einfachen Vue-SPA.
- Steilere Lernkurve aufgrund des *heavy-weight* Meta-Frameworks.
