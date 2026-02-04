import styles from "../DetailsForm.module.scss"

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

export default function FormPart2({ formData, handleChange, locationData, errors }: FormPart2Props) {
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
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select}`}
                >
                    <option value="" disabled hidden>
                        [State]
                    </option>
                    {/* Placeholder options */}
                    {
                        locationData.map((state, i) =>
                            <option value={state.state} key={i}>{state.state}</option>
                        )
                    }
                </select>
                {errors.state && <p className={styles.error}>{errors.state}</p>}
            </div>

            <div className={styles.inputGroup}>
                <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select}`}
                >
                    <option value="" disabled hidden>
                        [City]
                    </option>
                    {/* Placeholder options */}
                    {
                        locationData.find((state) => state.state === formData.state)?.cities.map((city, _i) =>
                            <option value={city} key={_i}>{city}</option>
                        )
                    }
                </select>
                {errors.city && <p className={styles.error}>{errors.city}</p>}
            </div>
        </>
    )
}
