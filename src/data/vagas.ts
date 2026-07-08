export type VagaCategory = "dev" | "design" | "content" | "marketing";

export type Vaga = {
  id: string;
  cat: VagaCategory;
  location: string;
  title: Record<"pt" | "en" | "es" | "ko", string>;
  summary: Record<"pt" | "en" | "es" | "ko", string>;
  body: Record<"pt" | "en" | "es" | "ko", string>;
};

/**
 * Real Effront openings. Empty array = no open roles — this is a rule, not a
 * gap: we don't list ghost jobs to look bigger. To open a role, add an entry
 * following the shape above; the id becomes the URL (/careers/<id>).
 */
export const VAGAS: Vaga[] = [];
