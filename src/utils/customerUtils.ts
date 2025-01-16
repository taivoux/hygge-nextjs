import { OldCustomer, UpdateOldCustomer } from "@/interface/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Fetches the product data from the API.
 * @returns A promise resolving to an array of Product objects.
 */

export async function getOldCustomerInfo(
  queryType: string,
  value: string
): Promise<OldCustomer[]> {
  if (queryType == "search_name_or_phone" && !value) {
    return [];
  }
  const apiUrl =
    "http://localhost:3000/api/customer?type=" +
    queryType +
    "&value=" +
    encodeURIComponent(value);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Error fetching customer info: ${response.status} ${response.statusText}`
      );
    }

    const data: OldCustomer[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch customer info:", error);
    throw new Error(
      "Unable to fetch customer info at this time. Please try again later."
    );
  }
}

// update customer info
export async function updateOldCustomerInfo(
  currentCusId: number,
  cusInfoObj: UpdateOldCustomer
): Promise<UpdateOldCustomer> {
  const apiUrl = "http://localhost:3000/api/customer/" + currentCusId;

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cusInfoObj.name,
        address: cusInfoObj.address,
        note_ship: cusInfoObj.note_ship,
        note_restaurant: cusInfoObj.note_restaurant,
      }),
    });

    if (response.ok) {
      toast.success("🚀 Cập nhật thông tin người dùng thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(
        "🚀 Cập nhật thông tin người dùng không thành công, có lỗi đã xảy ra!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }

    const data: OldCustomer = await response.json();
    return data;
  } catch (error) {
    toast.error(
      "🚀 Cập nhật thông tin người dùng không thành công, có lỗi đã xảy ra!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
    console.error("Failed to update customer info:", error);
    throw new Error(
      "Unable to update customer info at this time. Please try again later."
    );
  }
}
