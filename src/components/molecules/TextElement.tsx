import { useTextElement } from "@hooks/useTextElement";

import { Element } from "../../types";
import { BlockWrapper } from "./BlockWrapper";
import { ColorsToolbar } from "./ColorsToolbar";

type TextElementProps = Omit<Element, "src">;

export const TextElement = ({ id }: TextElementProps) => {
  const { ref, text, color, onChange, onChangeColor } = useTextElement();

  return (
    <BlockWrapper
      elementId={id}
      padding={{ x: 24, y: 12 }}
      initialSize={{ width: 350, height: 120 }}
      additionalControl={
        <div className="absolute bottom-[-32px] left-0 pt-[8px]">
          <ColorsToolbar currentColor={color} onChangeColor={onChangeColor} />
        </div>
      }
    >
      <textarea
        ref={ref}
        id={`text-element-${id}`}
        name={`text-element-${id}`}
        onChange={onChange}
        value={text}
        placeholder="Type your text here"
        style={{ color }}
        className="w-full h-full text-display resize-none focus:outline-none text-center  placeholder:uppercase placeholder:text-black-100 placeholder:opacity-25"
      />
    </BlockWrapper>
  );
};
