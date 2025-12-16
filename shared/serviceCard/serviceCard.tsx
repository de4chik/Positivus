import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface IPropsServiceCard {
  title: string;
  image: string;
  color: "gray" | "green" | "black";
}

export const ServiceCard = ({ color, image, title }: IPropsServiceCard) => {
  const setColor = () => {
    switch (color) {
      case "gray":
        return "#f3f3f3";
      case "black":
        return "#191A23";
      case "green":
        return "#B9FF66";
    }
  };
  return (
    <div
      className={cn(
        "w-full p-[50px] rounded-[45px] shadow-serviceCard border border-black grid grid-cols-2 max-md:grid-cols-1 max-md:p-[30px]"
      )}
      style={{ background: setColor() }}
    >
      <div className="flex flex-col gap-[93px] max-md:gap-8">
        <span
          className="titleSection !text-3xl"
          style={{ background: color == "gray" ? "" : "white" }}
        >
          {title}
        </span>
        <div
          className="p-3.5 rounded-full bg-black w-fit relative after:content-['Learn_more'] after:absolute after:top-1/2 after:-right-[200%] after:-translate-y-1/2"
          style={{
            background: color == "black" ? "white" : "",
            color: color == "black" ? "white" : "",
          }}
        >
          <ArrowUpRight
            className="stroke-white"
            style={{ stroke: color === "black" ? "#191A23" : "#B9FF66" }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={image} alt={image} width={210} height={210} />
      </div>
    </div>
  );
};
