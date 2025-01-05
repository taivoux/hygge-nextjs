"use client";

import { useOrder } from "@/context/orderContext";
import { handleSubmit } from "@/utils/orderUtils";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function HoaDon() {
  const { order } = useOrder();
  const shippingFee = 20000;
  const deduction = 0;

  useEffect(() => {
    console.log("Order state updated:", order);
  }, [order]);

  return (
    <div>
      <h1>Kiểm tra hoá đơn</h1>
      <div className="bg-[#FDF6EE] rounded-lg p-[24px] flex  flex-col gap-[24px] items-start flex-nowrap relative lg:m-5 xl:mx-auto xl:my-[40px]">
        <h2>Tóm tắt đơn hàng</h2>
        {order ? (
          <>
            <p>Customer ID: {order.customer_id}</p>
            {/* List the ProductOnOrder here */}
            {order.ProductOnOrder.map((product) => {
              return (
                <div
                  key={product.product_id}
                  className="flex w-full justify-between"
                >
                  <div>
                    {product.name} x {product.quantity}
                  </div>
                  <div>
                    <strong>{product.sub_price.toLocaleString("vi-VN")}</strong>
                  </div>
                </div>
              );
            })}
            {/* Vận chuyển */}
            <div className="flex w-full justify-between">
              <div>Phí Ship</div>
              <div>
                <strong>{shippingFee.toLocaleString("vi-VN")}</strong>
              </div>
            </div>
            {/* Total */}
            <div className="flex w-full justify-between">
              <div>Tổng Tiền</div>
              <div>
                <strong>20.000</strong>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>Giảm Tiền</div>
              <div>
                <strong>{deduction.toLocaleString("vi-VN")}</strong>
              </div>
            </div>
            <div className="flex w-full justify-between text-[#059E02] text-[24px]">
              <div>
                <strong>Tổng Đơn Hàng</strong>
              </div>
              <div>
                <strong>0</strong>
              </div>
            </div>
            <Button variant="contained" onClick={() => handleSubmit(order)}>
              Click Here
            </Button>
          </>
        ) : (
          <p>No order data available.</p>
        )}
      </div>
    </div>
  );
}
