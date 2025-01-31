import { Button } from "../atoms/Button";
import { ActionsHeader } from "../molecules/ActionsHeader";
import { ContentActions } from "../molecules/ContentActions";

export const Actions = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col justify-between gap-[32px]">
      <ActionsHeader />

      <div className="border-1  border-white-98"></div>

      <div className="bg-gray-100 rounded-[10px] p-[16px]">
        <h2 className="text-lg text-black-100  font-bold">Add content</h2>
      </div>

      <ContentActions />

      <div className="border-1  border-white-98"></div>

      <div className="pl-auto w-full">
        <Button label="Export to PNG" onClick={() => {}} />
      </div>
    </div>
  );
};
