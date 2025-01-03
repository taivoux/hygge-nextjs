import * as React from "react";
import "../../SCSS/components/ui/selectformgroup.scss";

interface MyProps {
  name: string;
  id: string;
  label: string;
  labelClass: string;
  selectClass: string;
  selectOptions: { ward_code: number } | { district_code: number }[];
  selectedValue: number | undefined;
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
            return (
              <option
                value={
                  name == "ward_code" ? item.ward_code : item.district_code
                }
                key={name == "ward_code" ? item.ward_code : item.district_code}
              >
                {name == "ward_code" ? item.ward_code : item.district_code}
              </option>
            );
          })
        ) : (
          <option value="">None--</option>
        )}
      </select>
    </>
  );
};

export default SelectFormGroup;
