import { Button } from "@/components/button";

export default function DevPage() {
  return (
    <main className=" p-6">
      <h2 className="text-xl font-semibold">Buttons</h2>
      <h3 className="mt-4 text-lg font-semibold">Variants:</h3>
      <div className="mt-2 flex gap-2">
        <Button> primary</Button>
        <Button variant="outlined"> Outlined</Button>
        <Button variant="muted"> Muted</Button>
        <Button variant="text"> Text</Button>
      </div>
      <h3 className="mt-4 text-lg font-semibold">Sizes:</h3>
      <div className="mt-2 flex items-center gap-2 ">
        <Button size="lg"> Large</Button>
        <Button> Medium</Button>
        <Button size="sm"> Small</Button>
        <Button size="icon">🚀</Button>
        <span>{"(icon)"}</span>
      </div>
    </main>
  );
}
