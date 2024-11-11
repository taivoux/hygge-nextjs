import Link from 'next/link'
import React from 'react'

interface BtnPrimaryProps {
    name: string;
    link: string;
}
  

const BtnPrimary = ({ name, link}: BtnPrimaryProps) => {
    return (
        <div className='mt-10 flex w-[1200px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center flex-nowrap bg-[#009e44] rounded-[8px] relative overflow-hidden mx-auto my-0'>
            <Link href={link}>
                <button className='cursor-pointer flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative'>
                    <span className="flex w-[16px] h-[16px] justify-center items-center font-['Font_Awesome_6_Pro'] text-[16px] font-black leading-[16px] text-[#fff] relative text-center whitespace-nowrap z-[1]">
                        {name} 
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default BtnPrimary