import styles from "./DetailsForm.module.scss";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRegistrationStore } from "../../../../utils/store";

function getDatePlaceholder(locale = navigator.language) {
  const parts = new Intl.DateTimeFormat(locale).formatToParts(
    new Date(2000, 11, 31),
  );

  return parts
    .filter((p) => p.type !== "literal")
    .map((p) => {
      if (p.type === "day") return "DD";
      if (p.type === "month") return "MM";
      if (p.type === "year") return "YYYY";
      return "";
    })
    .join("-");
}

const DetailsForm = () => {
  const { setRegistrationStep } = useRegistrationStore();
  const handleToEvents = () => setRegistrationStep("events");

  const [step, setStep] = useState(1);
  const container = useRef<HTMLDivElement>(null);
  const form1Ref = useRef<HTMLFormElement>(null);
  const form2Ref = useRef<HTMLFormElement>(null);

  const { contextSafe } = useGSAP({ scope: container });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    college: "",
    year: "",
    state: "",
    city: "",
  });

  const [placeholder, setPlaceholder] = useState("");

  useGSAP(() => {
    setPlaceholder(getDatePlaceholder());
    if (step === 1) {
      gsap.set(form1Ref.current, { autoAlpha: 1, display: "flex" });
      gsap.set(form2Ref.current, { autoAlpha: 0, display: "none" });
    } else {
      gsap.set(form1Ref.current, { autoAlpha: 0, display: "none" });
      gsap.set(form2Ref.current, { autoAlpha: 1, display: "flex" });
    }
  }, [step]); // Re-run setup on step change to ensure correct state after re-render

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = contextSafe(() => {
    if (step === 1) {
      const tl = gsap.timeline({
        onComplete: () => setStep(2),
      });

      tl.to(form1Ref.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(form1Ref.current, { display: "none" });
          gsap.set(form2Ref.current, { display: "flex" });
        },
      }).to(form2Ref.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  });

  const handlePrev = contextSafe(() => {
    if (step === 2) {
      const tl = gsap.timeline({
        onComplete: () => setStep(1),
      });

      tl.to(form2Ref.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(form2Ref.current, { display: "none" });
          gsap.set(form1Ref.current, { display: "flex" });
        },
      }).to(form1Ref.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <div ref={container} className={styles.container}>
      <h1 className={styles.title}>REGISTER</h1>
      <h2 className={styles.subtitle}>[ENTER YOUR DETAILS]</h2>

      <div className={styles.formContainer}>
        <form
          ref={form1Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
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

          <div className={styles.buttonContainer}>
            <div className={styles.customBtnWrapper} onClick={handleNext}>
              <div className={styles.btnSomething}>
                <img
                  src="/svg/registrations/btnFrame.svg"
                  className={styles.leftFrame}
                  alt="frame"
                />
                <img
                  src="/svg/registrations/btnFrame.svg"
                  className={styles.rightFrame}
                  alt="frame"
                />
                <img
                  src="/svg/registrations/btnInternal.svg"
                  className={styles.btnInternal}
                  alt="bg"
                />
              </div>
              <span className={styles.btnText}>Next</span>
            </div>
          </div>
        </form>

        {/* STEP 2 */}
        <form
          ref={form2Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
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
              <option value="" disabled hidden>
                [Year of study]
              </option>
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
              <option value="" disabled hidden>
                [State]
              </option>
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
              <option value="" disabled hidden>
                [City]
              </option>
              {/* Placeholder options */}
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.button}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.filled}`}
              onClick={handleToEvents}
            >
              Select Events
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
