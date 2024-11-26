import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { DateOnMenu } from "@/interface/types";


interface BtnProps {
  weekdays: DateOnMenu[];
  date: string;
  menu_id: number;
  decreaseQuantity: (date: string, menu_id: number) => void;
  increaseQuantity: (date: string, menu_id: number) => void;
}

const BtnQuantity = ({weekdays, date, menu_id, decreaseQuantity, increaseQuantity} : BtnProps ) => {
  // Find the specific date and menu item to get the quantity
  const day = weekdays.find((day) => day.date === date);
  const menuItem = day?.menuOnMeal.find((meal) => meal.menu_id === menu_id);
  const quantity = menuItem?.quantity || 0; // Default to 0 if not found
  return (
    <div className="flex gap-2">
        <Button variant="outline" className="h-[48px] text-2xl px-[24px] py-[12px] border-[#D9D9D9]" onClick={() =>decreaseQuantity(date,menu_id)} >-</Button>
        <div className="px-[24px] py-[12px] outline rounded-lg border-[#dddada]">
          {quantity}
        </div>
        <Button variant="outline" className="h-[48px] text-2xl px-[24px] py-[12px] border-[#D9D9D9]" onClick={() =>increaseQuantity(date,menu_id)} >+</Button>
    </div>
  )
}

export default BtnQuantity