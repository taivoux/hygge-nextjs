import * as React from "react";
import "../../SCSS/components/ui/selectformgroup.scss";

interface MyProps {
  name: string;
  id: string;
  label: string;
  labelClass: string;
  selectClass: string;
  selectOptions: { ward_code: string; district_code: string }[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

const SelectFormGroup: React.FC<MyProps> = ({
  name,
  id,
  label,
  labelClass,
  selectClass,
  selectOptions,
  selectedValue,
  onChange,
}) => {
  return (
    <>
      <label className={labelClass}>{label}</label>
      <select
        name={name}
        id={id}
        className={selectClass}
        value={selectedValue}
        onChange={onChange}
      >
        {selectOptions.length > 0 ? (
          selectOptions.map((item) => {
            const value =
              name == "ward_code" ? item.ward_code : item.district_code;
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })
        ) : (
          <option value={0}>None--</option>
        )}
      </select>
    </>
  );
};

export default SelectFormGroup;
