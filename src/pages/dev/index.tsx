import { Button } from "@/components/button";
import { cn } from "@/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const variantsCode = `import { Button } from "@/components/button";

export default function App() {
  return (
    <div className="p-4">
      <div className="flex gap-2">
        <Button> primary</Button>
        <Button variant="outlined"> Outlined</Button>
        <Button variant="muted"> Muted</Button>
        <Button variant="text"> Text</Button>
      </div>
    </div>
  );
}
`;

const sizesCode = `import { Button } from "@/components/button";

export default function App() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 ">
        <Button size="lg"> Large</Button>
        <Button> Medium</Button>
        <Button size="sm"> Small</Button>
        <Button size="icon">🚀</Button>
        <span>{"(icon)"}</span>
      </div>
    </div>
  );
}
`;

interface StoryProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  children: React.ReactNode;
  title: string;
}
const Story = ({ code, children, title, ...props }: StoryProps) => {
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
      <h3 className="text-xl">{title}</h3>
      <div className="flex border-b ">
        <button
          className="border-b-2 border-transparent px-4 py-2 text-lg text-foreground/50 data-[visible=true]:border-foreground data-[visible=true]:text-foreground"
          data-visible={!codeVisible}
          onClick={() => setCodeVisible(false)}
        >
          example
        </button>
        <button
          onClick={() => setCodeVisible(true)}
          className="border-b-2 border-transparent px-4 py-2 text-lg text-foreground/50 data-[visible=true]:border-foreground data-[visible=true]:text-foreground"
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
              {variantsCode}
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

export default function DevPage() {
  return (
    <main className="  mx-auto max-w-screen-2xl p-6">
      <Story title="Variants" code={variantsCode}>
        <div className="p-4">
          <div className="flex gap-2">
            <Button> primary</Button>
            <Button variant="outlined"> Outlined</Button>
            <Button variant="muted"> Muted</Button>
            <Button variant="text"> Text</Button>
          </div>
        </div>
      </Story>
      <Story title="Sizes" className="mt-6" code={sizesCode}>
        <div className="p-4">
          <div className="flex items-center gap-2 ">
            <Button size="lg"> Large</Button>
            <Button> Medium</Button>
            <Button size="sm"> Small</Button>
            <Button size="icon">🚀</Button>
            <span>{"(icon)"}</span>
          </div>
        </div>
      </Story>
    </main>
  );
}
