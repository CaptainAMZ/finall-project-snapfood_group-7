import React from "react";

const SSButton = ({ content, icon, cfs, h, w }) => {
  return (
    <button
      className="bg-accent-main text-white font-vb px-[6px] py-[1px] flex items-center justify-center gap-3 rounded-lg"
      style={{ fontSize: cfs + "px", height: h + "px", width: w + "px" }}
    >
      {icon && (<img src = {icon} />)}
      {content}
    </button>
  );
};

export default SSButton;
