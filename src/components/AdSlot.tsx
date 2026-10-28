import { site } from "@/config/site";
import { AdUnit } from "./AdUnit";

type Placement = "below-tool" | "in-content" | "article-end" | "sidebar";

interface AdSlotProps {
  placement: Placement;
  label?: string;
}

/**
 * Ads are rendered only when ADS_ENABLED is true. When false this component
 * emits no markup at all, so no empty boxes or placeholder gaps appear.
 */
export function AdSlot({ placement, label = "Advertisement" }: AdSlotProps) {
  if (!site.ads.enabled) return null;
  return (
    <aside className="my-8" aria-label="Advertisement">
      <p className="mb-1 text-xs uppercase tracking-wide text-[var(--muted)]">{label}</p>
      <AdUnit placement={placement} />
    </aside>
  );
}
