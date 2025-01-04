export interface Order {
  customer_id: number;
  admin_id?: number;
  has_package: boolean;
  has_extra: boolean;
  no_of_date?: number;
  ProductOnOrder: ProductOnOrder[];
  MenuOnProduct?: MenuOnProduct[];
}

export interface ProductOnOrder {
    product_id: number;
    name: string;
    quantity: number;
    sub_price: number;
}

export interface MenuOnProduct {
  menu_id: number;
  product_id: number;
  quantity: number;
}

export interface Meal {
  meal_id: number;
  name: string;
  sku: string;
  unit_price: number;
  package_price: number | null;
  quantity: number | 0;
}

export interface MenuOnMeal {
  menu_id: number;
  name: string;
  name_english: string;
  is_vegetarian: boolean | false;
  is_favourite: boolean | false;
  calo_balance: string;
  calo_fatloss: string;
  calo_muscle: string;
  sku: string;
  quantity: number | 0;
}

export interface DateOnMenu {
  titleDay: string; // e.g., "Thứ 2", "Thứ 3"
  titleNumber: string; // e.g., "18/11" (DD/MM format)
  date: string; // e.g., "18112024" (DDMMYYYY format)
  menuOnMeal: MenuOnMeal[];
}

export interface Product {
  product_id: number;
  name: string;
  sku: string;
  unit_price: number;
  package_price: number;
}

export interface PackedFood {
  product_id: number;
  quantity: number;
  name: string;
  unit_price: number;
}

export interface OldCustomer {
  customer_id: number;
  name: string;
  telephone: string;
  address: string;
  ward_code: number;
  district_code: number;
  note_ship: string;
  note_restaurant: string;
}

export interface UpdateOldCustomer {
  name: string;
  //telephone: string;
  address: string;
  note_ship: string;
  note_restaurant: string;
  //created_at: Date;
  //modified_at: Date;
  district_code: number | undefined;
  ward_code: number | undefined;
}
