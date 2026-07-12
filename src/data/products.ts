export type ProductStat = {
  /** e.g. "Site views / month" */
  label: string;
  /** e.g. "1.8M+" */
  value: string;
  /** optional smaller note next to the value, e.g. "United States" */
  note?: string;
};

export type ProductClient = {
  name: string;
  /** path under /public, e.g. "/partners/riot.webp" */
  logo: string;
  /** rendered height in px (logos are optically balanced, not uniform) */
  height?: number;
};

export type ProductMeta = {
  /** matches the key under the "Products" namespace in messages/*.json */
  id: "prostaff" | "scrims" | "arenabr" | "peneira";
  name: string;
  logo: string;
  /** intrinsic logo dimensions, so next/image keeps the aspect ratio */
  logoW: number;
  logoH: number;
  /** external site the CTA points to */
  site: string;
  /** wide wordmark logos (e.g. ArenaBR) render taller/uncropped in the tab */
  wordmark?: boolean;
  /**
   * Stats + clients are intentionally empty until we have real numbers. The
   * showcase only renders a block when its array has entries, so filling either
   * one in here is all it takes to light it up — no component changes needed.
   */
  stats: ProductStat[];
  clients: ProductClient[];
};

/**
 * Static, non-translatable product metadata. Copy (eyebrow, body, features,
 * cta, status) lives in messages/*.json under "Products". Screenshots are
 * auto-detected from /public/products/<id>.webp — drop the file in and it
 * renders; until then the showcase shows a placeholder.
 */
export const PRODUCTS: ProductMeta[] = [
  {
    id: "prostaff",
    name: "ProStaff",
    logo: "/logos/prostaff-logo.png",
    logoW: 332,
    logoH: 359,
    site: "https://prostaff.gg",
    stats: [],
    clients: [],
  },
  {
    id: "scrims",
    name: "scrims.lol",
    logo: "/logos/scrims-logo.png",
    logoW: 500,
    logoH: 500,
    site: "https://scrims.lol",
    stats: [],
    clients: [],
  },
  {
    id: "arenabr",
    name: "ArenaBR",
    logo: "/logos/arenabr-logo.png",
    logoW: 810,
    logoH: 251,
    site: "https://arena-br.vercel.app",
    wordmark: true,
    stats: [],
    clients: [],
  },
  {
    id: "peneira",
    name: "peneira.gg",
    logo: "/logos/peneira-logo.png",
    logoW: 284,
    logoH: 312,
    site: "https://peneira.gg",
    stats: [],
    clients: [],
  },
];
