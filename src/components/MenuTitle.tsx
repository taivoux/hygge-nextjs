import React from 'react'
import { DateOnMenu } from '@/interface/types'

interface MenuTitleProps {
    weekdays: DateOnMenu[] | null,
    isLoading: boolean
}
const MenuTitle = ( {weekdays, isLoading} : MenuTitleProps) => {

    if (isLoading) {
        return <h2>Đang tải thực đơn...</h2>; // Loading state
    }

    return (
        <>
            {weekdays && weekdays.length > 0 ? (
                <h2>
                    Thực đơn từ ngày {weekdays[0]?.titleNumber} - {weekdays[4]?.titleNumber}
                </h2>
            ) : (
                <h2>Thực đơn</h2>
            )}
        </>
    );
}

export default MenuTitle