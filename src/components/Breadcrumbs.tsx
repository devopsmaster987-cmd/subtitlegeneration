import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/config/site";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href === "/" ? "" : item.href}`
    }))
  };
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--muted)]">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index < all.length - 1 ? (
                <>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
