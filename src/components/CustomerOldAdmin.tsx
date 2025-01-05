import React from "react";
import {
  getOldCustomerInfo,
  updateOldCustomerInfo,
} from "@/utils/customerUtils";
import { Box } from "@mui/material";
import { useState } from "react";
import FormGroup from "./ui/formgroup";
import SelectFormGroup from "./ui/selectformgroup";
import "../SCSS/components/customerold.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { OldCustomer } from "@/interface/types";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CustomerOldProps {
  updateCustomer: (newValue: number) => void;
}

const CustomerOld: React.FC<CustomerOldProps> = ({ updateCustomer }) => {
  let [name, setName] = useState<string>("");
  let [phoneNumber, setPhoneNumber] = useState<string>("");
  let [address, setAddress] = useState<string>("");
  let [shipNote, setShipNote] = useState<string>("");
  let [restauNote, setRestauNote] = useState<string>("");
  let [wardCode, setWardCode] = useState<OldCustomer[]>([]);
  let [districtCode, setDistrictCode] = useState<OldCustomer[]>([]);
  let [selectedWard, setSelectedWard] = useState<string>("");
  let [selectedDistrict, setSelectedDistrict] = useState<string>("");

  let [visible, setVisible] = useState<boolean>(false);
  const clickOutSideSearchField = (): void => setVisible(false);
  let [searchInput, setSearchInput] = useState<string>("");
  let [result, setResult] = useState<OldCustomer[]>([]);
  let [selectedCus, setSelectedCus] = useState<Partial<OldCustomer>>({});
  let search = async (input: string) => {
    let data = await getOldCustomerInfo("search_name_or_phone", input);
    if (data.length > 0) {
      setVisible(true);
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
        "",
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
      let updateCusData: OldCustomer = await updateOldCustomerInfo(
        currentCusId,
        {
          name,
          address,
          note_ship: shipNote,
          note_restaurant: restauNote,
          district_code: selectedDistrict,
          ward_code: selectedWard,
        },
      );
    }
  };
  return (
    <Box sx={{ p: 2 }}>
      {/* above */}
      <ToastContainer />
      <p className="font-bold mb-2">Số điện thoại</p>
      <div className="search-group mb-5">
        <Tippy
          placement="bottom"
          visible={visible && result.length > 0}
          onClickOutside={clickOutSideSearchField}
          interactive
          render={(attrs) => (
            <ul className="search-result search-result-width" {...attrs}>
              {result.map((item) => {
                return (
                  <li
                    key={item.customer_id}
                    className="search-result-item"
                    onClick={(): void => {
                      setCustomerData(item);
                      setVisible(false);
                    }}
                  >
                    <p className="font-bold">{item.name}</p>
                    <p>{item.telephone}</p>
                  </li>
                );
              })}
            </ul>
          )}
        >
          <div className="search-input bg-[#FDF6EE] mr-5">
            <input
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
        </Tippy>

        <button
          className="check-info-btn bg-gray-400 text-black font-bold rounded-[8px] px-2"
          onClick={(): Promise<void> => search(searchInput)}
        >
          <span className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          Kiểm tra thông tin
        </button>
      </div>
      {/* below */}
      <div className="bg-white p-[24px] rounded-[8px] old-cus-form-border">
        <div className="mb-4">
          <FormGroup
            label="Họ và tên"
            labelClass="label-form-group"
            inputClass="input-form-group-large"
            setReadOnly={false}
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
