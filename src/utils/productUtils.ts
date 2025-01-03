import {
  DateOnMenu,
  MenuOnProduct,
  Product,
  ProductOnOrder,
  PackedFood,
} from "@/interface/types"; // Assuming you have a Product type defined in types

/**
 * Fetches the product data from the API.
 * @returns A promise resolving to an array of Product objects.
 */
export async function getProducts(): Promise<Product[]> {
  const apiUrl = "http://localhost:3000/api/product/Meal";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Error fetching products: ${response.status} ${response.statusText}`
      );
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error(
      "Unable to fetch products at this time. Please try again later."
    );
  }
}

export async function getPackedFood(): Promise<PackedFood[]> {
  const apiUrl = "http://localhost:3000/api/product/Packedfood";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Error fetching products: ${response.status} ${response.statusText}`
      );
    }

    const data: PackedFood[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch packed food on products:", error);
    throw new Error(
      "Unable to fetch products at this time. Please try again later."
    );
  }
}

export function updateProductOnOrder(
  weekdays: DateOnMenu[],
  products: Product[]
): ProductOnOrder[] {
  const productMap: Record<string, { quantity: number; sub_price: number }> =
    {};

  // Iterate over weekdays to aggregate quantities by SKU
  weekdays.forEach((day) => {
    day.menuOnMeal.forEach((meal) => {
      if (meal.quantity > 0) {
        if (!productMap[meal.sku]) {
          productMap[meal.sku] = { quantity: 0, sub_price: 0 };
        }

        // Add quantity and update sub_price
        const product = products.find((p) => p.sku === meal.sku);
        if (product) {
          productMap[meal.sku].quantity += meal.quantity;
          productMap[meal.sku].sub_price =
            productMap[meal.sku].quantity * product.unit_price;
        }
      }
    });
  });

  // Convert aggregated data to ProductOnOrder format
  return Object.entries(productMap).map(([sku, data]) => {
    const product = products.find((p) => p.sku === sku);
    return {
      product_id: product?.product_id || 0,
      quantity: data.quantity,
      sub_price: data.sub_price,
    };
  });
}

export function updateMenuOnProduct(
  weekdays: DateOnMenu[],
  products: Product[]
): MenuOnProduct[] {
  const menuOnProduct: MenuOnProduct[] = [];

  // Iterate over weekdays to map menu items to products
  weekdays.forEach((day) => {
    day.menuOnMeal.forEach((meal) => {
      if (meal.quantity > 0) {
        const product = products.find((p) => p.sku === meal.sku);
        if (product) {
          menuOnProduct.push({
            menu_id: meal.menu_id,
            product_id: product.product_id,
            quantity: meal.quantity,
          });
        }
      }
    });
  });

  return menuOnProduct;
}
