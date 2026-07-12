"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductStat, ProductClient } from "@/data/products";

export type ShowcaseProduct = {
  id: string;
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  wordmark?: boolean;
  site: string;
  eyebrow: string;
  status?: string;
  body: string;
  features: string[];
  cta: string;
  /** resolved screenshot path, or null when none exists yet */
  image: string | null;
  stats: ProductStat[];
  clients: ProductClient[];
};

type Labels = {
  stats: string;
  clients: string;
  comingSoon: string;
  previewSoon: string;
};

export function ProductsShowcase({
  products,
  labels,
}: {
  products: ShowcaseProduct[];
  labels: Labels;
}) {
  const [active, setActive] = useState(0);
  const p = products[active];
  if (!p) return null;

  return (
    <div className="prodshow">
      <div className="prodshow-tabs" role="tablist" aria-label="Products">
        {products.map((prod, i) => (
          <button
            type="button"
            key={prod.id}
            role="tab"
            aria-selected={i === active}
            aria-label={prod.name}
            className={["prodshow-tab", i === active && "is-active", prod.wordmark && "is-wordmark"]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActive(i)}
          >
            <Image src={prod.logo} alt={prod.name} width={prod.logoW} height={prod.logoH} />
          </button>
        ))}
        <span className="prodshow-soon">{labels.comingSoon}</span>
      </div>

      <div className="prodshow-panel" role="tabpanel">
        <div className="prodshow-main">
          <div className="prodshow-info">
            <div className="prodshow-eyebrow">
              <span>{p.eyebrow}</span>
              {p.status ? <span className="prodshow-status">{p.status}</span> : null}
            </div>
            <p className="prodshow-desc">{p.body}</p>
            <ul className="prodshow-features">
              {p.features.map((f, i) => (
                <li key={i}>
                  <span className="prodshow-tick" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <a href={p.site} target="_blank" rel="noopener noreferrer" className="prodshow-cta">
              {p.cta}
            </a>
          </div>

          <div className="prodshow-media">
            {p.image ? (
              <Image
                className="prodshow-shot"
                src={p.image}
                alt={`${p.name} preview`}
                width={760}
                height={470}
              />
            ) : (
              <div className="prodshow-placeholder">
                <Image
                  className={["prodshow-ph-logo", p.wordmark && "is-wordmark"]
                    .filter(Boolean)
                    .join(" ")}
                  src={p.logo}
                  alt=""
                  aria-hidden
                  width={p.logoW}
                  height={p.logoH}
                />
                <span>{labels.previewSoon}</span>
              </div>
            )}
          </div>
        </div>

        {(p.stats.length > 0 || p.clients.length > 0) && (
          <div className="prodshow-meta">
            {p.stats.length > 0 && (
              <div className="prodshow-metacol">
                <div className="prodshow-metalabel">{labels.stats}</div>
                <div className="prodshow-stats">
                  {p.stats.map((s, i) => (
                    <div className="prodshow-stat" key={i}>
                      <div className="prodshow-statlabel">{s.label}</div>
                      <div className="prodshow-statvalue">
                        {s.value}
                        {s.note ? <span className="prodshow-statnote">{s.note}</span> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {p.clients.length > 0 && (
              <div className="prodshow-metacol">
                <div className="prodshow-metalabel">{labels.clients}</div>
                <div className="prodshow-clients">
                  {p.clients.map((c) => (
                    <Image
                      key={c.name}
                      src={c.logo}
                      alt={c.name}
                      width={160}
                      height={c.height ?? 32}
                      style={{ height: c.height ?? 32, width: "auto" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
