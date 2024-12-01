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
import BtnQuantity from "./BtnQuantity";
import { DateOnMenu, MenuOnMeal } from "@/interface/types";


interface MenuProps {
    weekdays: DateOnMenu[] | null,
    date: string,
    meal: MenuOnMeal;
    decreaseQuantity: (date: string, menu_id: number) => void;
    increaseQuantity: (date: string, menu_id: number) => void;  
    updateSku: (date: string, menu_id: number, new_sku: string) => void;  
}

const MenuCard = ({weekdays, date, meal, decreaseQuantity, increaseQuantity, updateSku } : MenuProps) => {
    // Find the specific date and menu item to get the quantity
    // const day = weekdays.find((day) => day.date === date);
    // const menuItem = day?.menuOnMeal.find((meal) => meal.menu_id === menu_id);
    // const quantity = menuItem?.quantity || 0; // Default to 0 if not found

    return (
        <>
            {meal ? (
                <Card key={meal.menu_id} className="flex-1 lg:max-w-96" >
                    <CardHeader>
                        <div className="flex gap-2 pb-2">
                            <Badge className="bg-[#ADE9C7] text-[#019F45] ">Món Chay</Badge>
                            <Badge className="bg-[#FFD1D1]  text-[#FF9292]">Yêu Thích</Badge>
                        </div>
                        <CardTitle>{meal.name}</CardTitle>
                        <CardDescription>{meal.name_english}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue={meal.sku}>
                            <TabsList className="flex-wrap h-auto">
                                <TabsTrigger value="B" onClick={() => updateSku(date,meal.menu_id,"B") } >Gói Balance</TabsTrigger>
                                <TabsTrigger value="F" onClick={() => updateSku(date,meal.menu_id,"F") }>Gói Fatloss</TabsTrigger>
                                <TabsTrigger value="M" onClick={() => updateSku(date,meal.menu_id,"M") }>Gói Muscle Gain</TabsTrigger>
                            </TabsList>
                            <TabsContent value="B">{meal.calo_balance}</TabsContent>
                            <TabsContent value="F">{meal.calo_fatloss}</TabsContent>
                            <TabsContent value="M">{meal.calo_muscle}</TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter>
                        <BtnQuantity 
                            weekdays={weekdays}
                            date={date}
                            menu_id={meal.menu_id}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                        /> 
                    </CardFooter>
                </Card>
            ) : ([]) }
        </>
    )
}

export default MenuCard