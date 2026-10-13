# A — Branding-Konzept & Design Tokens

## 1. Branding-Konzept

**Plattformname:** VuePoint

VuePoint ist eine moderne Konferenzplattform für die zweitägige Frontend-Konferenz FrontendNow. Sie ermöglicht einen übersichtlichen Zugang zu Sessions, Speaker-Profilen und dem persönlichen Konferenzprogramm.

Das visuelle Konzept setzt auf klare Navigation, konsistente Gestaltung und gute Lesbarkeit auf unterschiedlichen Bildschirmgrößen. Ziel ist eine intuitive Nutzung ohne unnötige visuelle Ablenkungen. Eine reduzierte Benutzeroberfläche soll dabei helfen, relevante Informationen schnell zu finden und das persönliche Konferenzerlebnis übersichtlich zu gestalten.

## 2. Farbpalette

Das bestehende Design verwendet **French Blue** als Primärfarbe und **Dim Grey** für neutrale Elemente. Beide Farbpaletten besitzen elf Abstufungen von 50 bis 950, definiert im OKLCH-Farbformat.

French Blue kennzeichnet wichtige Akzente und interaktive Elemente. Dim Grey unterstützt Texte, Oberflächen und die visuelle Hierarchie.

Die ursprünglichen Farbwerte wurden aus der bestehenden CSS-Datei in `tokens/tokens.css` übernommen. Über `brand-primary` und `brand-neutral` bleiben sie mit der Farbkonfiguration von Nuxt UI verbunden. Dadurch werden die Farbdefinitionen zentral gepflegt, ohne das bestehende Erscheinungsbild zu verändern.

## 3. Typography & Spacing

VuePoint definiert **Inter** als Standardschrift und **JetBrains Mono** als Monospace-Schrift.

Für Schriftgrößen und Abstände verwendet die Anwendung bereits Tailwind CSS. Die ergänzenden Tokens verweisen deshalb auf dessen vorhandene Skalen, anstatt unabhängige Werte einzuführen.

Beispielsweise referenziert `--font-size-base` die Variable `--text-base` (standardmäßig 16 px). `--font-size-7xl` entspricht standardmäßig 72 px.

Die Abstände basieren auf `--spacing`: `--space-6` wird als `calc(var(--spacing) * 6)` berechnet und ergibt beim Standardwert 24 px. Diese Werte wurden mithilfe der Browser-Entwicklertools überprüft.

Damit bleiben die definierten Tokens mit den bestehenden Framework-Konventionen konsistent.

## 4. Primitive & Semantic Tokens

Das Token-System unterscheidet zwischen **Primitive Tokens** und **Semantic Tokens**.

Primitive Tokens beschreiben konkrete Grundwerte, beispielsweise `--color-french-blue-500` und `--color-dim-grey-500`.

Semantic Tokens benennen dagegen deren Funktion im Interface. Beispielsweise verweist `--color-brand-primary-500` auf `--color-french-blue-500`.

Zusätzlich wurden die Aliase `--color-surface`, `--color-text-primary` und `--color-action-primary` definiert. Diese referenzieren die bestehenden Nuxt-UI-Variablen `--ui-bg`, `--ui-text` und `--ui-primary`, die sich an Light und Dark Mode anpassen.

**Integration in die bestehende Architektur**

Die Komponenten verwenden weiterhin überwiegend Tailwind-Utility-Klassen und Nuxt-UI-Variablen. Nicht jeder Farbwert, Schriftgrad oder Abstand wird separat als eigener Token definiert.

Die neue Token-Datei dokumentiert und zentralisiert wichtige Designgrundlagen. Sie ergänzt die bestehende Architektur, ohne sämtliche Komponenten umzubauen.

## 5. Barrierefreiheit und Kontrastprüfung

Mit dem **WebAIM Contrast Checker** wurden fünf Text-Hintergrund-Kombinationen anhand der WCAG-Kriterien überprüft:

- **Fließtext – Light Mode:** 9,18:1 (WCAG AA erfüllt)
- **Fließtext – Dark Mode:** 10,64:1 (WCAG AA erfüllt)
- **Große Überschrift – Dark Mode:** 17,71:1 (WCAG AA erfüllt)
- **Primary Button – Light Mode:** 5,44:1 (WCAG AA erfüllt)
- **Primary Button – Dark Mode:** 4,90:1 (WCAG AA erfüllt)

Alle fünf getesteten Kombinationen erfüllen die WCAG-AA-Anforderungen an den Textkontrast. Die Prüfung stellt eine Stichprobe und kein vollständiges Accessibility-Audit dar.

## 6. Begründung der Architekturentscheidungen

Die Token-Architektur basiert auf vier Kriterien:

**1. Konsistenz und Wiederverwendbarkeit:** Zentralisierte Farbpaletten reduzieren doppelte Definitionen und unterstützen eine einheitliche visuelle Gestaltung über verschiedene Komponenten hinweg.

**2. Wartbarkeit:** Die Trennung zwischen Designwerten und Komponentenlogik erleichtert spätere Anpassungen, ohne jede Vue-Komponente einzeln bearbeiten zu müssen.

**3. Framework-Integration:** Verweise auf bestehende Tailwind-Skalen und Nuxt-UI-Variablen vermeiden parallele Designregeln. Die Token-Datei wird über die vorhandene CSS-Architektur eingebunden.

**4. Erweiterbarkeit und Theming:** Die Trennung zwischen primitiven und semantischen Werten erleichtert zukünftige Farbänderungen. Dynamische Nuxt-UI-Variablen unterstützen die Verwendung semantischer Aliase in Light und Dark Mode.

Damit ergänzt das Token-System die bestehende Frontend-Architektur und schafft eine Grundlage für die schrittweise Weiterentwicklung des Designs.
