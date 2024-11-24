import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

interface MenuOptionsProps {
    updateExtra: (newValue: boolean) => void;
    hasExtra: boolean; // Receive the current value of has_extra
  }

  const MenuOptions = ({ updateExtra, hasExtra  }: MenuOptionsProps) => {
    const handleCheckedChange = (checked: boolean | "indeterminate") => {
        // Normalize the value to a boolean
        updateExtra(checked === true);
    };
    return (
        <>
        <div className='flex p-[16px] flex-col gap-[16px] w-full bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9]'>
            <div className="flex gap-1.5 items-center ">
                <Checkbox
                    id="terms1"
                    checked={hasExtra}
                    onCheckedChange={handleCheckedChange}
                />
                <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                Thêm Bữa Phụ
                </label>
                <p className="text-sm text-muted-foreground">
                (Bữa phụ sẽ bao gồm sữa hạt 🥛 hoặc nước ép 🍹 được thay đổi theo ngày)
                </p>
            </div>
            <div className="flex gap-1.5 items-center">
                <Checkbox
                    id="terms1"
                    checked={false}
                    // onCheckedChange={field.onChange}
                />
                <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                Đặt theo Gói Tháng 
                </label>
                <p className="text-sm text-muted-foreground">
                (20 bữa - Tiết kiệm 10%)
                </p>
            </div>
        </div>
        </>
    )
}

export default MenuOptions