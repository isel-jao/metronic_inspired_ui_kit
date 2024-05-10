import { cn } from "@/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface StoryProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  children: React.ReactNode;
  title: string;
}

export const Story = ({ code, children, title, ...props }: StoryProps) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 3_000);
  };

  return (
    <div {...props}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex border-b ">
        <button
          className="border-b-2 border-transparent px-4 pb-2 text-lg text-foreground/50 data-[visible=true]:border-foreground data-[visible=true]:text-foreground"
          data-visible={!codeVisible}
          onClick={() => setCodeVisible(false)}
        >
          example
        </button>
        <button
          onClick={() => setCodeVisible(true)}
          className="border-b-2 border-transparent px-4 pb-2 text-lg text-foreground/50 data-[visible=true]:border-foreground data-[visible=true]:text-foreground"
          data-visible={codeVisible}
        >
          code
        </button>
      </div>
      <div className={cn("relative mt-4 overflow-hidden rounded border")}>
        {codeVisible ? (
          <>
            <SyntaxHighlighter
              language="react"
              style={{
                ...docco,
              }}
            >
              {code}
            </SyntaxHighlighter>
            <button
              className="absolute right-2 top-2 grid size-8 place-content-center rounded border bg-card shadow-sm hover:shadow-md"
              onClick={copyCode}
            >
              {isCopied ? (
                <CheckIcon className="text-green-500" />
              ) : (
                <ClipboardIcon size={20} />
              )}
            </button>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};
