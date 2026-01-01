export default function ChatSidebar() {
  return (
    <aside className="w-full lg:max-w-[561px] bg-dark-bg flex flex-col border-b lg:border-b-0 lg:border-r border-divider max-h-[40vh] lg:max-h-none">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Chat Date */}
        <div className="text-center text-text-light text-xs font-semibold mb-4 sm:mb-8">
          Dec 28 at 1:41 AM
        </div>

        {/* User Message */}
        <div className="flex justify-end mb-8 sm:mb-16">
          <div className="max-w-[307px] px-3 py-2 rounded-[15px] bg-[#272724]">
            <p className="text-text-light text-xs font-semibold opacity-95">
              make the game have cool characters
            </p>
          </div>
        </div>

        {/* AI Messages */}
        <div className="space-y-4 sm:space-y-6">
          {/* AI Action 1 */}
          <div className="flex items-start gap-2 sm:gap-3">
            <svg
              className="w-[13px] h-[15px] mt-1 opacity-50 flex-shrink-0"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M2.62498 7.66683V3.66683C2.62498 2.73341 2.62498 2.26635 2.80209 1.90983C2.95788 1.59623 3.20629 1.34144 3.51205 1.18166C3.85966 1 4.31503 1 5.22511 1H8.86061C8.96019 1 9.04731 1 9.1249 1.00072M13.9991 6C13.9998 6.07967 13.9998 6.16913 13.9998 6.2714V13.3363C13.9998 14.2679 13.9998 14.7337 13.8229 15.0899C13.6671 15.4035 13.418 15.6587 13.1123 15.8185C12.765 16 12.3107 16 11.4024 16L8.31241 16M13.9991 6C13.9969 5.76209 13.9882 5.61146 13.9546 5.46777C13.9148 5.29771 13.8489 5.13512 13.7598 4.986C13.6593 4.8178 13.5196 4.67407 13.2385 4.38582L10.6991 1.78125C10.4182 1.49318 10.2775 1.3488 10.1135 1.24577C9.96815 1.15439 9.80976 1.08688 9.64395 1.04605C9.5038 1.01154 9.35698 1.00289 9.1249 1.00072M13.9991 6H14M13.9991 6H11.7224C10.8141 6 10.3592 6 10.012 5.81852C9.70622 5.65873 9.45781 5.40326 9.30201 5.08966C9.1249 4.73314 9.1249 4.26675 9.1249 3.33333V1.00072M5.06245 10.1667L6.68743 11.8333M1 16V13.9167L7.09368 7.66667L9.1249 9.75L3.03123 16H1Z"
                stroke="#C4C4C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1">
              <p className="text-text-light text-xs sm:text-sm font-semibold opacity-60 mb-2 sm:mb-3">
                Searching and Editing files
              </p>
              <p className="text-text-light text-sm sm:text-[15px] font-semibold leading-5">
                I found the character folder I added them to the main game, let me do some
                more changes
              </p>
            </div>
          </div>

          {/* AI Action 2 */}
          <div className="flex items-start gap-2 sm:gap-3">
            <svg
              className="w-[15px] h-[15px] mt-1 opacity-50 flex-shrink-0"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M6 3.50021H6.28072C6.48455 3.50021 6.58654 3.50021 6.68244 3.52324C6.76747 3.54365 6.8491 3.57741 6.92367 3.6231C7.00774 3.67462 7.07992 3.74681 7.22396 3.89084L9.77624 6.44312C9.92037 6.58725 9.99203 6.65891 10.0436 6.74301C10.0893 6.81757 10.1235 6.89907 10.1439 6.9841C10.1667 7.07903 10.1667 7.17982 10.1667 7.37951V13.5002M6 3.50021H2.33301C1.8663 3.50021 1.63318 3.50021 1.45492 3.59104C1.29811 3.67094 1.17072 3.79833 1.09083 3.95513C1 4.13339 1 4.36692 1 4.83363V14.667C1 15.1337 1 15.3667 1.09083 15.545C1.17072 15.7018 1.29811 15.8296 1.45492 15.9095C1.633 16.0002 1.86585 16.0002 2.33166 16.0002L8.83421 16.0002C9.30001 16.0002 9.53373 16.0002 9.71182 15.9095C9.86862 15.8296 9.99563 15.702 10.0755 15.5452C10.1663 15.3669 10.1667 15.1335 10.1667 14.6668V13.5002M6 3.50021V6.33355C6 6.80026 6 7.03345 6.09083 7.21171C6.17072 7.36851 6.29811 7.49625 6.45492 7.57614C6.633 7.66688 6.86584 7.66688 7.33164 7.66688H10.1663M6.83333 3.50029V2.33363C6.83333 1.86692 6.83333 1.63339 6.92416 1.45513C7.00406 1.29833 7.13145 1.17094 7.28825 1.09104C7.46651 1.00021 7.69963 1.00021 8.16634 1.00021H11.8333M11.8333 1.00021H12.1141C12.3179 1.00021 12.4199 1.00021 12.5158 1.02324C12.6008 1.04365 12.6824 1.07741 12.757 1.1231C12.8411 1.17462 12.9133 1.24681 13.0573 1.39084L15.6096 3.94312C15.7537 4.08725 15.8254 4.15891 15.8769 4.24301C15.9226 4.31757 15.9568 4.39907 15.9772 4.4841C16 4.57903 16 4.67981 16 4.87951V12.1668C16 12.6335 15.9997 12.8669 15.9089 13.0452C15.829 13.202 15.7024 13.3296 15.5456 13.4095C15.3676 13.5002 15.1342 13.5002 14.6684 13.5002H10.1667M11.8333 1.00021V3.83355C11.8333 4.30026 11.8333 4.53345 11.9242 4.71171C12.0041 4.86851 12.1314 4.99625 12.2882 5.07614C12.4663 5.16688 12.6992 5.16688 13.165 5.16688H15.9997"
                stroke="#C4C4C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1">
              <p className="text-text-light text-xs sm:text-sm font-semibold opacity-60 mb-2 sm:mb-3">
                Indexing
              </p>
              <p className="text-text-light text-sm sm:text-[15px] font-semibold leading-5">
                Found the character shop, let me now add the new cool characters to the
                main game
                <br />
                <br />
                We will now redo the layout for the character shop to fit everything and
                add the new characters
              </p>
            </div>
          </div>

          {/* AI Action 3 */}
          <div className="flex items-start gap-2 sm:gap-3">
            <svg
              className="w-[13px] h-[15px] mt-1 opacity-50 flex-shrink-0"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M2.62498 7.66683V3.66683C2.62498 2.73341 2.62498 2.26635 2.80209 1.90983C2.95788 1.59623 3.20629 1.34144 3.51205 1.18166C3.85966 1 4.31503 1 5.22511 1H8.86061C8.96019 1 9.04731 1 9.1249 1.00072M13.9991 6C13.9998 6.07967 13.9998 6.16913 13.9998 6.2714V13.3363C13.9998 14.2679 13.9998 14.7337 13.8229 15.0899C13.6671 15.4035 13.418 15.6587 13.1123 15.8185C12.765 16 12.3107 16 11.4024 16L8.31241 16M13.9991 6C13.9969 5.76209 13.9882 5.61146 13.9546 5.46777C13.9148 5.29771 13.8489 5.13512 13.7598 4.986C13.6593 4.8178 13.5196 4.67407 13.2385 4.38582L10.6991 1.78125C10.4182 1.49318 10.2775 1.3488 10.1135 1.24577C9.96815 1.15439 9.80976 1.08688 9.64395 1.04605C9.5038 1.01154 9.35698 1.00289 9.1249 1.00072M13.9991 6H14M13.9991 6H11.7224C10.8141 6 10.3592 6 10.012 5.81852C9.70622 5.65873 9.45781 5.40326 9.30201 5.08966C9.1249 4.73314 9.1249 4.26675 9.1249 3.33333V1.00072M5.06245 10.1667L6.68743 11.8333M1 16V13.9167L7.09368 7.66667L9.1249 9.75L3.03123 16H1Z"
                stroke="#C4C4C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1">
              <p className="text-text-light text-xs sm:text-sm font-semibold opacity-60 mb-2 sm:mb-3">
                Searching and Editing files
              </p>
              <p className="text-text-light text-sm sm:text-[15px] font-semibold leading-5">
                Done, the experience now has cool characters, with a skin shop where you
                can purchase them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="p-2 sm:p-3 pb-3 sm:pb-6">
        <div className="relative h-[50px] sm:h-[57px] rounded-[15px] border border-chat-border bg-chat-input-bg flex items-center px-4 sm:px-5">
          <input
            type="text"
            placeholder="Write your ideas..."
            className="flex-1 bg-transparent text-text-muted text-xs sm:text-sm font-medium placeholder:text-text-muted focus:outline-none"
          />
          <button className="w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
            >
              <path
                d="M7.16953 0.302734C6.77901 -0.0877906 6.14585 -0.0877906 5.75532 0.302734L-0.608633 6.66676C-0.99916 7.05729 -0.99916 7.69045 -0.608633 8.08097C-0.218108 8.4715 0.415053 8.4715 0.805577 8.08097L6.46241 2.42414L12.1193 8.08097C12.5098 8.4715 13.1429 8.4715 13.5335 8.08097C13.924 7.69045 13.924 7.05729 13.5335 6.66676L7.16953 0.302734ZM6.46241 13.9154H7.46241V1.00992H6.46241H5.46241V13.9154H6.46241Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
