import { Link } from "react-router-dom";
import { Route } from "../routes";

export const RouteItem = ({ route }: { route: Route; level?: number }) => {
  if ("path" in route) {
    return (
      <Link to={route.path} className="px-4 py-2 font-semibold  ">
        {route.name}
      </Link>
    );
  }
  return (
    <>
      <div className=" flex items-center px-4 py-2 font-semibold">
        {route.icon}
        <span>{route.name}</span>
      </div>
      <div className="flex flex-col pl-4">
        {route.children.map((child) => (
          <RouteItem key={child.name} route={child} />
        ))}
      </div>
    </>
  );
};
