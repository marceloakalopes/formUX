"use client";

import { FC, useState } from "react";

interface DropDownProps {
  question: string;
  answer: string;
}

const DropDown: FC<DropDownProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col px-4 py-4 rounded-xl cursor-pointer transition-colors duration-300 ${
        !open ? "bg-[#1f1f1f]" : "bg-[#383838]"
      }`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex px-1 justify-between items-center">
        <h2 className={`transition-colors duration-300 ${!open ? "text-white" : "text-[#FFB980]"}`}>
          {question}
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill={`${!open ? "#ffff" : "#FFB980"}`}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
        </svg>
      </div>
      <div
        className={`overflow-hidden mx-1 transition-max-height duration-300 ease-in-out ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-4 text-[14px] text-white">{answer}</p>
      </div>
    </div>
  );
};

export default DropDown;
