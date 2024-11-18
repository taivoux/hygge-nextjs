import React from 'react'
import MenuTitle from './MenuTitle'
import MenuRequest from './MenuRequest'
import AlertInformation from './AlertInformation'
import MenuOptions from './MenuOptions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCard from './MenuCard'


type Weekday = {
    titleDay: string; // e.g., "Thứ 2", "Thứ 3"
    titleNumber: string; // e.g., "18/11" (DD/MM format)
    key: string; // e.g., "20241118" (DDMMYYYY format)
};
  
function getNextFiveWeekdays(): Weekday[] {
    const weekdays: Weekday[] = [];
    const today = new Date();
    const hour = today.getHours();
  
    // except today
    //today.setDate(today.getDate() + 1);
  
    if (hour >= 21) {
      today.setDate(today.getDate() + 1);
    }
  
    // get next five days
    while (weekdays.length < 5) {
      today.setDate(today.getDate() + 1 );
      const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
  
      // Format the key as DDMMYYYY
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Create a weekday object
      const value: Weekday = {
        titleDay: today.toLocaleDateString("vi-VN", { weekday: "long" }), // e.g., "Thứ 2"
        titleNumber: `${today.getDate()}/${today.getMonth() + 1}`, // Format as DD/MM
        key: `${day}${month}${year}`, // Format as DDMMYYYY
      };
        weekdays.push(value);
      }
    }
    return weekdays;
}
const Menu = () => {
    const weekdays = getNextFiveWeekdays();

    return (
        <div className='mt-10 flex w-[1200px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[24px] items-start flex-nowrap bg-[#fdf6ee] rounded-[12px] relative mx-auto my-0'>
            <MenuTitle />
            <AlertInformation name="Đặt đơn trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau." />
            <AlertInformation name="Lựa chọn thực đơn theo ngày (Tối thiểu 2 ngày cho 1 đơn hàng) " />
            <Tabs defaultValue="19112024" className="min-h-[360px]">
                <TabsList>
                    {weekdays.map((day) => (
                        <TabsTrigger key={day.key} value={day.key.toString()} > {day.titleDay} ({day.titleNumber}) </TabsTrigger>
                    ))}
                </TabsList>
                {weekdays.map((day) => (
                    <TabsContent key={day.key} value={day.key.toString()} > {day.key} 
                        <MenuCard  menuDate={day.key}  />
                    </TabsContent>
                ))}
            </Tabs>
            <MenuOptions />
            <MenuRequest />
            
        </div>
    )
}


export default Menu