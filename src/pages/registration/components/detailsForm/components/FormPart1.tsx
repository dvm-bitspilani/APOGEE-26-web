import styles from "../DetailsForm.module.scss"

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

export default function FormPart1({ formData, handleChange, errors }: FormPart1Props) {
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
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
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
