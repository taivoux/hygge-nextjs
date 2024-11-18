import React, { useState } from "react";
import { Button } from "@/components/ui/button"


// interface BtnMenuProps {
//     name: string;
// }
  

const BtnQuantity = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 1;
    } else {
      count = 0;
    }
    setCount(count);
  }
  return (
    <div className="flex gap-2">
        <Button variant="outline" className="h-[48px] text-2xl px-[24px] py-[12px] border-[#D9D9D9]" onClick={decrementCount} >-</Button>
        <div className="px-[24px] py-[12px] outline rounded-lg border-[#dddada]">{count}</div>
        <Button variant="outline" className="h-[48px] text-2xl px-[24px] py-[12px] border-[#D9D9D9]" onClick={incrementCount}>+</Button>
    </div>
  )
}

export default BtnQuantity