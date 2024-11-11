import React from 'react'

const Title = () => {
    return (
        <div className='pt-[40px] flex w-[1200px] flex-col gap-[16px] items-start flex-nowrap relative mx-auto my-0'>
            <span className="h-[48px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[32px] font-bold leading-[48px] text-[#333333] relative text-left whitespace-nowrap">
                Đặt gói ăn
            </span>
            <button className='flex items-start self-stretch shrink-0 flex-nowrap bg-[#f3f9fe] rounded-[8px] border-solid border border-[#d8e6fe] relative overflow-hidden z-[1] pointer'>
                <div className='flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative overflow-hidden z-[2]'>
                    <div className='flex w-[25px] h-[25px] justify-center items-center shrink-0 flex-nowrap relative z-[3]'>
                        {/* <span className="flex w-[20px] h-[21px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[20px] font-black leading-[21px] text-[#0176d3] relative text-center whitespace-nowrap z-[4]">
                            info-circle
                        </span> */}
                    </div>
                    <div className='flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[5]'>
                        <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#414141] relative text-left whitespace-nowrap z-[6]">
                            Order trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau.
                        </span>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Title