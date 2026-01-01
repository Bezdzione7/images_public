export default function TopNav() {
  return (
    <nav className="h-[55px] bg-dark-bg flex items-center justify-between px-2 sm:px-4">
      {/* Project Name */}
      <div className="flex items-center gap-2 sm:gap-3">
        <svg
          className="w-[28px] h-[28px] sm:w-[37px] sm:h-[37px] flex-shrink-0"
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19.5H11.2778M1 19.5C1 29.7173 9.28273 38 19.5 38M1 19.5C1 9.28273 9.28273 1 19.5 1M11.2778 19.5H27.7222M11.2778 19.5C11.2778 29.7173 14.959 38 19.5 38M11.2778 19.5C11.2778 9.28273 14.959 1 19.5 1M27.7222 19.5H38M27.7222 19.5C27.7222 9.28273 24.041 1 19.5 1M27.7222 19.5C27.7222 29.7173 24.041 38 19.5 38M38 19.5C38 9.28273 29.7173 1 19.5 1M38 19.5C38 29.7173 29.7173 38 19.5 38"
            stroke="#B7B9BA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white text-sm sm:text-lg font-semibold whitespace-nowrap">
          Project name
        </span>
      </div>

      {/* Center Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button className="h-7 sm:h-8 px-4 sm:px-10 rounded-[7px] bg-yellow-btn text-black text-sm sm:text-[15px] font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
          Publish
        </button>
        <button className="h-7 sm:h-8 px-4 sm:px-10 rounded-[7px] bg-blue-btn text-white text-sm sm:text-[15px] font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
          Connect
        </button>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-1 sm:gap-[5px]">
        {/* Download Icon */}
        <button className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              opacity="0.7"
              d="M1 16.75H11.5M6.25 1V13.25M6.25 13.25L10.625 8.875M6.25 13.25L1.875 8.875"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Left Arrow */}
        <button className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e5036d0e656b710ee8a95a77acf3627025555add?width=42"
            alt="Arrow Left"
            className="w-full h-full"
          />
        </button>

        {/* Right Arrow */}
        <button className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g opacity="0.7">
              <path
                d="M4.375 10.5H16.625M16.625 10.5L11.375 15.75M16.625 10.5L11.375 5.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>

        {/* More Vertical */}
        <button className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1de094ca620eaccf1218500d80ffdef17b82a68f?width=42"
            alt="More"
            className="w-full h-full"
          />
        </button>

        {/* Cloud Icon */}
        <button className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/abfeaf1a0b887de8ac25d19a8bcf96569ff76a0d?width=42"
            alt="Cloud"
            className="w-full h-full"
          />
        </button>
      </div>
    </nav>
  );
}
