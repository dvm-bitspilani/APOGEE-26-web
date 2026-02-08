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
    collegeList: { id: string, name: string }[];
}

interface OptionType {
    value: string;
    label: string;
}

export default function FormPart2({
    formData,
    handleChange,
    locationData,
    errors,
    collegeList,
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
            backgroundColor: "#000", // $dark-bg
            border: "none",
            boxShadow: "none",
            borderRadius: "0",
            minHeight: "unset",
            padding: "var(--input-padding)", // Responsive padding
            cursor: "pointer",
            // Imitate focus state of .input
            ...(state.isFocused &&
                state.menuIsOpen && {
                backgroundColor: "#FFEB00", // $cyber-yellow
                color: "#000", // $dark-bg
            }),
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: "0",
            margin: "0",
            color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
            fontFamily: "Blender Pro, sans-serif",
            fontWeight: "var(--input-font-weight)" as any,
            fontSize: "var(--input-font-size)", // Responsive font size
        }),
        input: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
            padding: 0,
            margin: 0,
            fontFamily: "Blender Pro, sans-serif",
            fontSize: "var(--input-font-size)",
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
            margin: 0,
            fontFamily: "Blender Pro, sans-serif",
            fontSize: "var(--input-font-size)",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
            opacity: state.selectProps.menuIsOpen ? 0.8 : 1, // Placeholder style
            fontFamily: "Blender Pro, sans-serif",
            fontSize: "var(--input-font-size)",
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
            color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
            padding: "0",
            "&:hover": {
                color: state.selectProps.menuIsOpen ? "#000" : "#FFEB00",
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
            <div className={styles.inputGroup} >
                <Select
                    name="college"
                    options={collegeList.map((college) => ({ value: college.id, label: college.name }))}
                    value={
                        formData.college
                            ? { value: formData.college, label: formData.college }
                            : null
                    }
                    onChange={(option) => handleSelectChange("college", option)}
                    placeholder="[College]"
                    styles={customStyles}
                    isSearchable
                    menuPlacement="top"
                    className={styles.selectContainer}
                />
                {errors.college && <p className={styles.error}>{errors.college}</p>}
            </div>

            < div className={styles.inputGroup} >
                <Select
                    name="year"
                    options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                    ]}
                    value={
                        formData.year
                            ? { value: formData.year, label: formData.year }
                            : null
                    }
                    onChange={(option) => handleSelectChange("year", option)}
                    placeholder="[Year of study]"
                    styles={customStyles}
                    isSearchable
                    menuPlacement="top"
                    className={styles.selectContainer}
                />
                {errors.year && <p className={styles.error}>{errors.year}</p>}
            </div>

            < div className={styles.inputGroup} >
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
                    isSearchable
                    menuPlacement="top"
                    className={styles.selectContainer}
                />
                {errors.state && <p className={styles.error}>{errors.state}</p>}
            </div>

            < div className={styles.inputGroup} >
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
                    isSearchable
                    isDisabled={!formData.state}
                    noOptionsMessage={() => "Select a state first"}
                    menuPlacement="top"
                />
                {errors.city && <p className={styles.error}>{errors.city}</p>}
            </div>
        </>
    );
}
