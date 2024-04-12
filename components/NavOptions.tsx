export const WhatsNew = ()=> {
    return (
        <div className="flex flex-col justify-between items-start w-full">
                {/* upper part */}
                <div className="relative w-full">
                    <img src="	https://web-images.credcdn.in/v2/_next/assets/images/landing/spotlight-poster-final.png" alt="image" className="w-full cursor-pointer" />
                    <div className="absolute -top-[18px] left-[30px] px-[15px] py-[5px] flex justify-center items-center border  border-[rgba(255,255,255,0.2)] bg-black  text-[14px] not-italic font-bold leading-6 tracking-[4px] uppercase text-center text-white">
                        now live
                    </div>
                </div>
                {/* lower part */}
                <div className="flex flex-wrap justify-between items-center w-full mt-[5%] gap-[60px]">
                    {/* 1st content */}
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/garage-thumbnail.png" alt="logo1" className="w-[180px]" />
                            <div className=" text-xl not-italic font-semibold leading-6 tracking-[5px] text-center text-[rgba(255,_255,_255,_0.9)] uppercase mt-[25px]">
                                garage
                            </div>
                            <div className=" text-[18px] not-italic font-medium leading-[23px] tracking-[0.1px] text-center text-[rgba(255,_255,_255,_0.4)] mt-[5px]">
                            manage, maintain, and
                            <br />
                            obsess over your cars
                            </div>
                    </div>
                    {/* 2nd content */}
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/garage-thumbnail.png" alt="logo1" className="w-[180px]" />
                            <div className=" text-xl not-italic font-semibold leading-6 tracking-[5px] text-center text-[rgba(255,_255,_255,_0.9)] uppercase mt-[25px]">
                                garage
                            </div>
                            <div className=" text-[18px] not-italic font-medium leading-[23px] tracking-[0.1px] text-center text-[rgba(255,_255,_255,_0.4)] mt-[5px]">
                            manage, maintain, and
                            <br />
                            obsess over your cars
                            </div>
                    </div>
                    {/* 3rd content */}
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/garage-thumbnail.png" alt="logo1" className="w-[180px]" />
                            <div className=" text-xl not-italic font-semibold leading-6 tracking-[5px] text-center text-[rgba(255,_255,_255,_0.9)] uppercase mt-[25px]">
                                garage
                            </div>
                            <div className=" text-[18px] not-italic font-medium leading-[23px] tracking-[0.1px] text-center text-[rgba(255,_255,_255,_0.4)] mt-[5px]">
                            manage, maintain, and
                            <br />
                            obsess over your cars
                            </div>
                    </div>
                </div>
        </div>
    )
}

export const Payments = ()=> {
    return (
        <div className="flex justify-start items-center flex-wrap">
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="	https://web-images.credcdn.in/v2/_next/assets/images/landing/tnp-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                                tap to pay
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/p2p-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                               Pay to anyone
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/rupay-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                              Rupay cards on upi
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/snp-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                              scan & pay
                            </div>
                        </div>
                    </div>
                </a>
        </div>
    )
}


export const Company = ()=> {
    return (
        <div className="flex flex-col justify-center items-start">
                <a href="/1234">
                    <div className="text-[rgba(255,_255,_255,_0.4)] text-[28.08px] not-italic font-medium leading-[37.44px] tracking-[6px] uppercase cursor-pointer">
                        about cred
                    </div>
                </a>
                <a href="/1234">
                    <div className="text-[rgba(255,_255,_255,_0.4)] text-[28.08px] not-italic font-medium leading-[37.44px] tracking-[6px] uppercase cursor-pointer mt-5">
                       careers
                    </div>
                </a>

        </div>
    )
}


export const Upgrades = ()=> {
     return (
        <div className=" flex justify-start items-center flex-wrap">
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/travel-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                                travel
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/garage-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                                garage
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/123" className="flex-[1_1_50%]">
                    <div className="flex justify-start items-center cursor-pointer w-max mt-[40px]">
                        <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/mint-logo.png" alt="" className="w-[53px]" />
                        <div className="flex flex-col justify-center items-start ml-5">
                            <div className=" text-[26px] not-italic font-medium leading-8 tracking-[6px] text-left text-[rgba(255,_255,_255,_0.7)] uppercase">
                                mint
                            </div>
                        </div>
                    </div>
                </a>
        </div>
     )
}

export const InsiderPerks = ()=> {
    return (
        <div className="flex flex-col justify-center items-start">
              <a href="#" className="mt-0">
                <div className="text-white text-opacity-40  text-[28.08px] not-italic font-medium leading-[37.44px] tracking-[6px] uppercase cursor-pointer animate-[2s_ease_0s_1_normal_none_running_fadein]">
                  Upcoming UPI
                </div>
              </a>
            </div>
    )
}