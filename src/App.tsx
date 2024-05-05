import { cn } from "./utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded border bg-card  text-card-foreground shadow",
        className,
      )}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <main className="p-6 ">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} className="aspect-sq"></Card>
        ))}
      </div>
    </main>
  );
}

export default App;
