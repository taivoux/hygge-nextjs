import React from 'react'
import MenuTitle from './MenuTitle'
import MenuRequest from './MenuRequest'
import AlertInformation from './AlertInformation'
import MenuOptions from './MenuOptions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCard from './MenuCard'

interface Weekday {
    titleDay: string; // e.g., "Thứ 2", "Thứ 3"
    titleNumber: string; // e.g., "18/11" (DD/MM format)
    date: string; // e.g., "18112024" (DDMMYYYY format)
  };
  
  function getNextFiveWeekdays(): Weekday[] {
    const weekdays: Weekday[] = [];
    const today = new Date();
    const hour = today.getHours();
  
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
        date: `${day}${month}${year}`, // Format as DDMMYYYY
      };
        weekdays.push(value);
      }
    }
    return weekdays;
  }
  

const Menu = ({ updateQuantity, order }: { updateQuantity: void; order: any }) => {
    const weekdays = getNextFiveWeekdays();

    return (
        <div className='menu-container'>
            <MenuTitle />
            <AlertInformation name="Đặt đơn trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau." />
            <AlertInformation name="Lựa chọn thực đơn theo ngày (Tối thiểu 2 ngày cho 1 đơn hàng) " />
            <Tabs defaultValue={weekdays[0].date} className="min-h-[360px]">
                <TabsList>
                    {weekdays.map((day) => (
                        <TabsTrigger key={day.date} value={day.date.toString()} > {day.titleDay} ({day.titleNumber}) </TabsTrigger>
                    ))}
                </TabsList>
                {weekdays.map((day) => (
                    <TabsContent key={day.date} value={day.date.toString()} > {day.date} 
                        <MenuCard  
                            menuDate={day.date}   
                            updateQuantity={updateQuantity}
                            currentOrder={order}  
                        />
                    </TabsContent>
                ))}
            </Tabs>
            <MenuOptions />
            <MenuRequest />
            
        </div>
    )
}


export default Menu