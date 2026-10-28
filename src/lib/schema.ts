import type { BasePageContent } from "@/content/types";
import { authorEntity, organizationEntity, websiteEntity } from "@/data/entities";
import { site } from "@/config/site";

export function articleSchema(page: BasePageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.metaDescription,
    datePublished: page.published,
    dateModified: page.updated,
    author: authorEntity,
    publisher: organizationEntity,
    mainEntityOfPage: `${site.url}${page.path}`,
    inLanguage: "en",
    isPartOf: { "@id": `${site.url}/#website` }
  };
}

export function faqSchema(page: BasePageContent) {
  if (page.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

export function webApplicationSchema(page: BasePageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: page.h1,
    url: `${site.url}${page.path}`,
    description: page.metaDescription,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any modern browser",
    browserRequirements: "Requires JavaScript and WebAssembly; WebGPU optional",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Local Whisper transcription in the browser",
      "SRT, VTT and TXT export",
      "Editable timed cues",
      "No account required"
    ],
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` }
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${site.name} — free voice to text and subtitle generator`,
    url: site.url,
    description: site.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any modern browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: organizationEntity,
    isPartOf: websiteEntity
  };
}
