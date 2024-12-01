import { DateOnMenu , MenuOnMeal } from '@/interface/types';
import fakeMenu from '@/data/fakeMenu.json';

export default async function getNextFiveWeekdays(): Promise<DateOnMenu[]>   {
    const weekdays: DateOnMenu[] = [];
    const today = new Date();
    const hour = today.getHours();
  
    // Using fakeMenu
    //if (1 == 1) {
    //  return fakeMenu;
    //}


    if (hour >= 21) {
      today.setDate(today.getDate() + 1);
    }
    
    // get next five days
    while (weekdays.length < 5) {
      today.setDate(today.getDate() + 1 );
      const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
  
      // Format the key as DDMMYYYY
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();
        const date = `${day}${month}${year}`;
        let menuOnMeal : MenuOnMeal[] = [];

        // Fetch menu data for this date
        try {
          const response = await fetch(`http://localhost:3000/api/menu/${date}`);
          const apiData: MenuOnMeal[] = await response.json();
          //menuOnMeal = await response.json();
          // Add default meal_id and quantity
          menuOnMeal = apiData.map((prev) => ({
            ...prev,
            sku: "B", 
            quantity: 0, // Default quantity to 0 if missing
          }));

        } catch (error) {
          console.error(`Failed to fetch menu for date ${date}`, error);
        }
        // Create a weekday object
        const value: DateOnMenu = {
          titleDay: today.toLocaleDateString("vi-VN", { weekday: "long" }), // e.g., "Thứ 2"
          titleNumber: `${today.getDate()}/${today.getMonth() + 1}`, // Format as DD/MM
          date: date, // Format as DDMMYYYY
          menuOnMeal: menuOnMeal,
        };
        weekdays.push(value);
      }
    }


    return weekdays;
}