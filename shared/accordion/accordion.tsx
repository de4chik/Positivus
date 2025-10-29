"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface IPropsAccordion {
  title: string;
  content: string;
  number: string;
}

export const Accordion = ({ content, number, title }: IPropsAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-full px-[60px] py-[40] rounded-[45px] shadow-serviceCard border border-black max-md:px-[30px] max-md:py-[20px]"
      style={{ background: isOpen ? "#B9FF66" : "#F3F3F3" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[25px] max-md:flex-col max-md:items-start">
          <span className="text-[60px] font-medium max-md:text-3xl">{number}</span>
          <span className="font-medium text-3xl max-md:text-xl">{title}</span>
        </div>
        <div
          className=" p-5 rounded-full bg-[#F3F3F3] w-fit border border-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </div>
      <p
        className="border-t border-black mt-[30px] pt-[30px] text-[18px]"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {content}
      </p>
    </div>
  );
};
