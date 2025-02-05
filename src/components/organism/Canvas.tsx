import canvasInitialBackground from "../../assets/canvasInitial.png";
import { useEditorContext } from "../../context/editorContext";
import { ImageElement } from "../molecules/ImageElement";
import { TextElement } from "../molecules/TextElement";

export const Canvas = () => {
  const { elements, background, isDirty, editorRef } = useEditorContext();
  const canvasBackground = isDirty ? background : canvasInitialBackground;

  return (
    <div
      ref={editorRef}
      className="aspect-[4/5] w-full  max-[1300px]:row-start-2 justify-self-end"
    >
      <div
        className={`relative w-full h-full ${isDirty ? "bg-black-50" : ""}`}
        style={{
          backgroundImage: `url(${canvasBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
