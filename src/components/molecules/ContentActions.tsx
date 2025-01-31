import { ActionButton } from "../atoms/ActionButton";

import textActionIcon from "../../assets/textAction.svg";
import imgActionIcon from "../../assets/imgAction.svg";
import bgAction from "../../assets/bgAction.svg";

export const ContentActions = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[29px] gap-y-[32px] mb-auto">
      <ActionButton icon={textActionIcon} label="Text" onClick={() => {}} />
      <ActionButton icon={imgActionIcon} label="Image" onClick={() => {}} />
      <ActionButton icon={bgAction} label="Background" onClick={() => {}} />
    </div>
  );
};
