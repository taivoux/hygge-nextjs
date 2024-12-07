import { DateOnMenu, Order } from "@/interface/types";

export const decreaseQuantity = (
  weekdays: DateOnMenu[],
  date: string,
  menuId: number
): DateOnMenu[] => {
  return weekdays.map((day) => {
    if (day.date === date) {
      const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
        if (meal.menu_id === menuId) {
          return { ...meal, quantity: Math.max(meal.quantity - 1, 0) };
        }
        return meal;
      });

      return { ...day, menuOnMeal: updatedMenuOnMeal };
    }
    return day;
  });
};

export const increaseQuantity = (
  weekdays: DateOnMenu[],
  date: string,
  menuId: number
): DateOnMenu[] => {
  return weekdays.map((day) => {
    if (day.date === date) {
      const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
        if (meal.menu_id === menuId) {
          return { ...meal, quantity: meal.quantity + 1 };
        }
        return meal;
      });

      return { ...day, menuOnMeal: updatedMenuOnMeal };
    }
    return day;
  });
};

export const updateSku = (
  weekdays: DateOnMenu[],
  date: string,
  menuId: number,
  newSku: string
): DateOnMenu[] => {
  return weekdays.map((day) => {
    if (day.date === date) {
      const updatedMenuOnMeal = day.menuOnMeal.map((meal) => {
        if (meal.menu_id === menuId) {
          return { ...meal, sku: newSku };
        }
        return meal;
      });

      return { ...day, menuOnMeal: updatedMenuOnMeal };
    }
    return day;
  });
};

export const updateExtra = (order: Order, newValue: boolean): Order => {
  return { ...order, has_extra: newValue };
};

export const updatePackage = (order: Order, newValue: boolean): Order => {
  return { ...order, has_package: newValue };
};

export const updateCustomer = (order: Order, newValue: number): Order => {
  return { ...order, customer_id: newValue };
};
