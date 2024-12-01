// app/context/OrderContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import { Order } from '@/interface/types';

// Define the context value type
interface OrderContextType {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

// Create the context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Default order state
const defaultOrder: Order = {
  customer_id: 1,
  admin_id: 0,
  has_package: false,
  has_extra: false,
  no_of_date: 0,
  ProductOnOrder: [],
  MenuOnProduct: [],
};

// Provider component
export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<Order>(defaultOrder);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook to use the order context
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
