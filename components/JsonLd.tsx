const siteUrl = "https://www.wemorphai.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Morph AI",
      alternateName: ["We Morph AI", "MorphAI", "wemorphai"],
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      email: "morphaiofficial@gmail.com",
      description:
        "Morph AI — Shape Shifting Intelligence. Enterprise Voice AI, agentic AI, and adaptive AI systems.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Morph AI",
      alternateName: ["We Morph AI", "MorphAI"],
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
