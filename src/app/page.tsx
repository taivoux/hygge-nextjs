'use client';

import { useState } from 'react';
import BtnPrimary from "@/components/BtnPrimary";
import CustomerForm from "@/components/CustomerForm";
import Menu from "@/components/Menu";
import Title from "@/components/Title";

export default function Home() {
  const [customerId, setCustomerId] = useState<number | null>(null);

  const handleCustomerRegister = (newCustomerId: number) => {
    setCustomerId(newCustomerId); // Update state with new customer_id
  };

  return <>
    <Title />

    <CustomerForm onRegister={handleCustomerRegister} />

    <Menu />

    <BtnPrimary name="Đến Trang Thanh Toán" link={`/hoa-don/${customerId || 1}`} />

  </>
}
