import Image from "next/image";
import React from "react";

export default function Testemonial({
  testemonial,
  name,
  role,
  profilePicture,
  rating,
}: {
  testemonial: string;
  name: string;
  role: string;
  profilePicture: string;
  rating: number;
}) {
  // Create stars using a do-while loop
  const renderStars = () => {
    const stars = [];
    let i = 0;
    if (rating > 0) {
      do {
        stars.push(
          <span key={i}>
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9424 19.1033L18.6551 22.7691C19.3918 23.2388 20.2986 22.54 20.0832 21.6808L18.4284 15.1054C18.3836 14.9232 18.3907 14.7318 18.4489 14.5535C18.5071 14.3751 18.6139 14.217 18.7571 14.0973L23.8804 9.77865C24.5491 9.21733 24.2091 8.08325 23.3363 8.02597L16.6488 7.59067C16.4664 7.57994 16.2909 7.51572 16.144 7.40586C15.997 7.29601 15.885 7.14527 15.8214 6.97207L13.3278 0.62578C13.2618 0.442382 13.1415 0.283954 12.9833 0.172003C12.8252 0.0600517 12.6368 0 12.4437 0C12.2506 0 12.0621 0.0600517 11.904 0.172003C11.7458 0.283954 11.6256 0.442382 11.5596 0.62578L9.06593 6.97207C9.00238 7.14527 8.89028 7.29601 8.74334 7.40586C8.59639 7.51572 8.42097 7.57994 8.2385 7.59067L1.55104 8.02597C0.678274 8.08325 0.338234 9.21733 1.00698 9.77865L6.13025 14.0973C6.27345 14.217 6.38028 14.3751 6.43844 14.5535C6.49659 14.7318 6.50371 14.9232 6.45896 15.1054L4.92878 21.1997C4.66808 22.2307 5.75621 23.0669 6.62898 22.5056L11.9449 19.1033C12.094 19.0075 12.267 18.9567 12.4437 18.9567C12.6203 18.9567 12.7933 19.0075 12.9424 19.1033Z"
                fill="#FFA43C"
              />
            </svg>
          </span>
        );
        i++;
      } while (i < rating);
    }
    return stars;
  };

  return (
    <article className="w-[440px] p-10 bg-white/40 rounded-3xl outline-[1.50px] outline-offset-[-1.50px] outline-stone-300 backdrop-blur-[108px] flex flex-col justify-center items-center gap-8">
      <span className="font-[syne] w-full text-indigo-950 text-9xl font-medium leading-[90px] h-8">
        “
      </span>
      <span className="text-indigo-950 text-2xl font-bold">{testemonial}</span>
      <span className="font-[syne] ml-auto text-indigo-950 text-9xl font-medium leading-[90px] h-8">
        “
      </span>
      <div className="flex flex-row gap-3">{renderStars()}</div>
      <div className="flex flex-row gap-4 items-center">
        <Image
          src={profilePicture}
          width={100}
          height={100}
          alt="image"
          className="w-[72px] xl:w-20 2xl:w-22"
        />
        <div className="flex flex-col justify-start">
          <span className="text-black/80 text-2xl font-bold">{name}</span>
          <span className="text-black/60 text-xl font-bold">{role}</span>
        </div>
      </div>
    </article>
  );
}
