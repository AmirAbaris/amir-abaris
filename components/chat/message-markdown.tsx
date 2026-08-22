import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  p: ({ children }) => <p className="[&:not(:last-child)]:mb-2">{children}</p>,
  ul: ({ children }) => <ul className="list-disc space-y-1 pl-4 [&:not(:last-child)]:mb-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-1 pl-4 [&:not(:last-child)]:mb-2">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-foreground/10 px-1 py-0.5 font-mono text-xs">{children}</code>
  ),
};

export function MessageMarkdown({ text }: { text: string }) {
  return (
    <div className="text-sm leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {text}
      </ReactMarkdown>
    </div>
  );
}
