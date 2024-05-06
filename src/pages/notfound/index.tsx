import { Link } from "react-router-dom";

export default function NotfoundPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl font-bold">Page not found</p>
      <Link to="/" className="text-primary underline">
        Go back to home
      </Link>
    </main>
  );
}
