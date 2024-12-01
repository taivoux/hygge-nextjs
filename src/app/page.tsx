'use client';

import { useEffect } from "react";
import { useMenu } from '@/context/menuContext';
import { useOrder } from '@/context/orderContext';
import Title from "@/components/Title";
import Menu from '@/components/Menu'
import { decreaseQuantity, increaseQuantity, updateSku, updateExtra, updatePackage } from "@/utils/menuUtils";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const { weekdays, isLoading, error , setWeekdays } = useMenu();
    const { order, setOrder } = useOrder()

    // Handlers
    const handleDecreaseQuantity = (date: string, menuId: number) => {
      setWeekdays((prevWeekdays) => {
          if (!prevWeekdays) return null ; // Handle null state
          return decreaseQuantity(prevWeekdays, date, menuId);
        }
      );
    };

    const handleIncreaseQuantity = (date: string, menuId: number) => {
        setWeekdays((prevWeekdays) => {
          if (!prevWeekdays) return null; // Handle null state
          return increaseQuantity(prevWeekdays, date, menuId);
        }
      );
    };

    const handleUpdateSku = (date: string, menuId: number, newSku: string) => {
        setWeekdays((prevWeekdays) => {
          if (!prevWeekdays) return null; // Handle null state
          return updateSku(prevWeekdays, date, menuId, newSku);
        }
      );
    };

    const handleUpdateExtra = (newValue: boolean) => {
        setOrder((prevOrder) => updateExtra(prevOrder, newValue));
    };

    const handleUpdatePackage = (newValue: boolean) => {
        setOrder((prevOrder) => updatePackage(prevOrder, newValue));
    };
    // Debug
    useEffect(() => {
        console.log('Week Day updated:', weekdays);
    }, [weekdays]);
    useEffect(() => {
        console.log('Order state updated:', order);
    }, [order]);
    
    return (
      <>
        <Title />
        <Menu 
          weekdays = {weekdays}
          isLoading = {isLoading}
          order = {order}
          decreaseQuantity = {handleDecreaseQuantity}
          increaseQuantity = {handleIncreaseQuantity}
          updateSku = {handleUpdateSku}
          updateExtra = {handleUpdateExtra}
          updatePackage = {handleUpdatePackage}
        />
        {/* Use client-side navigation */}
        <Link href="/hoa-don">
          <Button variant="contained" >Click Here</Button>
        </Link>
        
      </>
    )
}