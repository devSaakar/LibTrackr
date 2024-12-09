import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import { FC } from "react";
import { cn } from "../lib/utils";

interface ReleaseNotesProps {
  releaseNotes: string;
}

const ReleaseNotes: FC<ReleaseNotesProps> = ({ releaseNotes }) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }: {
            inline?: boolean;
            className?: string;
            children?: React.ReactNode;
          }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className={cn(
                  "bg-gray-100 text-sm font-mono px-1 py-0.5 rounded",
                  className
                )}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {releaseNotes}
      </ReactMarkdown>
    </div>
  );
};

export default ReleaseNotes;
