import { useState, useEffect } from "react";
import React from 'react'
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Skeleton } from "./ui/skeleton";
import BtnQuantity from "./BtnQuantity";


type MenuDay = {
    menu_id: number,
    name: string,
    name_english: string,
    date: string,
    is_vegetarian: boolean,
    is_lunch: boolean,
    calo_balance: string,
    calo_fatloss: string,
    calo_muscle: string,
    created_at: string,
    modified_at: string,
    deleted_at: string | null
}
  

interface MenuProps {
    menuDate: string;
}

const MenuCard = ({menuDate} : MenuProps) => {
    //console.log(menu);
    const [menuData, setMenuData] = useState<MenuDay[] | null> (null);
    useEffect(() => {
        async function fetchMenuData() {
            try {
                const link = `http://localhost:3000/api/menu/${menuDate}`
                const response = await fetch(link);
                const data : MenuDay[] = await response.json();
                //console.log(data)
                setMenuData(data); // Directly set the fetched data
            } catch (error) {
                console.error(`Failed to fetch menu for date ${menuDate}`, error);
            }
        }
    
        if (menuDate) fetchMenuData();
      }, [menuDate] ); // Include menuDate as a dependency

    return (
        <div>
            {menuData ? (
            <div className="flex gap-5 w-full">
                {menuData.map((menu) => (
                    <Card key={menu.menu_id} className="flex-auto" >
                        <CardHeader>
                            <div className="flex gap-2 pb-2">
                                <Badge className="bg-[#ADE9C7] text-[#019F45] ">Món Chay</Badge>
                                <Badge className="bg-[#FFD1D1]  text-[#FF9292]">Yêu Thích</Badge>
                            </div>
                            <CardTitle>{menu.name}</CardTitle>
                            <CardDescription>{menu.name_english}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="1" className="w-full">
                            <TabsList>
                                <TabsTrigger value="1">Gói Balance</TabsTrigger>
                                <TabsTrigger value="2">Gói Fatloss</TabsTrigger>
                                <TabsTrigger value="3">Gói Muscle Gain</TabsTrigger>
                            </TabsList>
                            <TabsContent value="1">{menu.calo_balance}</TabsContent>
                            <TabsContent value="2">{menu.calo_fatloss}</TabsContent>
                            <TabsContent value="3">{menu.calo_muscle}</TabsContent>
                            </Tabs>
                        </CardContent>
                        <CardFooter>
                            <BtnQuantity />
                        </CardFooter>
                    </Card>
                ))}
            </div>
            ) : (
                <div className="flex gap-5 w-full">
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </div>

            )}
        </div>
                
    )
}

export default MenuCard