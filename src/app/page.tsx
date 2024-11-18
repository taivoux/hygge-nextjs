'use client';

import { useEffect, useState } from 'react';
import BtnPrimary from "@/components/BtnPrimary";
import CustomerForm from "@/components/CustomerForm";
import Menu from "@/components/Menu";
import Title from "@/components/Title";
import { useToast } from "@/hooks/use-toast"

interface Product {
  product_id: number;
  name: string;
  sku: string;
  unit_price: number
  package_price: number | null;
}

export default function Home() {
  const { toast } = useToast();
  const [customerId, setCustomerId] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]); // State for products

  const handleCustomerRegister = (newCustomerId: number) => {
    setCustomerId(newCustomerId); // Update state with new customer_id
  };

  const [order, setOrder] = useState({
    customer_id: 1,
    admin_id: 0,
    has_package: 0,
    date_shipping: 0,
    ProductsOnOrder: [{ product_id: 1, quantity: 1, sub_price: 0 }],
    MenuOnProduct: [{ product_id: 1, menu_id: 5 }],
  });

  // Fetch products of type 'meal' from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/Meal');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Set fetched products to state
        } else {
          toast({
            title: 'Error',
            description: 'Failed to fetch products.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: 'Error',
          description: 'An unexpected error occurred.',
          variant: 'destructive',
        });
      }
    };

    fetchProducts();
  }, []);

  // Map fetched products to ProductsOnOrder
  useEffect(() => {
    if (products.length > 0) {
      setOrder((prev) => ({
        ...prev,
        ProductsOnOrder: products.map((product) => ({
          product_id: product.product_id,
          quantity: 0, // Default quantity
          sub_price: product.unit_price, // Set sub_price from unit_price
        })),
      }));
    }
  }, [products]);

  // Debug
  useEffect(() => {
    console.log('Order state updated:', order);
  }, [order]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Order created successfully!",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to create order.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
      console.error("Error submitting order:", error);
    }
  };

  return <>
    <Title />

    <CustomerForm onRegister={handleCustomerRegister} />

    <Menu />

    {/* <BtnPrimary name="Đến Trang Thanh Toán" link={`/hoa-don/${customerId || 1}`} /> */}

    <BtnPrimary onSubmit={handleSubmit} />

  </>
}
