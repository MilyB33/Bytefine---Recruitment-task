import { ActionButton } from "../atoms/ActionButton";

import textActionIcon from "../../assets/textAction.svg";
import imgActionIcon from "../../assets/imgAction.svg";
import bgAction from "../../assets/bgAction.svg";
import { useEditorContext } from "../../context/editorContext";
import { FileActionButton } from "../atoms/FileActionButton";

export const ContentActions = () => {
  const { addElement, addBackground } = useEditorContext();

  const addTextElement = () => {
    addElement({ type: "text" });
  };

  const addImgElement = (src: string) => {
    addElement({ type: "img", src });
  };

  return (
    <div className="grid grid-cols-2 gap-x-[29px] gap-y-[32px] mb-auto">
      <ActionButton
        icon={textActionIcon}
        label="Text"
        onClick={addTextElement}
      />
      <FileActionButton
        icon={imgActionIcon}
        label="Image"
        onLoad={addImgElement}
        name="image"
      />
      <FileActionButton
        icon={bgAction}
        label="Background"
        onLoad={addBackground}
        name="background"
      />
    </div>
  );
};
