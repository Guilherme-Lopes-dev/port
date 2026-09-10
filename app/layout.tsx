import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { EMAIL, LINKEDIN, SITE, education, stack } from "./content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  title: "Guilherme Lopes · Desenvolvedor full stack sênior e tech lead",
  description:
    "Desenvolvedor full stack sênior e tech lead de front end em Goiânia. Reestruturei o módulo de vendas do App Facilita, zerei o backlog de bugs antigos e o uso mensal saiu de 3.000 para 7.000.",
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    title: "Guilherme Lopes · Desenvolvedor full stack sênior e tech lead",
    description:
      "Eu faço o legado parar de quebrar. Tech lead de front end no App Facilita, em Goiânia ou remoto.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#15171a",
};

// Diz ao Google que a página é uma pessoa, não um texto solto sobre uma.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guilherme Lourenço Lopes",
  jobTitle: "Tech Lead de Front End",
  description:
    "Desenvolvedor full stack sênior e tech lead de front end, com foco em reescrever sistemas legados sem parar a entrega.",
  url: SITE,
  email: `mailto:${EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  worksFor: { "@type": "Organization", name: "App Facilita" },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  knowsAbout: stack.flatMap((group) => group.items),
  ...(LINKEDIN ? { sameAs: [LINKEDIN] } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
