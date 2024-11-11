import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const MenuCard = () => {
    return (
        <div className='flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[24px] justify-center items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[54]'>
            <div className='flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]'>
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[18px] font-bold leading-[28px] text-[#1e1e1e] relative text-left whitespace-nowrap z-[56]">
                    Bún đùi gà quay thảo mộc
                </span>
                <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#414141] relative text-left whitespace-nowrap z-[57]">
                    Rice vermicelli with roasted chicken and herbs
                </span>
            </div>
            <div className='flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]'>
                <Select >
                    <SelectTrigger className="w-[534px] h-[48px]">
                        <SelectValue placeholder="Gói Balance" />
                    </SelectTrigger>
                    <SelectContent>
                            <SelectItem value="1">Gói Balance</SelectItem>
                            <SelectItem value="2">Gói Fatloss</SelectItem>
                            <SelectItem value="3">Gói Muscle Gain</SelectItem>
                    </SelectContent>
                </Select>
                <div className='flex pt-[4px] pr-0 pb-[4px] pl-[10px] flex-col gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[2px] border-solid border-l-2 border-l-[#000] relative z-[64]'>
                    <div className='flex flex-col gap-[2px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[65]'>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#414141] relative text-left whitespace-nowrap z-[66]">
                            Thông tin calorie
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-bold leading-[20px] text-[#414141] relative text-left whitespace-nowrap z-[67]">
                            45gr : 22gr : 20gr | 448kcal
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex gap-[144px] items-center self-stretch shrink-0 flex-nowrap relative z-[68]'>
                <div className='flex w-[176px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[69]'>
                    <div className='flex w-[48px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[70]'>
                        <div className='flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative z-[71]'>
                            <span className="flex w-[16px] h-[16px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[16px] font-black leading-[16px] text-[#333333] relative text-center whitespace-nowrap z-[72]">
                                -
                            </span>
                        </div>
                    </div>
                    <button className='flex w-[64px] h-[48px] flex-col gap-[4px] items-center shrink-0 flex-nowrap border-none relative z-[73] pointer'>
                        <div className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] justify-center items-center self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[74]'>
                            <div className="w-[8px] shrink-0 font-['Manrope'] text-[16px] font-normal leading-[16px] relative text-center whitespace-nowrap z-[75]">
                                <span className="font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#333333] relative text-center">
                                    1
                                </span>
                            </div>
                        </div>
                    </button>
                    <div className='flex w-[48px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[76]'>
                        <div className='flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative z-[77]'>
                            <span className="flex w-[16px] h-[16px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[16px] font-black leading-[16px] text-[#333333] relative text-center whitespace-nowrap z-[78]">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard