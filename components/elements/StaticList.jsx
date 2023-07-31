import React from "react";

const StaticList = ({ arr }) => {
  return (
    <ul className="p-12">
      {arr.map((item) => (
        <li className="py-2 text-[12px] font-vrg">{item}</li>
      ))}
    </ul>
  );
};

export default StaticList;
