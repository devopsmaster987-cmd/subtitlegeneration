import type { FaqItem } from "@/content/types";
import { InlineText } from "./InlineText";

export function FaqList({
  faqs,
  heading = "Frequently asked questions"
}: {
  faqs: FaqItem[];
  heading?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="mt-10">
      <h2 id="faq-heading" className="text-2xl font-bold">
        {heading}
      </h2>
      <div className="mt-3 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-3">
            <summary className="cursor-pointer font-semibold marker:text-brand-600">
              {faq.question}
            </summary>
            <p className="mt-2 text-[var(--ink)]">
              <InlineText text={faq.answer} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
