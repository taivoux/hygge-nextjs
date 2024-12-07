import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface CustomerOldProps {
    updateCustomer: (newValue: number) => void;
}

const CustomerOld: React.FC<CustomerOldProps> = ({ updateCustomer }) => {
    return (
        <Box sx={{ p: 2 }}>
            <p>Thông tin khách hàng đã lưu</p>
            <TextField
                fullWidth
                label="Số điện thoại"
                variant="outlined"
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => updateCustomer(2)} // Example action
            >
                Tìm kiếm
            </Button>
        </Box>
    );
};

export default CustomerOld;
