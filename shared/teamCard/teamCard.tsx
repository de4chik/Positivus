import Image from "next/image";

interface IProps {
  name: string;
  job: string;
  content: string;
}

export const TeamCard = ({ content, job, name }: IProps) => {
  return (
    <div className="w-full py-[40px] px-[35px] rounded-[45px] shadow-serviceCard border border-black max-md:p-[30px]">
      <div className="flex items-end relative">
        <Image alt="" src={"/images/team_img.png"} width={100} height={100} />
        <div className="flex flex-col ml-5">
          <span className="text-xl font-medium">{name}</span>
          <span>{job}</span>
        </div>
        <Image
          alt=""
          src={"/images/soc_img.svg"}
          width={34}
          height={34}
          className="absolute top-0 right-0"
        />
      </div>
      <p className="mt-7 pt-7 border-t border-black text-[18px]">{content}</p>
    </div>
  );
};
