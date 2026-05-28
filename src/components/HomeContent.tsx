
const HomeContent = () => {
  return (
    <section
      className="px-12 overflow-hidden relative"
    >

      {/* Horizontal line for the home page */}
      <div className="absolute top-0 bottom-0 left-9 -z-30 md:block hidden">
        <div className="border-[#FFFFFF4D] border-[0.94px] w-0 absolute left-0 top-0 bottom-0"/>
        <span className="text-white absolute z-50 text-[17px] -left-1 top-50">+</span>
      </div>
      <div className="absolute top-0 bottom-0 left-90 md:left-80 -z-30 md:block hidden">
        <div className="border-[#FFFFFF4D] border-[0.94px] w-0 absolute left-0 top-0 bottom-0"/>
        <span className="text-white absolute z-50 text-[17px] -left-1 top-50">+</span>
      </div>
      <div className="absolute top-0 bottom-0 left-170 -z-30 lg:block hidden">
        <div className="border-[#FFFFFF4D] border-[0.94px] w-0 absolute left-0 top-0 bottom-0"/>
        <span className="text-white absolute z-50 text-[17px] -left-1 top-50">+</span>
      </div>
      <div className="absolute top-0 bottom-0 right-90 md:right-80 -z-30 md:block hidden ">
        <div className="border-[#FFFFFF4D] border-[0.94px] w-0 absolute left-0 top-0 bottom-0"/>
        <span className="text-white absolute z-50 text-[17px] -left-1 top-50">+</span>
      </div>
      <div className="absolute top-0 bottom-0 right-9 -z-30 md:block hidden">
        <div className="border-[#FFFFFF4D] border-[0.94px] w-0 absolute left-0 top-0 bottom-0"/>
        <span className="text-white absolute z-50 text-[17px] -left-1 top-50">+</span>
      </div>

      {/* Header content for the home page */}
      <header
        className="text-[#FFFFFF] flex flex-col items-center gap-5 md:flex-row md:justify-between md:items-start mb-10"
      >
        <p
          className="bg-[#FFFFFF1A] font-normal text-[13px] leading-5 p-3 rounded-[10px] [word-spacing:4.6px] sm:max-w-67.5 sm:text-[14px] md:text-[15px] md:leading-5.25 md:p-4"
        >
          A POWERFUL WEB3 INFRASTRUCTURE THAT ALLOWS YOU TO CREATE,
          TRADE, AND MANAGE DIGITAL ASSETS WITH FULL TRANSPARENCY
          AND SECURITY.
        </p>

        <p
          className="flex items-center gap-1 md:self-auto"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.49674 17.4154C13.869 17.4154 17.4134 13.871 17.4134 9.4987C17.4134 5.12644 13.869 1.58203 9.49674 1.58203C5.12449 1.58203 1.58008 5.12644 1.58008 9.4987C1.58008 13.871 5.12449 17.4154 9.49674 17.4154Z"
              stroke="white"
              strokeWidth="1.1875"
            />
            <path
              d="M7.51758 8.86781V10.1348C7.51758 11.3376 7.51758 11.9389 7.87839 12.182C8.23918 12.4251 8.73263 12.1562 9.7196 11.6183L10.8819 10.9847C12.0696 10.3375 12.6634 10.0138 12.6634 9.5013C12.6634 8.98878 12.0696 8.66514 10.8819 8.01788L9.7196 7.38434C8.73263 6.84645 8.23918 6.5775 7.87839 6.82058C7.51758 7.06365 7.51758 7.66503 7.51758 8.86781Z"
              fill="white"
            />
          </svg>

          <span
            className=" font-normal text-[12px] sm:text-[13px] md:text-[14px] tracking-[-0.56px]"
          >
            Fast. Secure. Permissionless.
          </span>
        </p>
      </header>


      {/* Main heading for the home page */}
      <p
        className=" font-[Inter] text-white text-center md:text-start font-normal leading-none text-[50px] tracking-[-2px] md:text-[70px] md:tracking-[-2px] lg:text-[130px] lg:tracking-[-10px] xl:text-[168px] xl:tracking-[-13px]
      "
      >
        Decentralize
      </p>

      {/* Subheading for the home page */}

      <div
        className=" flex flex-col-reverse md:flex-row justify-between md:items-end gap-5"
      >
        <div
          className=" flex flex-col items-center md:items-start gap-6 w-full max-w-155"
        >
          <p
            className=" font-[Inter] font-light italic text-[#FFFFFF] text-center md:text-start text-[20px] leading-7.5 lg:text-[27px] lg:leading-[36.72px] tracking-[-1.2px]"
          >
            Build, scale, and innovate with blockchain technology.
            Our platform enables secure, transparent, and
            permissionless digital experiences for the future of
            the internet.
          </p>

          <button
            className=" pt-3.75 pb-4 px-10 sm:px-12.25 mt-5 md:m-0 rounded-[87px] font-[Inter] font-light text-[16px] tracking-[-0.48px] leading-[19.2px] text-[#090A0D] bg-[#FFFFFF] transition-all duration-300 ease-out hover:scale-105 cursor-pointer w-full sm:w-auto"
          >
            Connect Wallet
          </button>
        </div>

        <p
          className=" font-[Inter] font-normal text-white text-center lg:text-end leading-none text-[50px] tracking-[-2px]  md:text-[70px] md:tracking-[-2px] lg:text-[130px] lg:tracking-[-10px] xl:text-[154px] xl:tracking-[-13px]
        "
        >
          Everything
        </p>
      </div>
    </section>
  );
};

export default HomeContent;
