# Product screenshots

Drop a product screenshot here named `<id>.webp` and the home "Our products"
showcase picks it up automatically (no code change) — until then it shows a
placeholder.

Valid ids (match `src/data/products.ts`):

- `prostaff.webp`
- `scrims.webp`
- `arenabr.webp`
- `peneira.webp`

Recommended: ~760×470 (roughly 16:10), WebP. The panel scales it responsively.

Product **stats** and **clients** are not files — add them in
`src/data/products.ts` (each product's `stats` / `clients` arrays). A block only
renders once its array has entries.
