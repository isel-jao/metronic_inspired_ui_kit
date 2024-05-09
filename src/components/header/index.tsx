import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fixed left-sidebar-width right-0 top-0 flex h-header shrink-0 items-center gap-4 border px-8 font-semibold transition-[left] duration-300">
      <Link to="/">
        <button className="rounded-sm px-3 py-1.5 text-primary shadow">
          Dashboard
        </button>
      </Link>
      <Link to="/components">
        <button className="rounded-sm px-3 py-1.5 hover:text-primary ">
          Components
        </button>
      </Link>
      <Link to="/dev">
        <button className="rounded-sm px-3 py-1.5 hover:text-primary ">
          Dev
        </button>
      </Link>
    </div>
  );
};
