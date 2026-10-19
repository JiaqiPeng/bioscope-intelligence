# BioScope visual identity

The house style pairs Newsreader headlines and reading text with Manrope navigation, metadata and interface text. Serif and sans-serif system fallbacks remain available if Google Fonts cannot load.

## Palette

- Deep navy: `#102c50` — headings, structure, footer.
- BioScope blue: `#245fb3` — navigation state, links, rules and emphasis.
- Pale blue: `#eff5fd` — restrained supporting panels.
- Charcoal: `#273544` — reading text.
- White — the main canvas.

## Fieldnotes illustrations

Seven original SVG illustrations replace photographic article covers. They share a pale canvas, blue line work, a circular scientific frame, small figure labels and generous negative space. Subjects must relate directly to the reporting. The illustrations are schematic editorial visuals, never clinical evidence or accurate anatomical references.

Run `node scripts/build-illustrations.cjs` to regenerate the vector masters. Edit the corresponding subject drawing in that script; do not introduce fake photographic imagery or decorative sci-fi effects. Add future assignments in `site/editorial-images.js`. The same vector master is used for hero and thumbnail displays, with `object-fit: contain` to preserve the illustration. Each assignment requires descriptive alt text and the standard schematic caption.

Previous WebP assets remain available for history, but no current story renders them. Article text, source citations, publication dates, company data, deal records and archive behavior are independent of this visual layer.

## Implementation

`site/house-style.css` contains the current design tokens and responsive refinements over the existing layout. Keep interfaces readable at 390px and wide desktop widths, maintain keyboard focus indicators, and respect reduced-motion preferences. Avoid gradients, bright secondary colors, decorative dashboards and unnecessary motion.
