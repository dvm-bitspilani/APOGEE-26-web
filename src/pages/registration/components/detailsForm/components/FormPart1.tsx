import styles from "../DetailsForm.module.scss"
import { useState, useEffect } from "react";

interface FormData {
    name: string;
    email: string;
    gender: string;
    dob: string;
}

interface FormPart1Props {
    formData: FormData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    placeholder: string
    errors: {
        name: string;
        email: string;
        gender: string;
        dob: string;
    };
}

export default function FormPart1({ formData, handleChange, placeholder, errors }: FormPart1Props) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
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
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="off"
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.inputGroup}>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select}`}
                >
                    <option value="" disabled hidden>
                        [Gender]
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p className={styles.error}>{errors.gender}</p>}
            </div>

            <div className={styles.inputGroup}>
                <input
                    type={isMobile ? "date" : "text"}
                    name="dob"
                    placeholder={`[Date of Birth ${placeholder}]`}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.dob}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.dob && <p className={styles.error}>{errors.dob}</p>}
            </div>
        </>
    )
}
