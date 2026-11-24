import { renderUrlset, toolSitemapEntries, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlset(toolSitemapEntries()), { headers: XML_HEADERS });
}
