import React from 'react'
import MenuTitle from './MenuTitle'
import MenuRequest from './MenuRequest'
import AlertInformation from './AlertInformation'
import MenuOptions from './MenuOptions'
import MenuDays from "@/components/MenuDays";
import { DateOnMenu, Order } from '@/interface/types'

interface MenuProps {
  weekdays: DateOnMenu[] | null,
  isLoading: boolean,
  order: Order,
  decreaseQuantity: (date: string, menu_id: number) => void;
  increaseQuantity: (date: string, menu_id: number) => void;  
  updateSku: (date: string, menu_id: number, new_sku: string) => void;  
  updateExtra: (newValue: boolean) => void;
  updatePackage: (newValue: boolean) => void;
}

const Menu = ({ weekdays, isLoading, order, decreaseQuantity, increaseQuantity, updateSku, updateExtra, updatePackage }: MenuProps) => {
    return (
      <div className='bg-[#FDF6EE] rounded-lg p-[24px] flex  flex-col gap-[24px] items-start flex-nowrap relative lg:m-5 xl:mx-auto xl:my-[40px]'>
          <MenuTitle weekdays={weekdays} isLoading={isLoading} />
          <AlertInformation name="Đặt đơn trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau." />
          <AlertInformation name="Lựa chọn thực đơn theo ngày (Tối thiểu 2 ngày cho 1 đơn hàng) " />
          {weekdays && weekdays.length > 0 ? (
              <MenuDays 
                weekdays={weekdays}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                updateSku={updateSku}
              />
          ) : (
              <p>Loading menu...</p>
          )}
          <MenuOptions hasExtra={order.has_extra} hasPackage={order.has_package} updateExtra={updateExtra} updatePackage={updatePackage}/>
          <MenuRequest />
      </div>
    )
}


export default Menu