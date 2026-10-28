import { site } from "@/config/site";

/** Entity definitions reused by schema, the About page and all author boxes. */
export const organizationEntity = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contactEmail,
  founder: { "@id": `${site.url}/about#author` }
} as const;

export const websiteEntity = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en"
} as const;

export const authorEntity = {
  "@type": "Person",
  "@id": `${site.url}/about#author`,
  name: site.author.name,
  jobTitle: site.author.role,
  description: site.author.bio,
  url: `${site.url}${site.author.urlPath}`
} as const;

export const siteDescription = site.description;
