import styles from "../DetailsForm.module.scss"

interface FormPart1Props {
    formData: any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    placeholder: string
}

export default function FormPart1({formData, handleChange, placeholder}: FormPart1Props) {
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
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="text"
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
            </div>
        </>
    )
}
