'use client';

import { useState } from 'react';
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CustomerFormProps {
    onRegister: (customerId: number) => void;
}

const CustomerForm = ({ onRegister }: CustomerFormProps) => {
    const [name, setName] = useState('');

    const handleRegister = () => {
        // Simulate customer registration and getting a new customer_id
        const newCustomerId = 1;
        onRegister(newCustomerId); // Pass the new ID back to the parent
    };
    return (
        <div className='main-container mt-10 flex w-[1200px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[24px] items-start flex-nowrap bg-[#fdf6ee] rounded-[12px] relative mx-auto my-0'>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter name" 
            />
            <button onClick={handleRegister}>Register</button>
            <div className='flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative'>
                <span className="h-[36px] grow shrink-0 basis-auto font-['Manrope'] text-[24px] font-bold leading-[36px] text-[#333333] relative text-left whitespace-nowrap z-[2]">
                    Bạn đã từng đặt hàng tại Hygge?
                </span>
            </div>

            {/* <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Users">
                        <button className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[4] pointer'>
                            <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#1e1e1e] relative text-left whitespace-nowrap z-[5]">
                                Khách cũ
                            </span>

                        </button>
                    </TabsTrigger>
                    <TabsTrigger value="NewUser"><button className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#f2f7f3] rounded-[8px] border-solid border border-[#00883a] relative overflow-hidden z-[7] pointer'>
                        <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#009e44] relative text-left whitespace-nowrap z-[8]">
                            Khách mới
                        </span>
                        <span className="h-[28px] shrink-0 basis-auto font-['Manrope'] text-[18px] font-bold leading-[28px] text-[#009e44] relative text-left whitespace-nowrap z-[9]">
                            ☘️
                        </span>
                    </button></TabsTrigger>
                </TabsList>
                <TabsContent value="Users">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="NewUser">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs> */}
            <div className='flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]'>
                <button className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[4] pointer'>
                    <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#1e1e1e] relative text-left whitespace-nowrap z-[5]">
                        Khách cũ
                    </span>

                </button>
                <button className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#f2f7f3] rounded-[8px] border-solid border border-[#00883a] relative overflow-hidden z-[7] pointer'>
                    <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#009e44] relative text-left whitespace-nowrap z-[8]">
                        Khách mới
                    </span>
                    <span className="h-[28px] shrink-0 basis-auto font-['Manrope'] text-[18px] font-bold leading-[28px] text-[#009e44] relative text-left whitespace-nowrap z-[9]">
                        ☘️
                    </span>
                </button>
            </div>

            <div className='flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative z-[11]'>
                <div className='flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[12]'>

                    <div className="space-y-1">
                        <Label htmlFor="name" className='text-[16px] font-bold'>Họ và tên</Label>
                        <Input id="name" placeholder="Họ và tên" className='w-[1104px] h-[48px]' />
                    </div>
                    <div className='flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[18]'>
                        <div className="space-y-1">
                            <Label htmlFor="number" className='text-[16px] font-bold'>Số điện thoại</Label>
                            <Input id="number" placeholder="Số điện thoại" className='w-[544px] h-[48px]' type='phone' />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="number" className='text-[16px] font-bold'>Địa chỉ giao hàng</Label>
                            <Input id="number" placeholder="Địa chỉ giao hàng" className='w-[544px] h-[48px]' />
                        </div>

                    </div>
                    <div className='flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[29]'>
                        <div className="space-y-1">
                            <Label htmlFor="" className='text-[16px] font-bold'>Quận</Label>
                            <Select >
                                <SelectTrigger className="w-[544px] h-[48px]">
                                    <SelectValue placeholder="Chọn Quận" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Quận</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select></div>
                        <div className='flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-30'>
                            <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#333333] relative text-left whitespace-nowrap z-[31]">
                                Phường
                            </span>
                            <div className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[32]'>
                                <span className="h-[24px] grow shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[33]">
                                    Phường
                                </span>
                                <div className='flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative z-[34]'>
                                    <span className="flex w-[16px] h-[16px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[16px] font-normal leading-[16px] text-[#000] relative text-center whitespace-nowrap z-[35]">
                                        angle-down
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[36]'>
                            <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#333333] relative text-left whitespace-nowrap z-[37]">
                                Quận
                            </span>
                            <div className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[38]'>
                                <span className="h-[24px] grow shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[39]">
                                    Quận
                                </span>
                                <div className='flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative z-40'>
                                    <span className="flex w-[16px] h-[16px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[16px] font-normal leading-[16px] text-[#000] relative text-center whitespace-nowrap z-[41]">
                                        angle-down
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[120px] flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[42]'>
                        <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#333333] relative text-left whitespace-nowrap z-[43]">
                            Lưu ý cho Shipper
                        </span>
                        <div className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[44]'>
                            <input className='w-[1104px] h-[92px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[46]' />
                            <span className="h-[24px] grow shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[45]">
                                Lưu ý cho Shipper
                            </span>
                        </div>
                    </div>
                    <div className='flex items-start self-stretch shrink-0 flex-nowrap bg-[#f3f9fe] rounded-[8px] border-solid border border-[#d8e6fe] relative overflow-hidden z-[47]'>
                        <div className='flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative overflow-hidden z-[48]'>
                            <div className='flex w-[25px] h-[25px] justify-center items-center shrink-0 flex-nowrap relative z-[49]'>
                                <span className="flex w-[20px] h-[21px] justify-center items-center shrink-0 basis-auto font-['Font_Awesome_6_Pro'] text-[20px] font-black leading-[21px] text-[#0176d3] relative text-center whitespace-nowrap z-50">
                                    {/* info-circle */}
                                </span>
                            </div>
                            <div className='flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[51]'>
                                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#2d313d] relative text-left whitespace-nowrap z-[52]">
                                    Giờ giao hàng cố định từ 10:00 đến 12:00 hằng ngày
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[120px] flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[53]'>
                        <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#333333] relative text-left whitespace-nowrap z-[54]">
                            Lưu ý cho Nhà Hàng
                        </span>
                        <div className='flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d9d9d9] relative overflow-hidden z-[55]'>
                            <input className='w-[1104px] h-[92px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[57]' />
                            <span className="h-[24px] grow shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[56]">
                                Lưu ý cho nhà hàng
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='flex w-[152px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#009e44] rounded-[8px] border-none relative overflow-hidden z-[58] pointer'>
                <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[59]">
                    Lưu thông tin
                </span>
            </button>
        </div>
    )
}

export default CustomerForm