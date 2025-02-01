import { AVAILABLE_COLORS } from "../../hooks/useTextElement";

type ColorsToolbarProps = {
  currentColor: string;
  onChangeColor: (color: string) => void;
};

export const ColorsToolbar = ({
  currentColor,
  onChangeColor,
}: ColorsToolbarProps) => {
  return (
    <div className="flex gap-1">
      {AVAILABLE_COLORS.map((color) => {
        return (
          <button
            key={color}
            onClick={() => onChangeColor(color)}
            className={`cursor-pointer rounded-full p-[2px] border-[2px]  ${
              currentColor === color ? "border-white" : "border-transparent"
            } `}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </button>
        );
      })}
    </div>
  );
};
