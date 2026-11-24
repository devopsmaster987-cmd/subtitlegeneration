import { guideSitemapEntries, renderUrlset, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(guideSitemapEntries()), { headers: XML_HEADERS });
}
