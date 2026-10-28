import type { Section } from "@/content/types";
import { InlineText } from "./InlineText";

export function ContentSections({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-content">
      {sections.map((section) => {
        const level = section.level ?? 2;
        const Heading = level === 3 ? "h3" : "h2";
        return (
          <section key={section.heading}>
            <Heading>{section.heading}</Heading>
            {section.paragraphs?.map((paragraph, index) => (
              <p key={`p-${index}`}>
                <InlineText text={paragraph} />
              </p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet, index) => (
                  <li key={`b-${index}`}>
                    <InlineText text={bullet} />
                  </li>
                ))}
              </ul>
            ) : null}
            {section.steps ? (
              <ol>
                {section.steps.map((step, index) => (
                  <li key={`s-${index}`}>
                    <InlineText text={step} />
                  </li>
                ))}
              </ol>
            ) : null}
            {section.table ? (
              <div className="overflow-x-auto">
                <table>
                  <caption>{section.table.caption}</caption>
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={`row-${rowIndex}`}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={`cell-${cellIndex}`} scope="row">
                              {cell}
                            </th>
                          ) : (
                            <td key={`cell-${cellIndex}`}>{cell}</td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {section.code ? (
              <figure className="my-4">
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
                  <code>{section.code.content}</code>
                </pre>
                {section.code.caption ? (
                  <figcaption className="mt-1 text-xs text-[var(--muted)]">
                    {section.code.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
