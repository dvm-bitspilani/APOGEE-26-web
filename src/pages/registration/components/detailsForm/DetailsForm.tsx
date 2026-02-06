import styles from "./DetailsForm.module.scss";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRegistrationStore } from "../../../../utils/store";
import locationData from "./cities.json";
import NavButton from "../navButton/NavButton";
import FormPart1 from "./components/FormPart1";
import FormPart2 from "./components/FormPart2";
import * as Yup from "yup";
import axios from "axios";

const validationForm1Schema = Yup.object({
  name: Yup.string().required("[Name is required]"),
  email: Yup.string().email("Invalid email").required("[Email is required]"),
  gender: Yup.string().required("[Gender is required]"),
  dob: Yup.date().typeError("[Invalid date]").required("[Date of Birth is required]"),
});

const validationForm2Schema = Yup.object({
  college: Yup.string().required("[College is required]"),
  year: Yup.string().required("[Year is required]"),
  state: Yup.string().required("[State is required]"),
  city: Yup.string().required("[City is required]"),
});


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
  const { setRegistrationStep, userData, setUserData } = useRegistrationStore();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    college: "",
    year: "",
    state: "",
    city: "",
  });

  const [step, setStep] = useState(1);
  const [collegeList, setCollegeList] = useState([]);
  const container = useRef<HTMLDivElement>(null);
  const form1Ref = useRef<HTMLDivElement>(null);
  const form2Ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });


  const [placeholder, setPlaceholder] = useState("");

  useGSAP(() => {
    setPlaceholder(getDatePlaceholder());
    if (step === 1) {
      gsap.set(form1Ref.current, { autoAlpha: 1, display: "block" });
      gsap.set(form2Ref.current, { autoAlpha: 0, display: "none" });
    } else {
      gsap.set(form1Ref.current, { autoAlpha: 0, display: "none" });
      gsap.set(form2Ref.current, { autoAlpha: 1, display: "block" });
    }
  }, [step]); // Re-run setup on step change to ensure correct state after re-render

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUserData({ ...userData, email: mail });
  }, [mail]);

  const validateForm1 = async () => {
    try {
      await validationForm1Schema.validate(userData, { abortEarly: false });
      setErrors({
        name: "",
        email: "",
        gender: "",
        dob: "",
        college: "",
        year: "",
        state: "",
        city: "",
      });
      return true;
    } catch (err: any) {
      const newErrors: any = {};
      err.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return false;
    }
  };

  const validateForm2 = async () => {
    try {
      await validationForm2Schema.validate(userData, { abortEarly: false });
      setErrors({
        name: "",
        email: "",
        gender: "",
        dob: "",
        college: "",
        year: "",
        state: "",
        city: "",
      });
      return true;
    } catch (err: any) {
      const newErrors: any = {};
      err.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return false;
    }
  };

  const handleNext = contextSafe(async () => {
    const isValid = await validateForm1();
    if (!isValid) return;

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
          gsap.set(form2Ref.current, { display: "block" });
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
          gsap.set(form1Ref.current, { display: "block" });
        },
      }).to(form1Ref.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  });

  const handleToEvents = contextSafe(async () => {
    const v1 = await validateForm1();
    const v2 = await validateForm2();
    if (!v1 || !v2) return;

    const tl = gsap.timeline({
      onComplete: () => setRegistrationStep("events"),
    });

    tl.to(form2Ref.current, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(form2Ref.current, { display: "none" });
        // gsap.set(form1Ref.current, { display: "block" });
      },
    })

  });

  useEffect(() => {
    axios.get("https://merge.bits-apogee.org/2026/main/registrations/get_college/")
      .then((res) => {
        setCollegeList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <h1 className={styles.title}>REGISTER</h1>
      <h2 className={styles.subtitle}>[ENTER YOUR DETAILS]</h2>

      <div className={`${styles.formContainer} ${styles.desktopFormContainer}`}>
        <div ref={form1Ref}>
          <form
            // ref={form1Ref}
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >

            <FormPart1
              formData={userData}
              handleChange={handleChange}
              placeholder={placeholder}
              errors={errors}
            />
          </form>

          <NavButton onClick={handleNext} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
            <span>Next</span>
          </NavButton>
        </div>

        <div ref={form2Ref}>
          <form
            // ref={form2Ref}
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormPart2
              formData={userData}
              handleChange={handleChange}
              locationData={locationData}
              collegeList={collegeList}
              errors={errors}
            />

          </form>
          <div className={styles.buttonContainer}>
            <NavButton onClick={handlePrev} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
              <span>Previous</span>
            </NavButton>
            <NavButton onClick={handleToEvents} outerClass={styles.navButton} innerClass={styles.navButtonContent}>
              <span>Events</span>
            </NavButton>
          </div>
        </div>
      </div>
      <div className={`${styles.formContainer} ${styles.mobileFormContainer}`}>
        <form
          // ref={form1Ref}
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormPart1
            formData={userData}
            handleChange={handleChange}
            placeholder={placeholder}
            errors={errors}
          />
          <FormPart2
            formData={userData}
            handleChange={handleChange}
            locationData={locationData}
            errors={errors}
            collegeList={collegeList}
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
