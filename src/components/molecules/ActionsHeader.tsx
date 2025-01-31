import logo from "../../assets/logo.svg";
import { ResetModal } from "./ResetModal";

export const ActionsHeader = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex gap-[20px] items-center">
        <img src={logo} width="64" height="64" alt="editor logo" />
        <h1 className="text-[32px] text-black-75 font-bold">CanvasEditor</h1>
      </div>

      <ResetModal />
    </div>
  );
};
