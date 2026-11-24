import { renderSitemapIndex, sitemapIndexChildren, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapIndex(sitemapIndexChildren()), { headers: XML_HEADERS });
}
