import { type StylesConfig } from "react-select";

interface OptionType {
    value: string;
    label: string;
}

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
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 9999,
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


export default customStyles;