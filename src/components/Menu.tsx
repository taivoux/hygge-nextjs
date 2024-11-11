import React from 'react'
import MenuDays from './MenuDays'
import MenuTitle from './MenuTitle'
import MenuRequest from './MenuRequest'
import AlertInformation from './AlertInformation'
import MenuOptions from './MenuOptions'

const Menu = () => {

    return (
        <div className='mt-10 flex w-[1200px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[24px] items-start flex-nowrap bg-[#fdf6ee] rounded-[12px] relative mx-auto my-0'>
            <MenuTitle />
            <AlertInformation name="Đặt đơn trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau." />
            <AlertInformation name="Lựa chọn thực đơn theo ngày (Tối thiểu 2 ngày cho 1 đơn hàng) " />
            <MenuDays />
            <MenuOptions />
            <MenuRequest />
            
        </div>
    )
}

export default Menu