'use client';

import { useEffect, useState } from "react";
import { useMenu } from '@/context/menuContext';
import { useOrder } from '@/context/orderContext';
import Title from "@/components/Title";
import Menu from '@/components/Menu'
import { decreaseQuantity, increaseQuantity, updateSku, updateExtra, updatePackage } from "@/utils/menuUtils";
import { Button } from "@mui/material";
import { getProducts } from "@/utils/productUtils";
import { Product } from "@/interface/types";
import { updateOrder } from "@/utils/orderUtils";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { weekdays, isLoading, error , setWeekdays } = useMenu();
  const { order, setOrder } = useOrder();
  const [ products, setProducts ] = useState<Product[]>([]);
  //const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (erro) {
            //setError(err.message);
            console.error("Failed to fetch products:", erro);
            throw new Error("Unable to fetch products at this time. Please try again later.");
        }
    };

    fetchProducts();
}, []);

    // Handlers
    const handleNavigation = () => {
      // Trigger updateOrder
      const updatedOrder = updateOrder(order, weekdays, products); // Ensure products is available
      setOrder(updatedOrder); // Update the global order context

      // Navigate to the next page
      router.push('/hoa-don');
    };

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
    useEffect(() => {
        console.log('Product updated:', products);
    }, [products]);
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
        <Button variant="contained" onClick={handleNavigation} >Click Here</Button>
        
      </>
    )
}