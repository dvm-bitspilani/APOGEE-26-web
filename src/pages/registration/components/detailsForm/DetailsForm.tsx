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
    const [step, setStep] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Initial state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        dob: '',
        college: '',
        year: '',
        state: '',
        city: ''
    });

    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        setPlaceholder(getDatePlaceholder());
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setStep(2);
            setIsTransitioning(false);
        }, 500); // Match CSS transition duration
    };

    // Helper to get class for step visibility
    const getStepClass = (currentStep: number) => {
        if (step === currentStep && !isTransitioning) return `${styles.form} ${styles.active}`;
        if (step === currentStep && isTransitioning) return `${styles.form}`; // Fading out
        if (step !== currentStep && isTransitioning && ((step === 1 && currentStep === 2) || (step === 2 && currentStep === 1))) return `${styles.form}`; // Fading in (technically logic is simpler: fade out current, set state, fade in new. But basic approach: fade out -> state change -> fade in)
        // Actually simplest fade out/in logic:
        // 1. Click Next -> Set transitioning true (fade out active form)
        // 2. Timeout -> Set Step 2, Set transitioning false (fade in new active form)
        
        // Revised logic with simple classes:
        // Active component gets .active class (opacity 1). Transitioning handles opacity 0.
        // We need to unmount/hide the non-active one.
        return step === currentStep 
            ? `${styles.form} ${isTransitioning ? '' : styles.active}` 
            : `${styles.form} ${styles.inactive}`;
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>REGISTER</h1>
            <h2 className={styles.subtitle}>[ENTER YOUR DETAILS]</h2>

            <div className={styles.formContainer}>
                {/* STEP 1 */}
                <form className={getStepClass(1)} onSubmit={(e) => e.preventDefault()}>
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

                    <div className={styles.buttonContainer}>
                        <button type="button" className={styles.button} onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </form>

                {/* STEP 2 */}
                <form className={getStepClass(2)} onSubmit={(e) => e.preventDefault()}>
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
                    </div>

                    <div className={styles.inputGroup}>
                         <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className={`${styles.input} ${styles.select}`}
                        >
                            <option value="" disabled hidden>[Year of study]</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                         <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`${styles.input} ${styles.select}`}
                        >
                             <option value="" disabled hidden>[State]</option>
                             {/* Placeholder options */}
                             <option value="state1">State 1</option>
                             <option value="state2">State 2</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                         <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`${styles.input} ${styles.select}`}
                        >
                             <option value="" disabled hidden>[City]</option>
                             {/* Placeholder options */}
                             <option value="city1">City 1</option>
                             <option value="city2">City 2</option>
                        </select>
                    </div>

                     <div className={styles.buttonContainer}>
                        <button type="button" className={`${styles.button} ${styles.filled}`}>
                            Select Events
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailsForm;
