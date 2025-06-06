import Image from "next/image";

export default function OurSolutionItem({
  icon,
  subIcon,
  title,
  description,
  percentage,
  claim,
}: {
  icon: string;
  subIcon: string;
  title: string;
  description: string;
  percentage: number;
  claim: string;
}) {
  return (
    <article className="relative border-[1.9px] border-[#EBEBEB] rounded-[20px] 2xl:rounded-3xl overflow-clip flex flex-row gap-4 max-w-[485px] p-5 xl:p-[22px] 2xl:p-6.5">
      <Image
        src={`/${icon}`}
        className="w-12.5 h-12.5 xl:w-11.5 xl:h-11.5 2xl:w-14.5 2xl:h-14.5 object-contain"
        width={100}
        height={100}
        alt="image"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] 2xl:text-2xl font-[550]">{title}</h3>
        <p className="text-lg xl:text-[19px] 2xl:text-[21px] font-[450] xl:font-normal">
          {description}
        </p>
        <div className="flex flex-row items-center gap-2">
          <span className="font-semibold text-2xl 2xl:text-[26px] text-[#2563EB]">
            {percentage}%
          </span>
          <span className="text-lg xl:text-[19px] 2xl:text-xl font-medium">
            {claim}
          </span>
        </div>
      </div>
      <Image
        src={`/${subIcon}`}
        width={100}
        height={100}
        alt="image"
        className="absolute -bottom-4 xl:-bottom-6 right-0 w-15 xl:w-[35px] 2xl:w-22"
      />
    </article>
  );
}
