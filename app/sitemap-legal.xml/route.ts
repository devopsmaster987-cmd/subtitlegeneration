import { legalSitemapEntries, renderUrlset, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(legalSitemapEntries()), { headers: XML_HEADERS });
}
