import canvasInitialBackground from "../../assets/canvasInitial.png";

export const Canvas = () => {
  return (
    <div className="flex aspect-[4/5] h-full items-center justify-center">
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(${canvasInitialBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
