import React from "react";

function DetailBox({ data = {}, darkMode, index }) {
  const {
    icon: Icon,
    header,
    value,
    impact,
    darkModeColor,
    lightModeColor,
  } = data;
  const textColor =
    darkMode && (index === 1 || index === 2) ? "text-white" : "text-black";
  const backgroundColor = darkMode ? darkModeColor : lightModeColor;

  return (
    <div
      className="w-full h-[14vh] rounded-2xl p-5 cursor-pointer"
      style={{ backgroundColor }}
      role="button"
      tabIndex={0}
      aria-label={`Detail box for ${header}`}
    >
      <header className={`font-semibold ${textColor}`}>{header}</header>
      <div
        className={`flex items-center mt-2 w-full font-semibold ${textColor}`}
      >
        <h1 className="font-bold text-2xl" aria-live="polite">
          {value}
        </h1>
        <h1 className="ml-[20%] text-sm flex items-center lg:ml-[8%] xl:ml-[12%]">
          {impact}{" "}
          <span className="ml-1">{Icon && <Icon aria-hidden="true" />}</span>
        </h1>
      </div>
    </div>
  );
}

export default DetailBox;
