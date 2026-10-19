# BioScope visual identity

The house style pairs Newsreader headlines and reading text with Manrope navigation, metadata and interface text. Serif and sans-serif system fallbacks remain available if Google Fonts cannot load.

## Palette

- Deep navy: `#102c50` — headings, structure, footer.
- BioScope blue: `#245fb3` — navigation state, links, rules and emphasis.
- Pale blue: `#eff5fd` — restrained supporting panels.
- Charcoal: `#273544` — reading text.
- White — the main canvas.

## Editorial photography and logo

Current article covers use topic-specific editorial photo-style images with tight framing, navy and steel-blue tones, controlled highlights and no prominent faces. Generated images are disclosed in the article caption. Each article has a full-size WebP and thumbnail assigned in site/editorial-images.js. Homepage image boxes retain their previous dimensions; article covers are 300px tall on desktop and 190px on mobile.

The supplied approved BioScope logo is used without recoloring or distortion. A trimmed PNG removes only its empty border to increase its visible size within the existing masthead and footer placement. The original file remains alongside it. The footer supplies a white backing for contrast.

The previous SVG artwork and its generator are retained for history but are not used by current article covers. Article text, source citations, dates, company information and archive behavior are independent of the image layer.

## Implementation

`site/house-style.css` contains the current design tokens and responsive refinements over the existing layout. Keep interfaces readable at 390px and wide desktop widths, maintain keyboard focus indicators, and respect reduced-motion preferences. Avoid gradients, bright secondary colors, decorative dashboards and unnecessary motion.
