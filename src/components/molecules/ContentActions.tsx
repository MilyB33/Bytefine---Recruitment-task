import { ActionButton } from "../atoms/ActionButton";

import textActionIcon from "../../assets/textAction.svg";
import imgActionIcon from "../../assets/imgAction.svg";
import bgActionIcon from "../../assets/bgAction.svg";
import { useEditorContext } from "../../context/editorContext";
import { ImageActionButton } from "../atoms/ImageActionButton";

export const ContentActions = () => {
  const { addElement, addBackground } = useEditorContext();

  const addTextElement = () => {
    addElement({ type: "text" });
  };

  const addImgElement = (src: string) => {
    addElement({ type: "img", src });
  };

  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-8 max-[1600px]:gap-y-3 max-[1600px]:gap-x-3 mb-auto">
      <ActionButton
        icon={textActionIcon}
        label="Text"
        onClick={addTextElement}
      />
      <ImageActionButton
        icon={imgActionIcon}
        label="Image"
        onLoad={addImgElement}
        name="image"
      />
      <ImageActionButton
        icon={bgActionIcon}
        label="Background"
        onLoad={addBackground}
        name="background"
      />
    </div>
  );
};
