import logo from "../../assets/logo.svg";
import { ResetModal } from "./ResetModal";

export const ActionsHeader = () => {
  return (
    <div className="w-full flex flex-wrap items-center">
      <div className="flex gap-[20px] items-center mr-auto">
        <img src={logo} width="64" height="64" alt="editor logo" />
        <h1 className="text-display text-black-75">CanvasEditor</h1>
      </div>

      <ResetModal />
    </div>
  );
};
