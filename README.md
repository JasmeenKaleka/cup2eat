# CUP2EAT

Next.js App Router, React, TypeScript, Tailwind CSS 4 and GSAP ScrollTrigger. Static export has no backend or secrets.

## Run

```
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

`out/` contains the deployable static site. Use a static HTTP server for production preview; `next start` does not serve static exports.

## Content

Edit `lib/content.ts` to update products, pack quantities, catalogue reference prices and award descriptions. `DESIGN.md` documents catalogue contradictions and source decisions. `asset-index.txt` maps media identifiers to original Instagram filenames. Original archive is unchanged and ignored by Git. Public catalogue and certificates retain original resolution. Photo crops and hero mask derive only from supplied assets.

Contact: Instagram captions verify +91 9818192575 and Varunkhera6@gmail.com. The enquiry form validates input and prepares a WhatsApp message; the visitor must explicitly send it in WhatsApp. There is no automatic submission or stored customer data. Honeypot input discourages automated drafts. Any future backend must add server-side validation, request throttling and appropriate privacy handling.

Confirm current prices, shipping, taxes, ingredients/allergens, beverage holding conditions and vegan suitability by variant with the business before accepting payment. No checkout or stock claim is made.

## Motion

A scoped GSAP matchMedia context controls entrance, idle cup motion, steam, amber illumination and scroll narrative. All animation resources are reverted on unmount. Pointer tilt has no touch dependency. Reduced motion leaves the complete page readable without animated reveals. No WebGL or generated product imagery.
