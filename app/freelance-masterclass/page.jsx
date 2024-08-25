import Link from "next/link";

export default function MasterClass() {
  return (
    <div className="absolute w-full bg-[#1e1e1e]">
      <div className="bg-[#1e1e1e] font-bold mt-24 mb-20 px-6 text-center">
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto">
          <p className="text-[#e4c584] text-sm md:text-base">
            FREE 1 HOUR MASTERCLASS FOR DEVELOPERS
          </p>
          <h1 className="text-2xl text-white md:text-4xl">
            How I closed ₹8k Freelance web development client in 24 hours.
          </h1>
          <p className="text-[#f1f0ea] text-xl md:text-2xl font-light">
            Step by step Freelancing guide for developers.
          </p>
        </div>
      </div>

      <div id="vsl" className="relative mb-20 overflow-hidden">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <iframe
            className="w-full h-80 lg:h-[560px]"
            src="https://www.youtube.com/embed/gPsT02c7YIU?si=Ti_gj1T9PuTvMUlv&rel=0"
            title="NextStackJs: Freelancing for developers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          />

          <Link
            href="https://nextstackjs.crd.co/"
            className="block bg-[#413561] p-4 text-xl font-bold text-center text-white outline-none w-full"
          >
            STEP 2: START YOUR FREELANCE BUSINESS IN 30 DAYS.
          </Link>
        </div>
      </div>
    </div>
  );
}
