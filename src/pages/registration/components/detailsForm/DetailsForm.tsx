import styles from './DetailsForm.module.scss';
import { useState, useEffect } from 'react';


function getDatePlaceholder(locale = navigator.language) {
  const parts = new Intl.DateTimeFormat(locale).formatToParts(
    new Date(2000, 11, 31)
  );

  return parts
    .filter(p => p.type !== "literal")
    .map(p => {
      if (p.type === "day") return "DD";
      if (p.type === "month") return "MM";
      if (p.type === "year") return "YYYY";
      return "";
    })
    .join("-");
}


const DetailsForm = () => {
    // Initial state matching the "empty" but stylized look
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        dob: ''
    });

    const [placeholder, setPlaceholder] = useState("");

useEffect(() => {
  setPlaceholder(getDatePlaceholder());
}, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>REGISTER</h1>
            <h2 className={styles.subtitle}>[ENTER YOUR DETAILS]</h2>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
                        <option value="" disabled hidden>[Gender]</option>
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
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = 'text';
                        }}
                        value={formData.dob}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
            </form>
        </div>
    );
};

export default DetailsForm;
