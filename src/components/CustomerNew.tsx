import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface CustomerNewProps {
    updateCustomer: (newValue: number) => void;
}

const CustomerNew: React.FC<CustomerNewProps> = ({ updateCustomer }) => {
    return (
        <Box sx={{ p: 2 }}>
            <TextField
                fullWidth
                label="Tên của bạn"
                variant="outlined"
                margin="normal"
            />
            <TextField
                fullWidth
                label="Số điện thoại"
                variant="outlined"
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => updateCustomer(1)} // Example action
            >
                Xác nhận
            </Button>
        </Box>
    );
};

export default CustomerNew;
