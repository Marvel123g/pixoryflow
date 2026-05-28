
const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-3.25 px-2.5 w-full max-w-343.5 max-[900px]:flex-col max-[900px]:gap-5 max-[480px]:px-4 max-[480px]:pt-4 mx-auto">

      {/* Logo icon for the navigation bar */}
      <svg
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5833 0C7.33542 0 0 2.26042 0 6.5625V13.8542C0 18.1562 7.33542 20.4167 14.5833 20.4167C21.8313 20.4167 29.1667 18.1562 29.1667 13.8542V6.5625C29.1667 2.26042 21.8313 0 14.5833 0ZM2.91667 13.8542V10.6458C3.7625 11.1417 4.73958 11.55 5.83333 11.9V16.1C3.92292 15.3562 2.91667 14.4521 2.91667 13.8542ZM20.4167 12.6146V16.9458C19.1479 17.2083 17.6896 17.3979 16.0417 17.4708V13.0958C17.5438 13.0375 19.0167 12.8625 20.4167 12.6146ZM13.125 13.0958V17.4708C11.4771 17.3979 10.0188 17.2083 8.75 16.9458V12.6146C10.15 12.8625 11.6229 13.0375 13.125 13.0958ZM23.3333 16.1146V11.9146C24.4271 11.5646 25.4042 11.1562 26.25 10.6604V13.8687C26.25 14.4812 25.2438 15.3708 23.3333 16.1146ZM14.5833 10.2229C7.02917 10.2229 2.91667 7.81667 2.91667 6.57708C2.91667 5.3375 7.02917 2.93125 14.5833 2.93125C22.1375 2.93125 26.25 5.3375 26.25 6.57708C26.25 7.81667 22.1375 10.2229 14.5833 10.2229Z"
          fill="white"
        />
      </svg>


      {/* Navigation links */}
      <section
        className="flex gap-3.75 text-[16px] max-w-68.75 font-normal text-white
        max-[900px]:flex-wrap max-[900px]:justify-center
        max-[480px]:gap-3 max-[480px]:text-[13px]"
      >
        <a href="#" className="tracking-[-0.56px]">
          HOME
        </a>
        <a href="#" className="tracking-[-0.56px]">
          COMMUNITY
        </a>
        <a href="#" className="tracking-[-0.56px]">
          ABOUT
        </a>
        <a href="#" className="tracking-[-0.56px]">
          AIRDROP
        </a>
      </section>

      {/* Sign In button */}
      <button
        className="rounded-[87px] bg-white px-12.25 py-3.75 text-[#090A0D]
        font-[Inter] font-light tracking-[-0.48px] transition-all duration-300
        ease-out hover:scale-105 cursor-pointer
        max-[480px]:px-7 max-[480px]:py-3"
      >
        Sign In
      </button>
    </nav>
  );
};

export default Nav;