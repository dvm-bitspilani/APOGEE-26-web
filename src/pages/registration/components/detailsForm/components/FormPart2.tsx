import styles from "../DetailsForm.module.scss";
import Select, { type StylesConfig } from "react-select";
import { useEffect, useState } from "react";

interface FormData {
    college: string;
    year: string;
    state: string;
    city: string;
}

interface FormPart2Props {
    formData: FormData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    locationData: { state: string, cities: string[] }[];
    errors: {
        college: string;
        year: string;
        state: string;
        city: string;
    };
}

export default function FormPart2({ 
  formData,
  handleChange,
  locationData, errors ,
}: FormPart2Props) {
  const [cityOptions, setCityOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    if (formData.state) {
      const selectedStateData = locationData.find(
        (s) => s.state === formData.state,
      );
      if (selectedStateData) {
        setCityOptions(
          selectedStateData.cities.map((city) => ({
            value: city,
            label: city,
          })),
        );
      } else {
        setCityOptions([]);
      }
    } else {
      setCityOptions([]);
    }
  }, [formData.state, locationData]);

  const stateOptions: OptionType[] = locationData.map((s) => ({
    value: s.state,
    label: s.state,
  }));

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && state.menuIsOpen ? "#FFEB00" : "#000",
      border: "none",
      boxShadow: "none",
      borderRadius: "0",
      minHeight: "unset", // Important to let CSS padding dictate height
      padding: 0,
      cursor: "pointer",
      color: state.isFocused && state.menuIsOpen ? "#000" : "#FFEB00",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0", // Reset internal padding
      margin: "0",
      color: "inherit", // Inherit from control (which gets it from class)
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
    }),
    input: (provided) => ({
      ...provided,
      color: "inherit",
      padding: 0,
      margin: 0,
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "inherit",
      margin: 0,
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "inherit",
      opacity: state.selectProps.menuIsOpen ? 0.8 : 1,
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#000",
      border: "1px solid #FFEB00",
      borderRadius: "0",
      zIndex: 9999,
      marginTop: "0",
      marginBottom: "0",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      "::-webkit-scrollbar": {
        width: "4px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#FFEB00",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#FFEB00" : "#000",
      color: state.isFocused ? "#000" : "#FFEB00",
      fontFamily: "Blender Pro, sans-serif",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      padding: "0.5rem 1rem",
      "&:active": {
        backgroundColor: "#FFEB00",
        color: "#000",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "inherit",
      padding: "0",
      "&:hover": {
        color: "inherit",
      },
      "& svg": {
        width: "1.5rem",
        height: "1.5rem",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const handleSelectChange = (name: string, option: OptionType | null) => {
    // Create a synthetic event to pass to the parent's handleChange
    const e = {
      target: {
        name,
        value: option ? option.value : "",
      },
    } as unknown as React.ChangeEvent<HTMLSelectElement>; // Type casting carefully
    handleChange(e);
  };

  return (
    <>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="college"
          placeholder="[College]"
          value={formData.college}
          onChange={handleChange}
          className={styles.input}
          autoComplete="off"
        />
                {errors.college && <p className={styles.error}>{errors.college}</p>}
      </div>

      <div className={styles.inputGroup}>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className={`${styles.input} ${styles.select}`}
        >
          <option value="" disabled hidden>
            [Year of study]
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
                {errors.year && <p className={styles.error}>{errors.year}</p>}
      </div>

      <div className={styles.inputGroup}>
        <Select
          name="state"
          options={stateOptions}
          value={
            formData.state
              ? { value: formData.state, label: formData.state }
              : null
          }
          onChange={(option) => handleSelectChange("state", option)}
          placeholder="[State]"
          styles={customStyles}
          classNames={{
            control: () => styles.input, // Inherit .input styles for dimensions
          }}
          isSearchable
          menuPlacement="top"
          className={styles.selectContainer}
        />
                {errors.state && <p className={styles.error}>{errors.state}</p>}
      </div>

      <div className={styles.inputGroup}>
        <Select
          name="city"
          options={cityOptions}
          value={
            formData.city
              ? { value: formData.city, label: formData.city }
              : null
          }
          onChange={(option) => handleSelectChange("city", option)}
          placeholder="[City]"
          styles={customStyles}
          classNames={{
            control: () => styles.input, // Inherit .input styles for dimensions
          }}
          isSearchable
          isDisabled={!formData.state}
          noOptionsMessage={() => "Select a state first"}
          menuPlacement="top"
        />
      </div>
    </>
  );
}
