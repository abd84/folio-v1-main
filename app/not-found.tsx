import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold">404</h1>
      <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-center max-w-[600px]">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#e4ded7]/60 max-w-[500px]">
        It seems you&apos;ve ventured into uncharted data territory. Let&apos;s get you back to the main dashboard.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] bg-[#e4ded7] text-[#0E1016] px-6 py-3 rounded-lg font-semibold hover:bg-[#e4ded7]/90 transition-colors">
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
};


export default NotFound;
