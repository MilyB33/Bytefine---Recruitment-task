import canvasInitialBackground from "../../assets/canvasInitial.png";
import { useEditorContext } from "../../context/editorContext";
import { TextElement } from "../molecules/TextElement";

export const Canvas = () => {
  const { elements, isDirty } = useEditorContext();

  return (
    <div className="flex aspect-[4/5] h-full items-center justify-center">
      <div
        className={`relative w-full h-full ${isDirty ? "bg-black-50" : ""}`}
        style={
          !isDirty
            ? {
                backgroundImage: `url(${canvasInitialBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {elements.map((element) => {
          if (element.type === "text") {
            return <TextElement {...element} key={element.id} />;
          }

          if (element.type === "img") {
            return <p key={element.id}>img</p>;
          }
        })}
      </div>
    </div>
  );
};
