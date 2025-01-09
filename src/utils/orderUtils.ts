import { DateOnMenu, Order, Product } from "@/interface/types"; // Assuming you have a shared types file
import { toast } from "@/hooks/use-toast";
import { updateMenuOnProduct, updateProductOnOrder } from "./productUtils";

export const handleSubmit = async (order: Order) => {
  try {
    const response = await fetch("http://localhost:3000/api/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      toast({
        title: "Success",
        description: "Order created successfully!",
      });
    } else {
      const errorData = await response.json();
      toast({
        title: "Error",
        description: errorData.error || "Failed to create order.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error submitting order:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred.",
      variant: "destructive",
    });
  }
};

export function updateOrder(
  order: Order,
  weekdays: DateOnMenu[],
  products: Product[],
): Order {
  const updatedProductOnOrder = updateProductOnOrder(weekdays, products);
  const updatedMenuOnProduct = updateMenuOnProduct(weekdays, products);

  return {
    ...order,
    ProductOnOrder: updatedProductOnOrder,
    MenuOnProduct: updatedMenuOnProduct,
  };
}
