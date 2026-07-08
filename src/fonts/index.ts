import localFont from "next/font/local";

export const inter = localFont({
  src: "./Inter-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

export const bricolage = localFont({
  src: "./BricolageGrotesque-Variable.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});
