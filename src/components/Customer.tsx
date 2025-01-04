"use client";

import { useState } from "react";
import React from "react"
import { Order } from "@/interface/types";
import { Tabs, Tab, Box } from "@mui/material";
import CustomerNew from "./CustomerNew";
import CustomerOld from "./CustomerOld";
import CustomerOldAdmin from "./CustomerOldAdmin";
import { AppStateProvider } from './customer/variables';

interface CustomerProps {
  order: Order;
  updateCustomer: (newValue: number) => void;
}

const Customer = ({ order, updateCustomer }: CustomerProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

    return (
      <AppStateProvider>
        <div className="bg-[#FDF6EE] rounded-lg p-[24px] flex  flex-col gap-[24px] items-start flex-nowrap relative lg:m-5 xl:mx-auto xl:my-[40px]">
            <h2>Bạn đã từng đặt hàng tại Hygge?</h2>
            <Box sx={{ width: "100%" }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    aria-label="customer-tabs"
                    centered
                >
                    <Tab label="Khách hàng mới" />
                    <Tab label="Khách hàng cũ 💕" />
                    <Tab label="Khách hàng cũ Admin 💕" />
                </Tabs>

                {/* Tab Panels */}
                {activeTab === 0 && <CustomerNew updateCustomer={updateCustomer} />}
                {activeTab === 1 && <CustomerOld updateCustomer={updateCustomer} />}
                {activeTab === 2 && (
                  <CustomerOldAdmin updateCustomer={updateCustomer} />
                )}
            </Box>
        </div>
        </AppStateProvider>
    )
}

export default Customer;
