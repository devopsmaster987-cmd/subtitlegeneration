import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const label = match[1] ?? "";
    const href = match[2] ?? "#";
    if (/^https?:\/\//.test(href)) {
      nodes.push(
        <a key={`link-${key++}`} href={href} rel="noreferrer noopener" target="_blank">
          {label}
        </a>
      );
    } else {
      nodes.push(
        <Link key={`link-${key++}`} href={href}>
          {label}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}
