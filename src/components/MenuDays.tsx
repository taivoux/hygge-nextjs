import React, { useState } from "react";
import { Tabs, Tab, Box, Skeleton } from "@mui/material";
import MenuCard from "./MenuCard";
import { DateOnMenu } from "@/interface/types";

interface MenuDayProps {
  weekdays: DateOnMenu[] | [];
  decreaseQuantity: (date: string, menu_id: number) => void;
  increaseQuantity: (date: string, menu_id: number) => void;
  updateSku: (date: string, menu_id: number, new_sku: string) => void;
}

const MenuDays = ({
  weekdays,
  decreaseQuantity,
  increaseQuantity,
  updateSku,
}: MenuDayProps) => {
  const [activeTab, setActiveTab] = useState(
    weekdays ? weekdays[0]?.date.toString() : "",
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        className="menu-day lg:flex lg:flex-wrap"
      >
        {weekdays.map((day) => (
          <Tab
            key={day.date}
            value={day.date.toString()}
            label={
              <Box className="menu-tab-title">
                {day.titleDay}{" "}
                <span className="hidden lg:inline-block">
                  ({day.titleNumber})
                </span>
              </Box>
            }
          />
        ))}
      </Tabs>
      {weekdays &&
        weekdays.map((day) => (
          <Box
            key={day.date}
            hidden={activeTab !== day.date.toString()}
            className="menu-box"
          >
            {activeTab === day.date.toString() && (
              <Box className="flex gap-5 flex-col lg:flex-row">
                {day.menuOnMeal && day.menuOnMeal.length > 0 ? (
                  day.menuOnMeal.map((meal) => (
                    <MenuCard
                      key={meal.menu_id}
                      weekdays={weekdays}
                      date={day.date}
                      meal={meal}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                      updateSku={updateSku}
                    />
                  ))
                ) : (
                  <>
                    <Skeleton
                      variant="rectangular"
                      width={380}
                      height={260}
                      sx={{ borderRadius: "8px" }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={380}
                      height={260}
                      sx={{ borderRadius: "8px" }}
                    />
                  </>
                )}
              </Box>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default MenuDays;
