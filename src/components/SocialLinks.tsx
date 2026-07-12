import { XIcon, InstagramIcon, YouTubeIcon, GlobeIcon } from "./icons";

type Brand = {
  x?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
};

/**
 * Per-brand links. Only the channels a brand actually has are listed, so each
 * card renders exactly the icons it should — no dead placeholders.
 */
const SOCIALS: Record<string, Brand> = {
  Effront: {
    x: "https://x.com/effrontgg",
    instagram: "https://www.instagram.com/effront.gg/",
    youtube: "https://www.youtube.com/@effront",
  },
  ProStaff: {
    x: "https://x.com/ProStaffGG",
    instagram: "https://www.instagram.com/prostaff.gg/",
    youtube: "https://www.youtube.com/@ProstaffGG",
  },
  ArenaBR: {
    website: "https://arena-br.vercel.app",
  },
  "scrims.lol": {
    website: "https://scrims.lol",
  },
  "peneira.gg": {
    instagram: "https://www.instagram.com/peneira.gg/",
    website: "https://peneira.gg/",
  },
};

const LINKS: {
  key: keyof Brand;
  label: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}[] = [
  { key: "x", label: "X", Icon: XIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "youtube", label: "YouTube", Icon: YouTubeIcon },
  { key: "website", label: "Website", Icon: GlobeIcon },
];

export function SocialLinks({ name = "Effront" }: { name?: string }) {
  const brand = SOCIALS[name];
  if (!brand) return null;

  return (
    <div className="foot-social">
      {LINKS.map(({ key, label, Icon }) => {
        const href = brand[key];
        if (!href) return null;
        return (
          <a
            key={key}
            href={href}
            aria-label={`${name} - ${label}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon width={13} height={13} />
          </a>
        );
      })}
    </div>
  );
}
