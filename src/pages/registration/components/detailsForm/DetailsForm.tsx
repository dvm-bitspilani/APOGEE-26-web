import styles from "./DetailsForm.module.scss";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRegistrationStore } from "../../../../utils/store";
import locationData from "./cities.json";
import NavButton from "../navButton/NavButton";
import FormPart1 from "./components/FormPart1";
import FormPart2 from "./components/FormPart2";

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

const DetailsForm = ({ mail = "" }: { mail: string }) => {
  const { setRegistrationStep } = useRegistrationStore();
  const handleToEvents = () => setRegistrationStep("events");

  const [step, setStep] = useState(1);
  const container = useRef<HTMLDivElement>(null);
  const form1Ref = useRef<HTMLFormElement>(null);
  const form2Ref = useRef<HTMLFormElement>(null);

  const { contextSafe } = useGSAP({ scope: container });
  const [formData, setFormData] = useState({
    name: "",
    email: mail,
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

      <div className={`${styles.formContainer} ${styles.desktopFormContainer}`}>
        <form
          ref={form1Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >

          <FormPart1
            formData={formData}
            handleChange={handleChange}
            placeholder={placeholder}
          />

          <NavButton onClick={handleNext} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
            <span>Next</span>
          </NavButton>
        </form>

        {/* STEP 2 */}
        <form
          ref={form2Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormPart2
            formData={formData}
            handleChange={handleChange}
            locationData={locationData}
          />

          <div className={styles.buttonContainer}>
            <NavButton onClick={handlePrev} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
              <span>Previous</span>
            </NavButton>
            <NavButton onClick={handleToEvents} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
              <span>Events</span>
            </NavButton>
          </div>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.mobileFormContainer}`}>
        <form
          ref={form1Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormPart1
            formData={formData}
            handleChange={handleChange}
            placeholder={placeholder}
          />
          <FormPart2
            formData={formData}
            handleChange={handleChange}
            locationData={locationData}
          />
        </form>
        <NavButton onClick={handleToEvents} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
          <span>Select Events</span>
        </NavButton>
      </div>
    </div>
  );
};

export default DetailsForm;
