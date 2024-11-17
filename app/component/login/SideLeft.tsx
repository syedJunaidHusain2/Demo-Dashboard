import Image from "next/image";
import { useUserContext } from "@/app/hooks/useUserContext";

const SideLeft = () => {
  const { isDarkMode } = useUserContext();

  return (
    <div
      className={`hidden md:block relative rounded-3xl p-7 ${
        isDarkMode ? "bg-indigo-900" : "bg-primary"
      } text-light-lighter w-full max-w-[450px] h-[450px] md:w-[500px] md:h-[600px] shadow-lg`}
    >
      <div className="bg-[#B7E9F640] h-full rounded-3xl p-5">
        <Image
          src="/login_logo.png"
          alt="Logo"
          width={80}
          height={140}
          className="mb-9"
        />

        <h1 className="text-xl md:text-3xl font-semibold mb-6 leading-7 md:leading-10">
          Generate detailed reports with just one click
        </h1>

        <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7">
          <Image
            src="/login_poster.png"
            alt="Girl with Camera"
            width={150}
            height={180}
            className="rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default SideLeft;
