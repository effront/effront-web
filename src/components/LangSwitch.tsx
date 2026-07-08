import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const LABELS: Record<Locale, string> = { en: "EN", pt: "PT", es: "ES", ko: "KO" };

/**
 * Server component: renders one <a> per locale pointing at the same page,
 * so switching language is a real navigation (works without JS, SEO-visible).
 */
export function LangSwitch({ locale, pathname }: { locale: Locale; pathname: string }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {routing.locales.map((loc) => (
        <a
          key={loc}
          href={getPathname({ locale: loc, href: pathname })}
          data-active={loc === locale}
        >
          {LABELS[loc]}
        </a>
      ))}
    </div>
  );
}
