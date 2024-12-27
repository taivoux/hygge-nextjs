import { SelectChangeEvent } from "@mui/material"; // Adjust this import based on your library
import { useToast } from "@/hooks/use-toast"; // Replace with your toast library
import { useAppState } from './variables';

export const useCustomerHandlers = () => {
    const {
        formData,
        setIsSubmitting,
        setSubmitted,
        setCreatedName,
        setIsEditable,
    } = useAppState();

    const { toast } = useToast();
        
    const handleChange = (
        setFormData: React.Dispatch<React.SetStateAction<any>>
      ) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "telephone") {
          const numericValue = value.replace(/[^0-9+]/g, "");
          setFormData((prev: any) => ({
            ...prev,
            [name]: numericValue,
          }));
        } else {
          setFormData((prev: any) => ({
            ...prev,
            [name]: value,
          }));
        }
      };
    const handleDistrictChange = (
        setFormData: React.Dispatch<React.SetStateAction<any>>
      ) => (event: SelectChangeEvent<string>) => {
        const selectedDistrict = event.target.value;
        setFormData((prev: any) => ({
          ...prev,
          district: selectedDistrict,
          ward: "",
        }));
      };
      
    const handleWardChange = (
        setFormData: React.Dispatch<React.SetStateAction<any>>
      ) => (event: SelectChangeEvent<string>) => {
        const selectedWard = event.target.value;
        setFormData((prev: any) => ({
          ...prev,
          ward: selectedWard,
        }));
      };

    // const handleNewCustomer = async () => {
    //     const newErrors: Record<string, boolean> = {};
    //     let isValid = true;

    //     Object.entries(formData).forEach(([key, value]) => {
    //         if (key !== "note_ship" && key !== "note_restaurant" && value.trim() === "") {
    //             isValid = false;
    //             newErrors[key] = true;
    //         }
    //     });

    //     if (!/^(\+84|0)([35789]\d{8}|[24]\d{7})$/.test(formData.telephone)) {
    //         isValid = false;
    //         newErrors.telephone = true;
    //     }

    //     if (!isValid) {
    //         setErrors(newErrors);
    //         toast({
    //             title: "Error",
    //             description: "Please fill out all required fields.",
    //             variant: "destructive",
    //         });
    //         return;
    //     }

    //     setIsSubmitting(true);
    //     try {
    //         const response = await fetch("http://localhost:3000/api/customerNew", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             toast({ title: "Success", description: "Account created successfully" });
    //             setCreatedName(formData.name);
    //             setSubmitted(true);
    //             setIsEditable(true);
    //             setIsNonEditable(true);
    //         } else {
    //             const errorData = await response.json();
    //             toast({ title: "Error", description: errorData.message, variant: "destructive" });
    //         }
    //     } catch (error) {
    //         console.error("Unexpected error:", error);
    //         toast({ title: "Error", description: "An unexpected error occurred. Please try again.", variant: "destructive" });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
    const handleNewCustomer = async (
        formData: Record<string, any>,
        setErrors: (value: Record<string, boolean>) => void,
        setIsSubmitting: (value: boolean) => void,
        // setCreatedName: React.Dispatch<React.SetStateAction<string>>,
        setSubmitted: (value: boolean) => void,
        setIsEditable: (value: boolean) => void,
        setIsNonEditable: (value: boolean) => void
      ) => {
        const newErrors: Record<string, boolean> = {};
        let isValid = true;
      
        Object.entries(formData).forEach(([key, value]) => {
          if (key !== "note_ship" && key !== "note_restaurant" && value.trim() === "") {
            isValid = false;
            newErrors[key] = true;
          }
        });
        
        console.log(!/^(\+84|0)([35789]\d{8}|[24]\d{7})$/.test(formData.telephone))
        if (!/^(\+84|0)([35789]\d{8}|[24]\d{7})$/.test(formData.telephone)) {
          isValid = false;
          newErrors.telephone = true;
        }
      
        console.log(!isValid)
        if (!isValid) {
          setErrors(newErrors);
          toast({
            title: "Error",
            description: "Vui lòng nhập đầy đủ thông tin.",
            variant: "destructive",
          });
          return;
        }
      
        setIsSubmitting(true);
        try {
          const response = await fetch("http://localhost:3000/api/customerNew", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            toast({ title: "Success", description: "Tạo tài khoản thành công" });
            setCreatedName(formData.name);
            setSubmitted(true);
            setIsEditable(true);
            setIsNonEditable(true);
          } else {
            const errorData = await response.json();
            toast({ title: "Error", description: errorData.message, variant: "destructive" });
          }
        } catch (error) {
          console.error("Unexpected error:", error);
          toast({ title: "Error", description: "An unexpected error occurred. Please try again.", variant: "destructive" });
        } finally {
          setIsSubmitting(false);
        }
    };
      
    const handleEditable = () => setIsEditable(false);

    const handleUpdate = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/customerUpdate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({ title: "Success", description: "Thông tin của bạn đã được cập nhật" });
                setSubmitted(true);
                setIsEditable(true);
            } else {
                const errorData = await response.json();
                toast({ title: "Error", description: errorData.message, variant: "destructive" });
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            toast({ title: "Error", description: "An unexpected error occurred. Please try again.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleChange,
        handleDistrictChange,
        handleWardChange,
        handleNewCustomer,
        handleEditable,
        handleUpdate,
    };
};
