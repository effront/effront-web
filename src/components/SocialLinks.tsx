import { XIcon, InstagramIcon, YouTubeIcon } from "./icons";

type Socials = { x: string; instagram: string; youtube: string };

/**
 * Per-brand social URLs. Effront's accounts are live; the other ecosystem
 * brands are placeholders ("#") until their handles are claimed.
 */
const SOCIALS: Record<string, Socials> = {
  Effront: {
    x: "https://x.com/effrontgg",
    instagram: "https://www.instagram.com/effront.gg/",
    youtube: "https://www.youtube.com/@effront",
  },
};

const PLACEHOLDER: Socials = { x: "#", instagram: "#", youtube: "#" };

export function SocialLinks({ name = "Effront" }: { name?: string }) {
  const socials = SOCIALS[name] ?? PLACEHOLDER;
  const external = (href: string) =>
    href === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="foot-social">
      <a href={socials.x} aria-label={`${name} - X`} {...external(socials.x)}>
        <XIcon width={13} height={13} />
      </a>
      <a
        href={socials.instagram}
        aria-label={`${name} - Instagram`}
        {...external(socials.instagram)}
      >
        <InstagramIcon width={13} height={13} />
      </a>
      <a href={socials.youtube} aria-label={`${name} - YouTube`} {...external(socials.youtube)}>
        <YouTubeIcon width={13} height={13} />
      </a>
    </div>
  );
}
