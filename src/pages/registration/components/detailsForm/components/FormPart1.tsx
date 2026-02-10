import styles from "../DetailsForm.module.scss"
import Select from "react-select"
import customStyles from "./customStyles"

interface FormData {
    name: string;
    email: string;
    gender: string;
    phone: string;
}

interface FormPart1Props {
    formData: FormData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    errors: {
        name: string;
        email: string;
        gender: string;
        phone: string;
    };
}

interface OptionType {
    value: string;
    label: string;
}


export default function FormPart1({ formData, handleChange, errors }: FormPart1Props) {


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
                    name="name"
                    placeholder="[Enter your name]"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="off"
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="[Enter your e-mail address]"
                    value={formData.email}
                    className={styles.input}
                    autoComplete="off"
                    disabled
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.inputGroup}>
                <Select
                    name="gender"
                    options={[
                        { value: "M", label: "Male" },
                        { value: "F", label: "Female" },
                        { value: "O", label: "Other" },
                    ]}
                    value={
                        formData.gender
                            ? { value: formData.gender, label: formData.gender == "M" ? "Male" : formData.gender == "F" ? "Female" : "Other" }
                            : null
                    }
                    onChange={(option) => handleSelectChange("gender", option)}
                    placeholder="[Gender]"
                    styles={customStyles}
                    isSearchable
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    className={styles.selectContainer}
                />
                {errors.gender && <p className={styles.error}>{errors.gender}</p>}
            </div>

            <div className={styles.inputGroup}>
                {/* <input
                    type={isMobile ? "date" : "text"}
                    name="dob"
                    placeholder={`[Date of Birth ${placeholder}]`}
                    onFocus={!isMobile ? (e) => (e.target.type = "date") : undefined}
                    onBlur={!isMobile ? (e) => {
                        if (!e.target.value) e.target.type = "text";
                    } : undefined}
                    value={formData.dob}
                    onChange={handleChange}
                    className={styles.input}
                /> */}
                <input type="number" name="phone" placeholder="[Enter your phone number]" value={formData.phone} onChange={handleChange} className={styles.input} />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
        </>
    )
}
