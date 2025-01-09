import React from 'react';
import { Box } from '@mui/material';
import { useAppState } from './customer/variables';
import { useCustomerHandlers } from "./customer/useCustomerHandlers";
import FormComponent from "./customer/formCustomer";

interface CustomerNewProps {
    updateCustomer: (newValue: number) => void; // Define the prop for updating customer
}
const CustomerNew: React.FC<CustomerNewProps> = ({ updateCustomer })=> {  
    return (
        <Box sx={{ p: 2 }} display="flex" flexDirection="column" gap={3} >
            <FormComponent />
        </Box>   
    );
};

export default CustomerNew;
