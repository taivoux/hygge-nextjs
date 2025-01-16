import React, { useState, useRef } from "react";
import {
  getOldCustomerInfo,
  updateOldCustomerInfo,
} from "@/utils/customerUtils";
import { Box } from "@mui/material";
import FormGroup from "./ui/formgroup";
import SelectFormGroup from "./ui/selectformgroup";
import "../SCSS/components/customerold.scss";
import { OldCustomer, UpdateOldCustomer } from "@/interface/types";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClickAwayListener } from "@mui/base";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface CustomerOldProps {
  updateCustomer: (newValue: number) => void;
}

const CustomerOld: React.FC<CustomerOldProps> = ({ updateCustomer }) => {
  let [name, setName] = useState<string>("");
  let [phoneNumber, setPhoneNumber] = useState<string>("");
  let [address, setAddress] = useState<string>("");
  let [shipNote, setShipNote] = useState<string>("");
  let [restauNote, setRestauNote] = useState<string>("");
  let [wardCode, setWardCode] = useState<{ ward_code: number }[]>([]);
  let [districtCode, setDistrictCode] = useState<{ district_code: number }[]>(
    []
  );
  let [selectedWard, setSelectedWard] = useState<number>();
  let [selectedDistrict, setSelectedDistrict] = useState<number>();

  let [visible, setVisible] = useState<boolean>(false);
  let [searchInput, setSearchInput] = useState<string>("");
  let [result, setResult] = useState<OldCustomer[]>([]);
  let [selectedCus, setSelectedCus] = useState<Partial<OldCustomer>>({});
  let search = async (input: string) => {
    let data = await getOldCustomerInfo("search_name_or_phone", input);
    if (data.length > 0) {
      setVisible(true);
      setAnchorEl(inputRef.current);
    } else {
      setVisible(false);
      setSelectedCus({});
      setName("");
      setPhoneNumber("");
      setAddress("");
      setShipNote("");
      setRestauNote("");
      setWardCode([]);
      setDistrictCode([]);
    }
    setResult(data);
  };
  let setCustomerData = (item: OldCustomer): void => {
    setSelectedCus(item);
    setName(item.name);
    setPhoneNumber(item.telephone);
    setAddress(item.address);
    setShipNote(item.note_ship);
    setRestauNote(item.note_restaurant);

    //set all options of select form group
    let getWardAndDistrictCode = async () => {
      let wardCodeArr = await getOldCustomerInfo("search_ward_code", "");
      setWardCode(wardCodeArr);
      let districtCodeArr = await getOldCustomerInfo(
        "search_district_code",
        ""
      );
      setDistrictCode(districtCodeArr);
    };
    getWardAndDistrictCode();
    //  set selected ward code, district code
    setSelectedWard(item.ward_code);
    setSelectedDistrict(item.district_code);
  };
  let hanldeUpdateCusInfo = async (): Promise<void> => {
    if (!selectedCus.customer_id) {
      toast.error("🚀 Vui lòng chọn một người dùng!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      let currentCusId: number = selectedCus.customer_id;
      let updateCusData: UpdateOldCustomer = await updateOldCustomerInfo(
        currentCusId,
        {
          name,
          address,
          note_ship: shipNote,
          note_restaurant: restauNote,
        }
      );
    }
  };
  let inputRef = useRef(null);
  let [anchorEl, setAnchorEl] = useState(null);

  let handleClose = (): void => {
    setVisible(false);
  };

  let open: boolean = visible && result.length > 0;
  let id: string | undefined = open ? "search-popper" : undefined;
  return (
    <Box sx={{ p: 2 }}>
      {/* above */}
      <ToastContainer />
      <p className="font-bold mb-2">Tìm kiếm số điện thoại hoặc tên</p>
      <div className="search-group mb-5">
        <ClickAwayListener onClickAway={handleClose}>
          <div className="search-input bg-[#FDF6EE]">
            <input
              ref={inputRef}
              className="search-form-group"
              value={searchInput}
              type="text"
              id="searchPhoneNumber"
              name="searchPhoneNumber"
              placeholder="Số điện thoại hoặc tên"
              onChange={(e): void => {
                setSearchInput(e.target.value);
                search(e.target.value);
              }}
              onClick={(): void => {
                setVisible(true);
              }}
            ></input>
          </div>
        </ClickAwayListener>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <List className="search-result search-result-width">
              {result ? (
                result.map((item) => (
                  <ListItem
                    key={item.customer_id}
                    className="search-result-item"
                    onClick={() => {
                      setCustomerData(item);
                      setVisible(false);
                    }}
                  >
                    <ListItemText
                      primary={<p className="font-bold">{item.name}</p>}
                      secondary={item.telephone}
                    />
                  </ListItem>
                ))
              ) : (
                <></>
              )}
            </List>
          </Paper>
        </Popper>
      </div>
      {/* below */}
      <div className="bg-white p-[24px] rounded-[8px] old-cus-form-border">
        <div className="mb-4">
          <FormGroup
            label="Họ và tên"
            labelClass="label-form-group"
            inputClass="input-form-group-large phone-readonly"
            setReadOnly={true}
            value={name}
            onChange={(e): void => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-4">
          <div className="phone-address-select-group mr-3">
            <FormGroup
              label="Số điện thoại"
              labelClass="label-form-group"
              inputClass="input-form-group-large space-between space-bottom phone-readonly"
              setReadOnly={true}
              value={phoneNumber}
              onChange={(e): void => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="phone-address-select-group">
            <FormGroup
              label="Địa chỉ giao hàng"
              labelClass="label-form-group"
              inputClass="input-form-group-large"
              setReadOnly={false}
              value={address}
              onChange={(e): void => {
                setAddress(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group mb-4">
          <div className="phone-address-select-group mr-3 space-bottom">
            <SelectFormGroup
              id="ward_code"
              name="ward_code"
              label="Phường"
              labelClass="select-label-form-group"
              selectClass="select-form-group-large"
              selectOptions={wardCode}
              selectedValue={selectedWard}
              onChange={(e): void => {
                setSelectedWard(e.target.value);
              }}
            />
          </div>
          <div className="phone-address-select-group">
            <SelectFormGroup
              id="district_code"
              name="district_code"
              label="Quận"
              labelClass="select-label-form-group"
              selectClass="select-form-group-large"
              selectOptions={districtCode}
              selectedValue={selectedDistrict}
              onChange={(e): void => {
                setSelectedDistrict(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <FormGroup
            label="Lưu ý cho shipper"
            labelClass="label-form-group"
            inputClass="input-form-group-large"
            setReadOnly={false}
            value={shipNote}
            onChange={(e): void => {
              setShipNote(e.target.value);
            }}
          />
        </div>
        <div>
          <FormGroup
            label="Lưu ý cho nhà hàng"
            labelClass="label-form-group"
            inputClass="input-form-group-large"
            setReadOnly={false}
            value={restauNote}
            onChange={(e): void => {
              setRestauNote(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        className="save-info-btn save-info-btn-width"
        onClick={() => hanldeUpdateCusInfo()}
      >
        Lưu thông tin
      </button>
    </Box>
  );
};

export default CustomerOld;
