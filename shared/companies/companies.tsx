import Image from "next/image";

export const Companies = () => {
  return (
    <div className="flex flex-wrap justify-between pt-[70px]">
      {[...Array(6)].map((_, i) => (
        <Image
        className="px-5"
          key={i}
          src={`/images/logo_${i + 1}.svg`}
          alt=""
          width={150}
          height={50}
        />
      ))}
    </div>
  );
};
