import { useEffect, useRef, useState } from "react";

export const AVAILABLE_COLORS = [
  "#353535",
  "#FFFFFF",
  "#CF0000",
  "#0055FF",
  "#00DA16",
];

export const useTextElement = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [color, setColor] = useState(AVAILABLE_COLORS[0]);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onChangeColor = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return { ref, text, color, onChange, onChangeColor };
};
