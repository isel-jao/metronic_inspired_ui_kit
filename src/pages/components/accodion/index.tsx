import { Accordion } from "@/components/accordion";
import { Story } from "@/components/story";
import { useState } from "react";

const posts = [
  {
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Post 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Post 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const commonCode = `import { Accordion } from "@/components/accordion";

const posts = ${JSON.stringify(posts, null, 2)};

`;

const singleCode =
  commonCode +
  `export default function App() {
    return (
        <div className="p-4">
            <Accordion
            single
            items={posts.map((post) => ({
                trigger: <h2 className="  py-2">{post.title}</h2>,
                value: post.title,
                content: <p className="py-2 ">{post.content}</p>,
            }))}
            />
        </div>
        );
    }
`;

const multipleCode =
  commonCode +
  `export default function App() {
    return (
        <div className="p-4">
            <Accordion
            items={posts.map((post) => ({
                trigger: <h2 className="  py-2">{post.title}</h2>,
                value: post.title,
                content: <p className="py-2 ">{post.content}</p>,
            }))}
            />
        </div>
        );
    }
`;

const onValueChangeCode =
  `import { useState } from "react"` +
  commonCode +
  `export default function App() {
    const [value, setValue] = useState<string>("Post 1");
    return (
        <div className="p-4">
            <div>
                Selected: <b>{value}</b>
            </div>
            <Accordion
            single
            onValueChange={setValue}
            defaultValue={value}
            items={posts.map((post) => ({
                trigger: <h2 className="  py-2">{post.title}</h2>,
                value: post.title,
                content: <p className="py-2 ">{post.content}</p>,
            }))}
            />
        </div>
        );
    }
`;

export default function AccordionPage() {
  const [value, setValue] = useState<string>("Post 1");
  return (
    <main className=" mx-auto h-fit max-w-screen-2xl p-6">
      <Story title="Single" code={singleCode}>
        <div className="p-4">
          <Accordion
            single
            items={posts.map((post) => ({
              trigger: <h2 className="  py-2">{post.title}</h2>,
              value: post.title,
              content: <p className="py-2 ">{post.content}</p>,
            }))}
          />
        </div>
      </Story>
      <Story title="Multiple" className="mt-6" code={multipleCode}>
        <div className="p-4">
          <Accordion
            items={posts.map((post) => ({
              trigger: <h2 className="  py-2">{post.title}</h2>,
              value: post.title,
              content: <p className="py-2 ">{post.content}</p>,
            }))}
          />
        </div>
      </Story>
      <Story
        title="onValueChange / defaultValue"
        className="mt-6"
        code={onValueChangeCode}
      >
        <div className="p-4">
          <div>
            Selected: <b>{value}</b>
          </div>
          <Accordion
            single
            onValueChange={setValue}
            defaultValue={value}
            items={posts.map((post) => ({
              trigger: <h2 className="  py-2">{post.title}</h2>,
              value: post.title,
              content: <p className="py-2 ">{post.content}</p>,
            }))}
          />
        </div>
      </Story>
    </main>
  );
}
