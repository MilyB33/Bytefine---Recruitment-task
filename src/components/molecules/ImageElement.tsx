import { useEffect, useRef } from "react";
import { Element } from "../../types";
import { BlockWrapper } from "./BlockWrapper";

type ImageElementProps = Element;

export const ImageElement = ({ id, src }: ImageElementProps) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <BlockWrapper elementId={id} initialSize={{ width: 200, height: 200 }}>
      <img
        ref={ref}
        src={src}
        className="w-full h-full cursor-pointer"
        tabIndex={0}
      />
    </BlockWrapper>
  );
};
