import { XIcon, InstagramIcon, YouTubeIcon } from "./icons";

/**
 * Placeholder hrefs — the Effront social handles are confirmed available
 * (X, Instagram, YouTube) but not yet claimed. Fill in real URLs once the
 * accounts exist.
 */
export function SocialLinks({ name = "Effront" }: { name?: string }) {
  return (
    <div className="foot-social">
      <a href="#" aria-label={`${name} - X`}>
        <XIcon width={13} height={13} />
      </a>
      <a href="#" aria-label={`${name} - Instagram`}>
        <InstagramIcon width={13} height={13} />
      </a>
      <a href="#" aria-label={`${name} - YouTube`}>
        <YouTubeIcon width={13} height={13} />
      </a>
    </div>
  );
}
