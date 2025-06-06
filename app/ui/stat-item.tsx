import Image from "next/image";
import Link from "next/link";

export default function StatItem({
  graph,
  title,
  source,
  sourceTitle,
  description,
}: {
  graph: string;
  title: string;
  source: string;
  sourceTitle: string;
  description: string;
}) {
  return (
    <article className="flex flex-col h-full outline-[2px] outline-[#EBEBEB]/70 justify-start items-start gap-4 rounded-3xl overflow-clip">
      <Image
        src={graph}
        width={1000}
        height={1000}
        alt="image"
        className="w-full"
      />
      <div className="flex flex-col h-full gap-3 p-5 xl:p-6.5">
        <h3 className="text-black text-xl 2xl:text-2xl font-[550]">{title}</h3>
        <p className="text-zinc-600 text-xl 2xl:text-[22px] font-[450]">
          {description}
        </p>
      </div>
      <div className="flex flex-row w-full px-6.5 py-5 gap-2.5 items-center bg-[#F5F7F9]">
        <span className="text-black text-base 2xl:text-xl font-medium">
          source:
        </span>
        <Link
          className="text-white text-base 2xl:text-lg font-medium leading-none px-3 py-2 bg-indigo-600 rounded-full"
          href={`${source}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sourceTitle}
        </Link>
      </div>
    </article>
  );
}
