import { getPackedFood } from "@/utils/productUtils";
import { useState, useEffect } from "react";

console.log("call api packed food");
console.log(await getPackedFood());

const PackedFood = () => {
  /*
  const packedFoodItemsArr = [
    {
      id: 1,
      name: "Bua An Balance",
      ingredients: "Thành phần: Ghi chú thành phần món ăn",
      price: 68000,
      quantity: 0,
    },
    {
      id: 2,
      name: "Bữa ăn Fat Loss",
      ingredients: "Thành phần: Ghi chú thành phần món ăn",
      price: 68000,
      quantity: 0,
    },
    {
      id: 3,
      name: "Chả ức gà nguyên vị",
      ingredients: "Thành phần: Ghi chú thành phần món ăn",
      price: 100000,
      quantity: 0,
    },
    {
      id: 4,
      name: "Chả ức gà nấm",
      ingredients: "Thành phần: Ghi chú thành phần món ăn",
      price: 12000,
      quantity: 0,
    },
    {
      id: 5,
      name: "Chả ức gà rau củ",
      ingredients: "Thành phần: Ghi chú thành phần món ăn",
      price: 150000,
      quantity: 0,
    },
  ];
  */

  const [packedFoods, setPackedFoods] = useState([]);
  useEffect(() => {
    const fetchPackedFood = async () => {
      try {
        const dataResult = await getPackedFood();
        setPackedFoods(dataResult);
      } catch (erro) {
        console.error("Failed to fetch packed food from products:", erro);
        throw new Error(
          "Unable to fetch products at this time. Please try again later."
        );
      }
    };

    fetchPackedFood();
  }, []);
  const decreaseQuatity = (product_id: number) => {
    setPackedFoods((pre) => {
      // in case current packed quantity equals 0, do nothing
      let currentPacked = pre.filter((item) => {
        return item.product_id == product_id;
      });
      if (currentPacked[0].quantity == 0) {
        return pre;
      } else {
        // update quantity
        let newPackedArr = pre.map((item) =>
          item.product_id == product_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return newPackedArr;
      }
    });
  };
  const increaseQuatity = (product_id: number) => {
    setPackedFoods((pre) =>
      pre.map((item) =>
        item.product_id == product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  return (
    <div className="bg-[#FDF6EE] p-[24px]">
      <h2>Packed-food</h2>
      <p className="pt-1 pb-4">[Mô tả nếu có]</p>
      <div className="grid grid-cols-3 auto-cols-auto gap-x-4">
        {packedFoods.map((packedFoodItem) => (
          <div
            className="w-auto mb-6 rounded-[8px] bg-[#fff]"
            key={packedFoodItem.product_id}
          >
            <div className="flex items-center ml-4 mt-4">
              <button
                className="px-4 py-1 border rounded-md"
                onClick={() => decreaseQuatity(packedFoodItem.product_id)}
              >
                -
              </button>
              <span className="px-6 mx-2 py-1 border rounded-md">
                {packedFoodItem.quantity}
              </span>
              <button
                className="px-4 py-1 border rounded-md"
                onClick={() => increaseQuatity(packedFoodItem.product_id)}
              >
                +
              </button>
            </div>
            <h3 className="mt-3 ml-4 font-semibold mb-1">
              {packedFoodItem.name}
            </h3>
            <p className="ml-4 text-sm text-gray-500">Thành phần</p>
            <p className="ml-4 pb-3 text-green-600 font-bold mt-2">
              VND {packedFoodItem.unit_price}
            </p>
            <img
              className="ml-4 w-11/12 h-56 pb-3"
              src="https://phunuvietnam.mediacdn.vn/179072216278405120/2022/9/28/dau-nanh-nhat-edamame-la-gi-nhung-loi-ich-suc-khoe-cua-dau-nanh-nhat-edamame-202012021511528602-16642593149221595968842-1664379512856-1664379513389420915140.jpg"
              alt="packed-food-images"
            />
          </div>
        ))}
      </div>
      <button className="w-full text-center font-bold text-sm py-2 border rounded-md bg-[#fff]">
        + Hiển thị thêm
      </button>
    </div>
  );
};

export default PackedFood;
