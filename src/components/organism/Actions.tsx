import { useEditorContext } from "../../context/editorContext";
import { Button } from "../atoms/Button";
import { ActionsHeader } from "../molecules/ActionsHeader";
import { ContentActions } from "../molecules/ContentActions";

export const Actions = () => {
  const { exportToPng } = useEditorContext();

  return (
    <div className="bg-white w-full flex flex-col justify-between gap-8">
      <ActionsHeader />

      <div className="border-1  border-white-98"></div>

      <div className="bg-gray-100 rounded-[10px] p-[16px]">
        <h2 className="text-body-bold text-black-100">Add content</h2>
      </div>

      <ContentActions />

      <div className="border-1 border-white-98"></div>

      <div className="flex justify-end w-full">
        <Button onClick={exportToPng}>Export to PNG</Button>
      </div>
    </div>
  );
};
