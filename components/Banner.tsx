import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Shopl&apos;s Tech Blog</h1>
        <h2 className="mt-5">
          <span className="underline decoration-4 decoration-[#3299FE]">
            Every Developers
          </span>{" "}
          interested in{" "}
          <span className="underline decoration-4 decoration-[#3299FE]">
            tech
          </span>{" "}
          are welcome.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        디자인 | 프론트엔드 | 백엔드 | 데브옵스 | 샤플데이 | 기획 | 마케팅 |
        영업
      </p>
    </div>
  );
};

export default Banner;
