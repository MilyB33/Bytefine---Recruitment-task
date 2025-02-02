import { useState } from "react";
import { useEditorContext } from "../../context/editorContext";
import { Button } from "../atoms/Button";
import { ActionsHeader } from "../molecules/ActionsHeader";
import { ContentActions } from "../molecules/ContentActions";

export const Actions = () => {
  const [isExporting, setIsExporting] = useState(false);
  const { exportToPng } = useEditorContext();

  const onExport = async () => {
    setIsExporting(true);

    await exportToPng();

    setIsExporting(false);
  };

  return (
    <div className="bg-white flex flex-col max-[1600px]:gap-3 gap-8">
      <ActionsHeader />

      <div className="border-1  border-white-98"></div>

      <div className="bg-gray-100 rounded-[10px] p-4">
        <h2 className="text-body-bold text-black-100">Add content</h2>
      </div>

      <ContentActions />

      <div className="border-1 border-white-98"></div>

      <div className="flex justify-end self-end w-full">
        <Button onClick={onExport} disabled={isExporting}>
          Export to PNG
        </Button>
      </div>
    </div>
  );
};
