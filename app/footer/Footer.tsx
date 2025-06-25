import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const year = new Date().getFullYear();

  useEffect(() => {
    // Reset visibility when pathname changes
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="flex h-[15vh] w-full items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
    >
      <div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <span className="m-0 p-0">© {year}</span>
        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
          <span className="m-0 p-0">Portfolio of </span>
          <Link
            href="https://github.com/abd84"
            target="_blank"
            aria-label="Abdullah's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              Abdullah Naeem
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
