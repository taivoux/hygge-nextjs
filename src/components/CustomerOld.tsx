import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { useAppState } from './customer/variables';
import { useCustomerHandlers } from "./customer/useCustomerHandlers";
import FormComponent from "./customer/formCustomer";
import { useToast } from "@/hooks/use-toast";

interface CustomerOldProps {
    updateCustomer: (newValue: number) => void; // Define the prop for updating customer
}

type FormData = {
    // name: string
    telephone: string
}
const CustomerOld: React.FC<CustomerOldProps> = ({ updateCustomer }) => {
    const { toast } = useToast();
    const [linkToEdit, setlinkToEdit] = useState(false);
    const {
        formData,
        setFormData,
        errors,
        isSubmitting,
        submitted,
        isEditable,
        setErrors,
        setIsSubmitting,
        setSubmitted,
        setCreatedName,
        setIsEditable,
        setIsNonEditable,
    } = useAppState();

    const {
        // handleNewCustomer,
        handleEditable,
        handleUpdate,
        handleChange,
    } = useCustomerHandlers();


    // const handleButtonClick = () => {
    //     handleNewCustomer(
    //       formData,
    //       setErrors,
    //       setIsSubmitting,
    //       setSubmitted,
    //       setIsEditable,
    //       setIsNonEditable
    //     );
    //   };

      const handleNewCustomer = async () => {
        const newErrors: Record<string, boolean> = {};
        let isValid = true;

        // Object.entries(formData).forEach(([key, value]) => {
        //     if (key !== "note_ship" && key !== "note_restaurant" && value.trim() === "") {
        //         isValid = false;
        //         newErrors[key] = true;
        //     }
        // });

        // Telephone validation: check if it's numeric
        if (!/^\d+$/.test(formData.telephone)) {
            isValid = false;
            newErrors.telephone = true;
        }

        if (!isValid) {
            setErrors(newErrors);
            toast({
                title: "Error",
                description: "Please fill out all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        try {
            
            // Simulate API call
            const response = await fetch("http://localhost:3000/api/customerOld", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                mode: 'cors',
            });

            const dataRes = await response.json();
            
            console.log(dataRes.data.name)
            if (response.ok) {
                toast({
                  title: "Success",
                  description: "Tài khoản đã được tạo",
                });
          
                // Save name before resetting form
                setCreatedName(dataRes.data.name);

                // Reset the form
                // setFormData({
                //   telephone: "",
                // });

                // Show welcome message and hide form
                setSubmitted(true);

            } else if (response.status === 409) {
                // Handle telephone conflict
                const errorData = await response.json();
                toast({
                  title: "Error",
                  description: errorData.message,
                  variant: "destructive",
                });
            } else {
                // Handle other errors
                const errorData = await response.json();
                toast({
                  title: "Error",
                  description: errorData.message || "Failed to submit the form.",
                  variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            toast({
            title: "Error",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    
    const handleLinkToEdit  = async () =>{
        setlinkToEdit(true);
    }
    return (
        <Box>
            {linkToEdit ? (
                <FormComponent />
            ) : (
                <Box sx={{ p: 2 }} display="flex" flexDirection="column" gap={3} >
            
                    <Box>
                        {submitted ? (
                            <Box textAlign="center">
                                <Typography variant="h4" gutterBottom>
                                    Chào mừng {/*createdName*/} đã trở lại shop mình! 
                                </Typography>
                                <Typography variant="body1">
                                    Tài khoản của bạn đã được xác nhận
                                </Typography>
                                <Box sx={{pt: 3}}>
                                    <Button
                                        variant="contained"
                                        onClick={handleLinkToEdit}
                                    >
                                    {isSubmitting ? "Đang xử lý..." : "Chỉnh sửa thông tin"}
                                    </Button>
                                </Box>     
                            </Box>
                        ) : (
                            <Box sx={{ p: 2 }}>
                                <p>Thông tin khách hàng đã lưu</p>
                                <TextField
                                    fullWidth
                                    label="Số điện thoại"
                                    variant="outlined"
                                    margin="normal"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange(setFormData)}
                                    required
                                    error={!!errors.telephone}
                                    helperText={errors.telephone ? "Vui lòng nhập đúng định dạng số điện thoại (vd: 0123456789)" : ""}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleNewCustomer}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Đang xử lý..." : "Tìm kiếm"}
                                </Button>
                            </Box>
                        )}
                    
                    </Box>
                </Box> 
            )}
        </Box>
          
    );
    // const [formData, setFormData] = useState<FormData>({
    //     telephone: "",
    // });
    // const [errors, setErrors] = useState<Record<string, boolean>>({});
    
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [submitted, setSubmitted] = useState(false);
    // const [createdName, setCreatedName] = useState<string | null>(null);

    // const [isEditable, setIsEditable] = useState(false);

    // const { toast } = useToast();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     // Allow only digits for the telephone field
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }))
    // };

    

    // const handleEditable = async () => {
    //     // Enable the text field after submission
    //     setIsEditable(true);
    // }
    // return (
    //     <Box sx={{ p: 5 }}>
    //     {submitted ? (
    //         <Box textAlign="center">
    //             <Typography variant="h4" gutterBottom>
    //                 Chào mừng {createdName} đã trở lại shop mình!
    //             </Typography>
    //             <Typography variant="body1">
    //                 Tài khoản của bạn đã được xác nhận
    //             </Typography>
    //             {isEditable ? (
    //                 <Box></Box>
    //             ) : (
    //                 <Box sx={{pt: 3}}>
    //                 <Button
    //                     variant="contained"
    //                     onClick={handleEditable}
    //                 // disabled={isSubmitting}
    //                 >
    //                 {isSubmitting ? "Đang xử lý..." : "Chỉnh sửa thông tin"}
    //                 </Button>
    //                 </Box>
    //             )}
                
                
    //         </Box>
    //     ) : (
    //         <Box sx={{ p: 2 }}>
    //             <p>Thông tin khách hàng đã lưu</p>
    //             <TextField
    //                 fullWidth
    //                 label="Số điện thoại"
    //                 variant="outlined"
    //                 margin="normal"
    //                 name="telephone"
    //                 value={formData.telephone}
    //                 onChange={handleChange}
    //                 required
    //                 error={!!errors.telephone}
    //                 helperText={errors.telephone ? "Vui lòng nhập đúng định dạng số điện thoại (vd: 0123456789)" : ""}
    //             />
    //             <Button
    //                 variant="contained"
    //                 onClick={handleNewCustomer}
    //             disabled={isSubmitting}
    //         >
    //             {isSubmitting ? "Đang xử lý..." : "Tìm kiếm"}
    //             </Button>
    //         </Box>
    //     )}
    //     </Box>
        
    // );
};

export default CustomerOld;
