import { ActionButton } from "../atoms/ActionButton";

import textActionIcon from "../../assets/textAction.svg";
import imgActionIcon from "../../assets/imgAction.svg";
import bgAction from "../../assets/bgAction.svg";
import { useEditorContext } from "../../context/editorContext";

export const ContentActions = () => {
  const { addElement, addBackground } = useEditorContext();

  const addTextElement = () => {
    addElement({ type: "text" });
  };

  const addImgElement = () => {
    addElement({ type: "img", src: "string" });
  };

  return (
    <div className="grid grid-cols-2 gap-x-[29px] gap-y-[32px] mb-auto">
      <ActionButton
        icon={textActionIcon}
        label="Text"
        onClick={addTextElement}
      />
      <ActionButton
        icon={imgActionIcon}
        label="Image"
        onClick={addImgElement}
      />
      <ActionButton icon={bgAction} label="Background" onClick={() => {}} />
    </div>
  );
};
