export default function OurSolutionSubItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col gap-2 p-6 bg-[#F9FAFB] border-1 border-[#EBEBEB] rounded-2xl">
      <span className="text-xl xl:text-[19px] 2xl:text-[21px] font-semibold">
        {title}
      </span>
      <p className="text-xl xl:text-[19px] 2xl:text-[21px] font-[450]">
        {description}
      </p>
    </article>
  );
}
