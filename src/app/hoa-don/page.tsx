'use client';

import { useOrder } from '@/context/orderContext';
import { useEffect } from 'react';

export default function HoaDon() {
  const { order } = useOrder();

  useEffect(() => {
      console.log('Order state updated:', order);
  }, [order]);

  return (
    <div>
      <h1>Hóa Đơn</h1>
      {order ? (
        <p>Customer ID: {order.customer_id}</p>
      ) : (
        <p>No order data available.</p>
      )}
    </div>
  );
}
