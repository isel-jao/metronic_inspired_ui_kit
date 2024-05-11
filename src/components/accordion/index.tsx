import { cn } from "@/utils";
import React, { useId } from "react";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    trigger: React.ReactNode;
    value: string;
    content: React.ReactNode;
  }[];
  single?: boolean;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  single,
  onValueChange,
  ...props
}) => {
  const id = useId();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(event.target.value);
  };

  return (
    <div className={cn("flex flex-col divide-y", className)} {...props}>
      {items.map((item) => (
        <div className="flex flex-col" key={id + item.value}>
          <label
            role="button"
            className="flex select-none items-center font-semibold hover:underline"
            htmlFor={id + item.value}
          >
            {item.trigger}
          </label>
          <input
            className="peer"
            type={single ? "radio" : "checkbox"}
            name={id}
            id={id + item.value}
            value={item.value}
            defaultChecked={
              single && item.value === props.defaultValue ? true : false
            }
            onChange={handleOnChange}
            hidden
          />
          <div className=" grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out peer-checked:grid-rows-[1fr] [&>div]:overflow-hidden">
            <div>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
