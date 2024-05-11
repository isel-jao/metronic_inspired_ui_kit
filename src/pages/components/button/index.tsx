import { Button } from "@/components/button";
import { Story } from "@/components/story";

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

const disabledCode = `import { Button } from "@/components/button";

export default function App() {
  return (
    <div className="p-4">
      <div className="flex gap-2">
        <Button disabled> primary</Button>
        <Button disabled variant="outlined"> Outlined</Button>
        <Button disabled variant="muted"> Muted</Button>
        <Button disabled variant="text"> Text</Button>
      </div>
    </div>
  );
}
`;

export default function ButtonPage() {
  return (
    <div className="mx-auto  max-w-screen-2xl p-6">
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
      <Story title="Disabled" className="mt-6" code={disabledCode}>
        <div className="p-4">
          <div className="flex gap-2">
            <Button disabled> primary</Button>
            <Button disabled variant="outlined">
              Outlined
            </Button>
            <Button disabled variant="muted">
              Muted
            </Button>
            <Button disabled variant="text">
              Text
            </Button>
          </div>
        </div>
      </Story>
    </div>
  );
}
