import logo from "../../assets/logo.svg";
import resetIcon from "../../assets/resetIcon.svg";

export const ActionsHeader = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex gap-[20px] items-center">
        <img src={logo} width="64" height="64" alt="editor logo" />
        <h1 className="text-[32px] text-black-75 font-bold">CanvasEditor</h1>
      </div>

      <button
        className="flex items-center gap-[8px] cursor-pointer border-b border-b-[#CB0000] text-[#CB0000] ml-auto"
        onClick={() => {}}
      >
        Reset
        <img src={resetIcon} width="32" height="32" alt="reset icon" />
      </button>
    </div>
  );
};
