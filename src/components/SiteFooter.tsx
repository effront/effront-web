import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <div className="wrap">
        <div className="foot-brand">
          <Link href="/" className="wordmark text-[18px]">
            Effront<span className="dot">.</span>
          </Link>
          <span className="foot-tagline">Tech for eSports</span>
        </div>
        <nav className="foot-nav">
          <Link href="/careers">{t("careers")}</Link>
          <Link href="/news">{t("news")}</Link>
          <Link href="/privacy">{t("privacy")}</Link>
          <Link href="/media-kit">{t("mediaKit")}</Link>
        </nav>
        <SocialLinks />
        <span className="copyright">{t("copyright")}</span>
      </div>
    </footer>
  );
}
