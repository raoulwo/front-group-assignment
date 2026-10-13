# B — Architekturkonzept & Architecture Decision Record (ADR)

## 1. Ausgangssituation und Zielsetzung

VuePoint ist eine Konferenzplattform für die zweitägige Frontend-Konferenz FrontendNow. Die Anwendung basiert auf Nuxt 4, Vue 3, TypeScript, Tailwind CSS und Nuxt UI.

Ziel der Architektur ist die klare Trennung von Seitenstruktur, Benutzeroberfläche, Anwendungslogik und Datenverwaltung. Die Anwendung soll modular, wartbar und erweiterbar sein.

Besonderer Wert wird auf wiederverwendbare Komponenten, eine nachvollziehbare Datenverarbeitung und die Trennung von Logik und Darstellung gelegt.

## 2. Projekt- und Ordnerstruktur

Die Anwendung verwendet folgende Projektstruktur:

- `app/pages/` – Seiten und dateibasierte Routen für Sessions, Sprecher*innen, Tracks, Räume und Mein Programm.
- `app/components/` – wiederverwendbare UI-, Feature- und Layout-Komponenten.
- `app/composables/` – wiederverwendbare Logik für Konferenzdaten, Sessions, Sprecher*innen, Räume und Tracks.
- `app/data/` – lokale Konferenzdaten in `conference-data.json`.
- `app/types/` – TypeScript-Definitionen für die Datenmodelle.
- `app/assets/css/` – globale Styles und Einbindung der Design Tokens.
- `tokens/` – zentrale Farbpaletten sowie ergänzende semantische, Typografie- und Spacing-Tokens.

Die Struktur folgt den Nuxt-Konventionen und ermöglicht eine klare Zuordnung von Verantwortlichkeiten. Die Komponenten werden logisch kategorisiert, ohne zusätzliche physische Unterordner vorauszusetzen.

## 3. Komponentenschichten

Die Architektur unterscheidet drei logische Komponentenebenen.

### 3.1 Base UI Components

Base-UI-Komponenten stellen allgemeine Oberflächenelemente bereit. Sie sind möglichst unabhängig von konferenzspezifischer Anwendungslogik.

Beispiele:

- `AppSearchBar.vue` – Texteingabe für Suchfunktionen.
- `AppSelect.vue` – wiederverwendbare Auswahlkomponente.
- `AppSearchFilter.vue` – Darstellung auswählbarer Filteroptionen.
- `BaseEmptyState.vue` – konfigurierbare Rückmeldung bei fehlenden Ergebnissen.

Diese Komponenten lassen sich in unterschiedlichen Bereichen der Anwendung einsetzen.

### 3.2 Feature Components

Feature-Komponenten bilden konkrete Funktionen der Konferenzplattform ab.

Beispiele:

- `SessionFilters.vue` – Such- und Filteroberfläche für Sessions.
- `SessionCard.vue` – Darstellung einer Session.
- `SessionCardList.vue` – Darstellung von Session-Listen einschließlich leerer Ergebnisse.
- `SpeakerCard.vue` und `SpeakerCardList.vue` – Darstellung von Sprecher*innen.

Die Feature-Komponenten kombinieren wiederverwendbare UI-Bausteine zu konkreten Anwendungsfunktionen.

### 3.3 Layout Components

Layout-Komponenten unterstützen die übergreifende Struktur und Navigation.

Beispiele:

- `AppHeader.vue`
- `AppFooter.vue`
- `AppLogo.vue`

Die drei Ebenen beschreiben die Verantwortung der Komponenten. Sie sind aktuell gemeinsam im Verzeichnis `app/components/` organisiert.

## 4. Architecture Decision Record — Trennung von UI und Anwendungslogik

Status: Implementiert.

### 4.1 Kontext und Problemstellung

VuePoint umfasst mehrere funktionale Bereiche, darunter Sessions, Sprecher*innen, Tracks, Räume und das persönliche Konferenzprogramm. Diese Bereiche greifen auf gemeinsame Konferenzdaten zu und benötigen unterschiedliche Formen der Darstellung und Interaktion.

Eine zentrale Architekturentscheidung betrifft die Aufteilung von Anwendungslogik, reaktivem Zustand und Benutzeroberfläche. Ziel ist es, die verschiedenen Funktionen modular und wiederverwendbar zu gestalten, ohne eine unnötig komplexe Komponentenstruktur einzuführen.

Als konkretes Beispiel wird die Sessions-Suche betrachtet. Sie ermöglicht eine Textsuche sowie die Filterung nach Sprecher*innen, Track, Level, Format und Datum. Anhand dieser Funktion wird die Trennung von Logik und Darstellung nach einem headless-orientierten Ansatz bewertet.

### 4.2 Betrachtete Alternativen

Alternative A — Monolithische Seitenkomponente

Alle Filterelemente, Zustandsvariablen und Filteroperationen befinden sich direkt innerhalb einer Seitenkomponente.

**Vorteile:**
- Weniger Dateien und Schnittstellen.
- Einfache Umsetzung für sehr kleine Anwendungen.

**Nachteile:**
- Starke Kopplung von Darstellung und Logik.
- Eingeschränkte Wiederverwendbarkeit.
- Zunehmende Komplexität bei zusätzlichen Funktionen.

**Alternative B — Composables und eigenständige UI-Komponenten**

Die Filterlogik wird in einem Composable gekapselt. Die Seite koordiniert den reaktiven Zustand und verbindet eigenständige UI-Komponenten für Filter und Ergebnisdarstellung.

**Vorteile:**
- Klare Trennung von Verantwortlichkeiten.
- Bessere Wartbarkeit und Wiederverwendbarkeit.
- Einfachere Anpassung und Erweiterung der Benutzeroberfläche.
- Filterlogik kann unabhängig von der Darstellung weiterentwickelt und getestet werden.

**Nachteile:**
- Zusätzliche Komponenten und Schnittstellen.
- Kommunikation über Props, `v-model` und Events erforderlich.

### 4.3 Entscheidung und aktuelle Umsetzung

Für VuePoint wird **Alternative B** verwendet.

Die Anwendungslogik der Sessions-Suche befindet sich im Composable `useSessions.ts`. Dieses stellt reaktive Filterzustände und die berechnete Liste `filteredSessions` bereit.

Die Seite `app/pages/sessions/index.vue` koordiniert die Zustandswerte, die verfügbaren Filteroptionen und die Ergebnisdarstellung.

`SessionFilters.vue` übernimmt die visuelle Darstellung der Suche und Filter. Über `defineModel()` und `v-model` werden die Zustandswerte mit der Seite synchronisiert.

Zusätzlich bietet die Filteroberfläche die Funktion **„Filter zurücksetzen“**. Ein `reset`-Event wird an die Seite übergeben, welche die Filter auf ihre Ausgangswerte zurücksetzt. Die Ergebnisliste aktualisiert sich reaktiv.

`SessionCardList.vue` stellt die gefilterten Sessions dar und verwendet `BaseEmptyState.vue`, wenn keine Ergebnisse vorhanden sind.

### 4.4 Headless Pattern

Die Sessions-Filterung orientiert sich am **Headless Pattern**.

Die Such- und Filterregeln sind in `useSessions.ts` definiert und nicht an eine konkrete visuelle Darstellung gebunden. Die Benutzeroberfläche wird durch eigenständige Vue-Komponenten bereitgestellt.

Damit können Darstellung und Filterlogik weitgehend unabhängig voneinander angepasst werden.

Auch Composables wie `useSpeakers`, `useRooms` und `useTracks` unterstützen die Trennung von Datenverarbeitung und Darstellung.

Das Headless-Prinzip wird insbesondere bei der Sessions-Filterung angewendet. Weitere Composables unterstützen ebenfalls die Trennung von Datenverarbeitung und Darstellung. Eine vollständig headless aufgebaute Anwendung ist jedoch nicht vorgesehen.

## 5. Datenverwaltung und Komponentenkommunikation

Die Konferenzdaten werden lokal in `conference-data.json` gespeichert und über `useConferenceData.ts` bereitgestellt.

Spezialisierte Composables wie `useSessions.ts` greifen auf diese Daten zu und stellen passende Funktionen für die Seiten und Komponenten bereit.

Die Kommunikation zwischen Komponenten erfolgt über:

- **Props:** Übergabe von Daten und Konfigurationen.
- **`v-model`:** Synchronisation reaktiver Werte zwischen Seite und UI-Komponenten.
- **Events:** Übermittlung von Benutzeraktionen wie dem Zurücksetzen der Filter.
- **Composables:** Wiederverwendbare Verarbeitung und Bereitstellung von Daten.

Die Sessions-Filterung funktioniert mit lokalen Daten. Eine externe API oder Datenbank wird dafür derzeit nicht benötigt.

## 6. Komponentenübersicht und Datenfluss

Die Architektur der Sessions-Funktion lässt sich wie folgt darstellen:

conference-data.json
        |
        v
useConferenceData()
        |
        v
useSessions.ts
(Reaktiver Zustand und Filterlogik)
        |
        | filteredSessions / Filterzustand
        v
app/pages/sessions/index.vue
        |
        +<----> SessionFilters.vue
        |       (v-model / reset-Event)
        |             |
        |             +-- AppSearchBar
        |             +-- AppSelect
        |             +-- AppSearchFilter
        |             +-- Reset-Button
        |
        +-----> SessionCardList.vue
                  |
                  +-- SessionCard.vue
                  |   (Ergebnisse vorhanden)
                  |
                  +-- BaseEmptyState.vue
                      (Keine Ergebnisse)


Die Darstellung der Filter wird durch `SessionFilters.vue` übernommen. Die Seite verbindet die Benutzereingaben mit dem Zustand aus `useSessions.ts`.

Die berechnete Liste `filteredSessions` wird an `SessionCardList.vue` übergeben. Dadurch reagiert die Benutzeroberfläche automatisch auf Änderungen der Such- und Filterwerte.

## 7. Konsequenzen und Ausblick

Die gewählte Architektur unterstützt **Separation of Concerns**, Wiederverwendbarkeit und Wartbarkeit.

Die Trennung zwischen Composables, Seiten und UI-Komponenten schafft klar definierte Verantwortlichkeiten. Wiederverwendbare Komponenten fördern eine konsistente Benutzeroberfläche.

Die zusätzliche Aufteilung erfordert allerdings mehr Komponentenkommunikation und erhöht die Anzahl der Dateien. Deshalb sollen weitere Abstraktionen nur eingeführt werden, wenn sie einen erkennbaren Vorteil bieten.

Die Architektur bildet außerdem eine Grundlage für zukünftige Funktionen.

Insbesondere **„Mein Programm“** benötigt eine Strategie für die Verwaltung und dauerhafte Speicherung ausgewählter Sessions. Diese Entscheidung wird im separaten **State-Management-Konzept (Dokument C)** behandelt.