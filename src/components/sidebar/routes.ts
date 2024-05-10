export type Route = {
  name: string;
  icon?: React.ReactNode;
} & (
  | {
      path: string;
    }
  | {
      children: Route[];
    }
);

export const routes: Route[] = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Components",
    children: [
      {
        name: "Button",
        path: "/components/button",
      },
    ],
  },
];
