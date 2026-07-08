"use client";

import { useState } from "react";

export function CopyHexButton({ hex, label }: { hex: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="mk-card-action"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(hex);
        } catch {
          // clipboard API unavailable — no-op, button label still gives visual feedback
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? `✓ ${hex}` : label}
    </button>
  );
}
