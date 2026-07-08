import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return { title: t("titleLanding") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("Hero");
  const tMission = await getTranslations("Mission");
  const tCap = await getTranslations("Capabilities");
  const tProd = await getTranslations("Products");
  const tContact = await getTranslations("Contact");

  const words = tHero.raw("words") as string[];
  const capItems = tCap.raw("items") as { tag: string; title: string; body: string }[];
  const prostaff = tProd.raw("prostaff");

  return (
    <>
      <SiteNav locale={locale as Locale} pathname="/" />

      <header className="hero">
        <div className="wrap">
          <span className="hero-kicker">
            <span className="diamond" />
            {tHero("kicker")}
          </span>
          <h1>
            <span className="lead">{tHero("lead")}</span>
            <span className="rotate">
              {words.map((w, i) => (
                <span className="word" key={i}>
                  {w}
                </span>
              ))}
            </span>
          </h1>
          <div className="hero-below">
            <p className="hero-sub" dangerouslySetInnerHTML={{ __html: tHero.raw("sub") }} />
            <p className="hero-note" dangerouslySetInnerHTML={{ __html: tHero.raw("note") }} />
          </div>
        </div>
      </header>

      <section id="missao">
        <div className="wrap">
          <div className="sec-label">
            <span className="idx">01</span>
            <span>{tMission("sectionLabel")}</span>
          </div>
          <p className="mission-statement">
            <span className="dim">{tMission("statementPrefix")}</span>
            <span className="hi">{tMission("statementHighlight")}</span>
            <span className="dim">{tMission("statementSuffix")}</span>
          </p>
          <div className="mission-follow">
            <p>{tMission("follow")}</p>
            <Link href="/about" className="mission-link">
              {tMission("link")}
            </Link>
          </div>
        </div>
      </section>

      <section id="capacidades">
        <div className="wrap">
          <div className="sec-label">
            <span className="idx">02</span>
            <span>{tCap("sectionLabel")}</span>
          </div>
          <div className="cap-head">
            <h2>{tCap("heading")}</h2>
            <p>{tCap("intro")}</p>
          </div>
          {capItems.map((item, i) => (
            <div className="cap-row" key={i}>
              <span className="cap-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <span className="cap-tag">{item.tag}</span>
              </div>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos">
        <div className="wrap">
          <div className="sec-label">
            <span className="idx">03</span>
            <span>{tProd("sectionLabel")}</span>
          </div>
          <div className="cap-head">
            <h2>{tProd("heading")}</h2>
            <p>{tProd("pageIntro")}</p>
          </div>
          <Link href="/products#prostaff" className="proud-card proud-card-solo">
            <div className="proud-header">
              <Image src="/logos/prostaff-logo.png" alt="ProStaff" width={40} height={40} />
              <span className="p-name">ProStaff</span>
            </div>
            <div className="proud-body">
              <p>{prostaff.tagline}</p>
            </div>
          </Link>
          <Link href="/products" className="mission-link mt-10">
            {tProd("viewAll")}
          </Link>
        </div>
      </section>

      <section id="contato">
        <div className="wrap">
          <div className="sec-label">
            <span className="idx">04</span>
            <span>{tContact("sectionLabel")}</span>
          </div>
          <div className="contact-block">
            <h2>{tContact("heading")}</h2>
            <a href="mailto:contato@effront.gg" className="contact-mail">
              contato@effront.gg
            </a>
            <p className="contact-sub">{tContact("sub")}</p>
          </div>
        </div>
      </section>

      <div className="watermark" aria-hidden="true">
        <span>EFFRONT</span>
      </div>

      <SiteFooter />
    </>
  );
}
