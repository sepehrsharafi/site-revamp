import Image from "next/image";
import Button from "./button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-7 h-screen text-center">
      <Image
        src={"/herosection-bg.png"}
        className="absolute top-0 h-screen w-full object-cover object-[65%_75%] -z-20"
        width={2000}
        height={2000}
        alt="hero section background image"
      />
      <div className="flex flex-col my-auto mx-6">
        <h1 className="font-[syne] text-indigo-950 text-[56px] xl:text-[90px] 2xl:text-[110px] font-[730] tracking-[-4%] leading-[100%]">
          Redefining Digital <br className="hidden xl:block" /> Presence
        </h1>
        <div className="flex flex-col gap-5">
          <h2 className="text-indigo-950 text-xl xl:text-3xl 2xl:text-3xl font-semibold">
            revamping underperforming websites for small businesses.
          </h2>
          <h2 className="text-black text-xl xl:text-3xl 2xl:text-3xl font-[550]">
            “An outdated website is like a locked door—potential clients walk
            right by.”
          </h2>
          <div className="flex flex-row gap-5 items-center justify-center">
            <Button
              text="BOOK A FREE CONSULTATION"
              buttonStyle="bg-[#5947FF] text-white font-[650] underline decoration-[2.5px] underline-offset-5 text-lg xl:text-xl rounded-full px-5 xl:px-6 py-[18px] leading-none"
            />
            <Button
              text="Explore our services"
              buttonStyle="absolute bottom-0 right-0 xl:static m-5 xl:m-0 bg-indigo-950 text-white font-[650] text-xl xl:text-xl rounded-full px-5 xl:px-6 py-[18px] leading-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-blend-linear-dodge bg-gradient-to-t from-white via-white/10 to-white/0" />
    </section>
  );
}
