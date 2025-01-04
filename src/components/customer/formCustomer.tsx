import React, { useState } from 'react';
import { Box, TextField, Button, Typography, FormControl, Select, FormHelperText, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material';
import { AppStateProvider, useAppState } from './variables';
import { useCustomerHandlers } from "./useCustomerHandlers";
// import { StatusProps } from "./variables";


const districtsAndWards: Record<string, string[]> = {
    "Quận 1": ["Phường Tân Định", "Phường Đa Kao", "Phường Bến Nghé", "Phường Bến Thành", "Phường Nguyễn Thái Bình", "Phường Phạm Ngũ Lão", "Phường Cầu Ông Lãnh", "Phường Cô Giang", "Phường Nguyễn Cư Trinh", "Phường Cầu Kho"],
    "Quận 12": ["Phường Thạnh Xuân", "Phường Thạnh Lộc", "Phường Hiệp Thành", "Phường Thới An", "Phường Tân Chánh Hiệp", "Phường An Phú Đông", "Phường Tân Thới Hiệp", "Phường Trung Mỹ Tây", "Phường Tân Hưng Thuận", "Phường Đông Hưng Thuận", "Phường Tân Thới Nhất"],
    "Quận Thủ Đức": ["Phường Linh Xuân", "Phường Bình Chiểu", "Phường Linh Trung", "Phường Tam Bình", "Phường Tam Phú", "Phường Hiệp Bình Phước", "Phường Hiệp Bình Chánh", "Phường Linh Chiểu", "Phường Linh Tây", "Phường Linh Đông", "Phường Bình Thọ", "Phường Trường Thọ"],
    "Quận 9": ["Phường Long Bình", "Phường Long Thạnh Mỹ", "Phường Tân Phú", "Phường Hiệp Phú", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Phước Long B", "Phường Phước Long A", "Phường Trường Thạnh", "Phường Long Phước", "Phường Long Trường", "Phường Phước Bình", "Phường Phú Hữu"],
    "Quận Gò Vấp": ["Phường 15", "Phường 13", "Phường 17", "Phường 06", "Phường 16", "Phường 12", "Phường 14", "Phường 10", "Phường 05", "Phường 07", "Phường 04", "Phường 01", "Phường 09", "Phường 08", "Phường 11", "Phường 03"],
    "Quận Bình Thạnh": ["Phường 13", "Phường 11", "Phường 27", "Phường 26", "Phường 12", "Phường 25", "Phường 05", "Phường 07", "Phường 24", "Phường 06", "Phường 14", "Phường 15", "Phường 02", "Phường 01", "Phường 03", "Phường 17", "Phường 21", "Phường 22", "Phường 19", "Phường 28"],
    "Quận Tân Bình": ["Phường 02", "Phường 04", "Phường 12", "Phường 13", "Phường 01", "Phường 03", "Phường 11", "Phường 07", "Phường 05", "Phường 10", "Phường 06", "Phường 08", "Phường 09", "Phường 14", "Phường 15"],
    "Quận Tân Phú": ["Phường Tân Sơn Nhì", "Phường Tây Thạnh", "Phường Sơn Kỳ", "Phường Tân Qúy", "Phường Tân Thành", "Phường Phú Thọ Hoà", "Phường Phú Thạnh", "Phường Phú Trung", "Phường Hoà Thạnh", "Phường Hiệp Tân", "Phường Tân Thới Hoà"],
    "Quận Phú Nhuận": ["Phường 04", "Phường 05", "Phường 09", "Phường 07", "Phường 03", "Phường 01", "Phường 02", "Phường 08", "Phường 15", "Phường 10", "Phường 11", "Phường 17", "Phường 14", "Phường 12", "Phường 13"],
};

const FormComponent: React.FC = () => {
    const {
        formData,
        setFormData,
        errors,
        setErrors,
        setIsSubmitting,
        setSubmitted,
        setIsEditable,
        setIsNonEditable,
        isEditable,
        isNonEditable,
        submitted,
        isSubmitting,
    } = useAppState();

    const {
        handleNewCustomer,
        handleChange,
        handleDistrictChange,
        handleWardChange,
        handleEditable,
        handleUpdate,
    } = useCustomerHandlers();

    const handleButtonClick = () => {
        handleNewCustomer(
          formData,
          setErrors,
          setIsSubmitting,
          setSubmitted,
          setIsEditable,
          setIsNonEditable
        );
      };

    // console.log(errors.name, "ádá")
    return (
        <Box>
            <Box>
                <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                Họ và tên
                </Typography>
                <TextField
                    fullWidth
                    label="Họ và tên"
                    variant={isNonEditable ? "filled" : "outlined"}
                    margin="normal"
                    name="name"
                    value={formData.name}
                    onChange={handleChange(setFormData)}
                    required
                    error={!!errors.name}
                    helperText={errors.name && "This field is required."}   
                    disabled={isNonEditable}
                />
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                {/* Left Column */}
                <Box flex={1}>
                    <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                    Số điện thoại
                    </Typography>
                    <TextField
                        fullWidth
                        label="Số điện thoại"
                        variant={isNonEditable ? "filled" : "outlined"}
                        margin="normal"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange(setFormData)}
                        required
                        error={!!errors.telephone}
                        helperText={errors.telephone ? "Vui lòng nhập đúng định dạng số điện thoại (bắt đầu bằng 0 hoặc +84)." : ""}
                        disabled={isNonEditable}
                    />
                </Box>

                {/* Right Column */}
                <Box flex={1}>
                    <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                    Địa chỉ giao hàng
                    </Typography>
                    <TextField
                        fullWidth
                        label="Địa chỉ giao hàng"
                        variant="outlined"
                        margin="normal"
                        name="address"
                        value={formData.address}
                        onChange={handleChange(setFormData)}
                        required
                        error={!!errors.name}
                        helperText={errors.name && "This field is required."}
                        disabled={isEditable}
                    />
                </Box>
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                {/* Left Column */}
                <Box flex={1}>
                <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                    Quận
                    </Typography>
                    <FormControl fullWidth margin="normal" error={!!errors.district}>
                        <InputLabel id="district-label">Chọn Quận</InputLabel>
                        <Select
                        labelId="district-label"
                        name="district"
                        value={formData.district}
                        onChange={handleDistrictChange(setFormData)}
                        label="Select District"
                        required
                        disabled={isEditable}
                        >
                        {Object.keys(districtsAndWards).map((districtName) => (
                            <MenuItem key={districtName} value={districtName}>
                            {districtName}
                            </MenuItem>
                        ))}
                        </Select>
                        {errors.district && (
                            <FormHelperText>This field is required.</FormHelperText>
                        )}
                    </FormControl>  
                </Box>

                {/* Right Column */}
                <Box flex={1}>
                <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                    Phường
                    </Typography>
                    <FormControl fullWidth margin="normal" error={!!errors.ward} disabled={!formData.district}>
                        <InputLabel id="ward-label">Chọn Phường</InputLabel>
                        <Select
                        labelId="ward-label"
                        name="ward"
                        value={formData.ward}
                        onChange={handleWardChange(setFormData)}
                        label="Select Ward"
                        required
                        disabled={isEditable}
                        >
                        {formData.district &&
                            districtsAndWards[formData.district].map((wardName) => (
                            <MenuItem key={wardName} value={wardName}>
                                {wardName}
                            </MenuItem>
                            ))}
                        </Select>
                        {errors.ward && (
                            <FormHelperText>This field is required.</FormHelperText>
                        )}
                    </FormControl>   
                </Box>
            </Box>
            <Box>
                <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                Lưu ý cho Shipper
                </Typography>
                <TextField
                    label="Lưu ý cho Shipper"
                    multiline
                    rows={4}  // Sets the height of the textarea
                    variant="outlined"
                    name="note_ship"
                    fullWidth
                    value={formData.note_ship}
                    onChange={handleChange(setFormData)}
                    disabled={isEditable}
                />
            </Box>
            <Box>
                <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                Lưu ý cho nhà hàng
                </Typography>
                <TextField
                    label="Lưu ý cho nhà hàng"
                    multiline
                    rows={4}  // Sets the height of the textarea
                    variant="outlined"
                    name="note_restaurant"
                    fullWidth
                    value={formData.note_restaurant}
                    onChange={handleChange(setFormData)}
                    disabled={isEditable}
                />
            </Box>
            <Box sx={{ pt: 2 }}>
                {submitted ? (
                    <Box display="flex" flexDirection="row" gap={2}>
                        {isEditable ? (
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditable}
                            >
                                {isSubmitting ? "Đang xử lý..." : "Chỉnh sửa"}
                            </Button>
                        ) : (
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpdate}
                            >
                                {isSubmitting ? "Đang xử lý..." : "Cập nhật"}
                            </Button>
                        )}

                    </Box>
                ) : (<Box>
                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={() => updateCustomer(1)} // Example action
                        onClick={handleButtonClick}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Đang xử lý..." : "Xác nhận"}

                    </Button>
                </Box>)}
            
            </Box>
        </Box>
        
    )
};

export default FormComponent;