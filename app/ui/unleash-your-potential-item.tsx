import Image from "next/image";

export default function UnleashYourPotentialItem({
  title,
  description,
  icon,
  bgImage,
  bgObjectStyle,
}: {
  title: string;
  description: string;
  icon: string;
  bgImage: string;
  bgObjectStyle: string;
}) {
  return (
    <article className="rounded-[18px] border-[1.5px] border-[#E2E2E2] overflow-clip">
      <Image
        src={bgImage}
        width={1000}
        height={1000}
        alt="image"
        className={`w-full h-64 2xl:h-72 object-${bgObjectStyle} bg-[#0067F2]`}
      />
      <div className="flex flex-col gap-3 p-5 xl:p-6">
        <div>
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={icon}
              width={100}
              height={100}
              alt="image"
              className="w-8.5 xl:w-9 2xl:w-11 object-contain"
            />
            <span className="text-[22px] xl:text-[23px] 2xl:text-[25px] font-[550]">
              {title}
            </span>
          </div>
          <p className="text-lg xl:text-xl 2xl:text-[21px]">{description}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-lg xl:text-xl 2xl:text-[22px] font-semibold text-[#2563EB]">
            Contact Us
          </span>
          <svg
            className="w-4.5 xl:w-5"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_225_536"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="21"
              height="20"
            >
              <rect x="0.5" width="20" height="20" rx="1.5" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_225_536)">
              <path
                d="M8.00676 17.6735C7.55429 18.1259 6.82069 18.1259 6.36822 17.6735C5.91575 17.221 5.91575 16.4874 6.36822 16.0349L11.3425 11.0607C11.9282 10.4749 11.9282 9.52516 11.3425 8.93937L6.36822 3.96514C5.91575 3.51267 5.91575 2.77907 6.36822 2.3266C6.82069 1.87412 7.55429 1.87412 8.00676 2.3266L14.6195 8.93937C15.2053 9.52516 15.2053 10.4749 14.6195 11.0607L8.00676 17.6735Z"
                fill="#2563EB"
              />
            </g>
          </svg>
        </div>
      </div>
    </article>
  );
}
