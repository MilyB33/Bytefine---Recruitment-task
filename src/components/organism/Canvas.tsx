import canvasInitialBackground from "../../assets/canvasInitial.png";
import { useEditorContext } from "../../context/editorContext";
import { ImageElement } from "../molecules/ImageElement";
import { TextElement } from "../molecules/TextElement";

export const Canvas = () => {
  const { elements, background, isDirty, editorRef } = useEditorContext();

  return (
    <div
      ref={editorRef}
      className="flex aspect-[4/5] h-full items-center justify-center"
    >
      <div
        className={`relative w-full h-full ${isDirty ? "bg-black-50" : ""}`}
        style={
          !isDirty
            ? {
                backgroundImage: `url(${canvasInitialBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : background
            ? {
                backgroundImage: `url(${background})`,
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
            return <ImageElement {...element} key={element.id} />;
          }
        })}
      </div>
    </div>
  );
};
