# KI-LOG — VuePoint

## Verwendetes KI-Tool

**Tool:** ChatGPT (OpenAI)

**Zweck:** Unterstützung beim Lernen, Verständnis technischer Konzepte, Architekturplanung und Dokumentation.

KI wurde verwendet, um die bestehende Projektstruktur von VuePoint besser zu verstehen, technische Zusammenhänge nachzuvollziehen und ausgewählte Implementierungs- und Dokumentationsaufgaben zu unterstützen.

Die folgenden Prompts fassen die wichtigsten Themen der Nutzung zusammen und stellen keine vollständige Wiedergabe aller einzelnen Gespräche dar.

## 1. Nuxt und die Projektstruktur verstehen

**Beispielhafte Prompts:**

- „Kannst du mir erklären, wie Nuxt 4 funktioniert und worin es sich von einer normalen Vue-3-Anwendung unterscheidet?“
- „Was sind Composables in Vue und warum werden sie in Nuxt-Projekten verwendet?“
- „Wie arbeiten Pages, Components, Composables und TypeScript-Typen in unserer Konferenzanwendung zusammen?“

**Verwendung der KI:**

Die KI unterstützte mich dabei, das dateibasierte Routing von Nuxt, Vue-Komponenten, reaktive Zustände und die Verwendung von Composables zu verstehen. Diese Erklärungen halfen mir, die vorhandene Projektstruktur und das Zusammenspiel ihrer Bestandteile besser nachzuvollziehen.

## 2. Design Tokens und Tailwind CSS verstehen

**Beispielhafte Prompts:**

- „Was sind Design Tokens und wie werden sie mit Tailwind CSS und Nuxt UI verwendet?“
- „Wie können bestehende Farbdefinitionen in einer separaten Token-Datei organisiert werden, ohne das aktuelle Design zu verändern?“
- „Wie können Typografie- und Spacing-Tokens auf die bereits vorhandenen Tailwind-CSS-Skalen verweisen?“

**Verwendung der KI:**

Die KI half mir, die bestehenden Designwerte zu analysieren und besser zu verstehen, wie Tailwind CSS und Nuxt UI Farben, Typografie und Abstände verwalten.

Die vorhandenen Farbpaletten wurden in `tokens/tokens.css` zentralisiert. Für Typografie und Spacing wurden Verweise auf bestehende Tailwind-Variablen verwendet, anstatt zusätzliche unabhängige Werte festzulegen.

Zusätzlich unterstützte die KI bei der Verwendung semantischer Aliase, die auf Nuxt-UI-Variablen verweisen und mit Light und Dark Mode kompatibel sind.

## 3. State Management für „Mein Programm“ planen

**Beispielhafte Prompts:**

- „Wie könnten Nutzer*innen Konferenz-Sessions zu ihrem persönlichen Programm hinzufügen oder daraus entfernen?“
- „Was ist der Unterschied zwischen lokalem State mit `ref()` und gemeinsamem State mit Nuxt `useState()`?“
- „Sollten ausgewählte Sessions als IDs oder als vollständige Objekte gespeichert werden?“
- „Wie kann `localStorage` dafür sorgen, dass ausgewählte Sessions nach dem Neuladen der Seite erhalten bleiben?“
- „Wie lässt sich der Datenfluss zwischen Session-Komponenten, `useMyProgram.ts`, gemeinsamem State und `localStorage` in einem Diagramm darstellen?“

**Verwendung der KI:**

Die KI half mir, verschiedene Möglichkeiten zur Verwaltung gemeinsam genutzter Zustände und zur dauerhaften Speicherung im Browser zu verstehen.

Auf dieser Grundlage wurde ein Konzept mit `useMyProgram.ts`, Nuxt `useState()` und `localStorage` dokumentiert. Die KI unterstützte außerdem bei der Planung und Überprüfung des Datenflussdiagramms.

Diese Funktion ist für die weitere Entwicklung vorgesehen und wurde bisher noch nicht implementiert.

## 4. Weitere KI-Unterstützung

Die KI wurde außerdem verwendet, um technische Erklärungen und Dokumentation zu überprüfen, Implementierungsschritte zu erläutern, Codebeispiele vorzuschlagen und einzelne Probleme während der Entwicklung zu analysieren.

Die Änderungen wurden anschließend manuell in VS Code und im Browser überprüft. Zusätzlich wurde das Projekt mithilfe der Nuxt-Build-Befehle getestet.