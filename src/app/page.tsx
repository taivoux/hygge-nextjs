'use client';

import { useEffect, useState } from "react";
import AlertInformation from "@/components/AlertInformation";
import MenuOptions from "@/components/MenuOptions";
import MenuRequest from "@/components/MenuRequest";
import MenuTitle from "@/components/MenuTitle";
import Title from "@/components/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import getNextFiveWeekdays from "@/utils/dateUtils"
import { DateOnMenu, Order } from "@/interface/types";
import MenuCard from "@/components/MenuCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
    const [weekdays, setWeekdays] = useState<DateOnMenu[]>([]);
    const [order, setOrder] = useState<Order>({
        customer_id: 0,
        admin_id: 0,
        has_package: false,
        has_extra: false,
        no_of_date: 0,
        ProductOnOrder: [],
        MenuOnProduct: [],
    });
    //const weekdays = getNextFiveWeekdays();
    useEffect(() => {
        const fetchWeekdays = async () => {
          try {
            const data = await getNextFiveWeekdays(); // Await the Promise here
            setWeekdays(data);
          } catch (error) {
            console.error('Error fetching weekdays:', error);
          }
        };
    
        fetchWeekdays();
    }, []);
    const decreaseQuantity = (date: string, menuId: number) => {
        setWeekdays((prevWeekdays) => {
            // Map through the weekdays to find the target date
            return prevWeekdays.map((day) => {
              if (day.date === date) {
                // Update the menuOnMeal array for the matched date
                const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
                  if (meal.menu_id === menuId) {
                    // Decrease the quantity but ensure it doesn't go below 0
                    return { ...meal, quantity: Math.max(meal.quantity - 1, 0) };
                  }
                  return meal;
                });
        
                // Return the updated day with modified menuOnMeal
                return { ...day, menuOnMeal: updatedMenuOnMeal };
              }
              return day; // Return other days unchanged
            });
          });
    }
    const increaseQuantity = (date: string, menuId: number) => {
        setWeekdays((prevWeekdays) => {
            // Map through the weekdays to find the target date
            return prevWeekdays.map((day) => {
              if (day.date === date) {
                // Update the menuOnMeal array for the matched date
                const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
                  if (meal.menu_id === menuId) {
                    // Increase the quantity
                    return { ...meal, quantity: meal.quantity + 1 };
                  }
                  return meal;
                });
        
                // Return the updated day with modified menuOnMeal
                return { ...day, menuOnMeal: updatedMenuOnMeal };
              }
              return day; // Return other days unchanged
            });
          });
    }
    const updateSku = (date: string, menuId: number, newSku: string) => {
        setWeekdays((prevWeekdays) => {
            // Map through the weekdays to find the target date
            return prevWeekdays.map((day) => {
              if (day.date === date) {
                // Update the menuOnMeal array for the matched date
                const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
                  if (meal.menu_id === menuId) {
                    // Change sku
                    return { ...meal, sku: newSku};
                  }
                  return meal;
                });
        
                // Return the updated day with modified menuOnMeal
                return { ...day, menuOnMeal: updatedMenuOnMeal };
              }
              return day; // Return other days unchanged
            });
        });
    }
    const updateExtra = (newValue: boolean) => {
        setOrder((prevOrder) => {
            return {...prevOrder, has_extra: newValue }
        });
    }
    const updatePackage = (newValue: boolean) => {
      setOrder((prevOrder) => {
          return {...prevOrder, has_package: newValue }
      });
  }
    // Debug
    useEffect(() => {
        console.log('Menu Day updated:', weekdays);
    }, [weekdays]);
    useEffect(() => {
      console.log('Order state updated:', order);
  }, [order]);
    return <>
        <Title />
        <div className='bg-[#FDF6EE] rounded-lg p-[24px] flex  flex-col gap-[24px] items-start flex-nowrap relative m-5 xl:mx-auto xl:my-[40px]'>
            <MenuTitle />
            <AlertInformation name="Đặt đơn trước 21:00 hằng ngày sẽ được giao vào ngày hôm sau." />
            <AlertInformation name="Lựa chọn thực đơn theo ngày (Tối thiểu 2 ngày cho 1 đơn hàng) " />
            {weekdays.length > 0 ? (
                <Tabs defaultValue={weekdays[0].date.toString()} className="xl:min-h-[360px] h-auto">
                    <TabsList className="bg-[#FDF6EE] gap-[16px] mb-5 flex-wrap h-auto">
                        {(weekdays).map((day) => (
                            <TabsTrigger key={day.date} value={day.date.toString()} className="bg-[#F2F7F4] border-[#19B43B] p-[16px]"> 
                            {day.titleDay} <span className="hidden xl:block ml-1">({day.titleNumber})</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {(weekdays).map((day) => (
                        <TabsContent key={day.date} value={day.date.toString()} > 
                          <div className="flex gap-5 flex-col lg:flex-row">
                              {day.menuOnMeal && day.menuOnMeal.length > 0  ? (
                                  day.menuOnMeal.map((meal) => (
                                      <MenuCard 
                                          key={meal.menu_id} 
                                          weekdays={weekdays} 
                                          date={day.date} 
                                          meal={meal} 
                                          decreaseQuantity={decreaseQuantity} 
                                          increaseQuantity={increaseQuantity} 
                                          updateSku={updateSku}
                                      /> 
                                  ))
                              ) : ( 
                                  <>
                                      <Skeleton className="w-[380px] h-[260px] rounded-lg" />
                                      <Skeleton className="w-[380px] h-[260px] rounded-lg" />
                                  </>
                              )}
                          </div>
                        </TabsContent>
                    ))}
                </Tabs>
            ) : (
                <p>Loading menu...</p>
            )}
            <MenuOptions hasExtra={order.has_extra} hasPackage={order.has_package} updateExtra={updateExtra} updatePackage={updatePackage}/>
            <MenuRequest />
        </div>
    </>
}