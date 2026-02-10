import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";
import Instructions from "./components/instruction/Instructions";
import Events from "./components/events/Events";
import DetailsForm from "./components/detailsForm/DetailsForm";
import { useRegistrationStore } from "../../utils/store";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Helmet from "./components/UI/helmet/Helmet";
import GlitchText from "./components/UI/glitchText/GlitchText";
import redirectWithPost from "./redirectWithPost";
import RegPreLoader from "./components/regPreLoader/RegPreLoader";
import helmetModel from "../../assets/3d/registration/helmet.glb";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

function Registration() {
  const navigate = useNavigate();
  const { setRegistrationStep, setEvents } = useRegistrationStore();

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = [
      "/img/registrations/instructions-right-panel.png",
      "/img/registrations/instructions-panel-bg-mobile.png",
      "/img/registrations/instructions-panel-frame-mobile.png",
      "/svg/registrations/back-button.svg",
    ];

    let imagesLoaded = 0;
    let modelProgress = 0;

    const totalImages = images.length;

    const updateCombinedProgress = () => {
      const imagePercent = (imagesLoaded / totalImages) * 100;
      // Weight: 30% images, 70% model (since model is heavier)
      const combined = imagePercent * 0.3 + modelProgress * 0.7;
      setProgress(combined);

      if (imagesLoaded === totalImages && modelProgress === 100) {
        console.log(">> ALL ASSETS LOADED. INITIALIZING...");
        setTimeout(() => setLoading(false), 500);
      }
    };

    // 1. Preload Images
    console.log(">> STARTING IMAGE PRELOAD", images);
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`>> IMAGE LOADED: ${src}`);
        imagesLoaded++;
        updateCombinedProgress();
      };
      img.onerror = () => {
        console.warn(`>> FAILED TO LOAD IMAGE: ${src}`);
        imagesLoaded++; // Count it anyway to avoid partial hang
        updateCombinedProgress();
      };
    });

    // 2. Preload 3D Model
    console.log(">> STARTING GLTF PRELOAD: ", helmetModel);

    // Setup Draco Loader
    // @ts-ignore
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    dracoLoader.setDecoderConfig({ type: "js" });

    // @ts-ignore
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      helmetModel,
      (gltf: any) => {
        console.log(">> HELMET MODEL DOWNLOADED COMPLETE", gltf);
        modelProgress = 100;
        updateCombinedProgress();
      },
      (xhr: any) => {
        if (xhr.total > 0) {
          modelProgress = (xhr.loaded / xhr.total) * 100;
          console.log(
            `>> HELMET LOADING: ${Math.round(modelProgress)}% (${xhr.loaded}/${xhr.total} bytes)`,
          );
        } else {
          // Fallback if no total, simulate progress
          modelProgress = Math.min(modelProgress + 10, 90);
          console.log(`>> HELMET LOADING... (Size unknown)`);
        }
        updateCombinedProgress();
      },
      (error: any) => {
        console.error(">> HELMET LOAD ERROR", error);
        modelProgress = 100; // Proceed anyway
        updateCombinedProgress();
      },
    );
  }, []);

  const {
    registrationStep,
    activeEvent,
    stickyEvent,
    selectedEvents,
    toggleEvent,
    setAccessToken,
  } = useRegistrationStore();

  const displayEvent = stickyEvent || activeEvent;
  const isSelected = displayEvent
    ? selectedEvents.some((e) => e.id === displayEvent.id)
    : false;

  const [_cookies, setCookies] = useCookies([
    "Authorization",

    "user-auth",

    "Access_token",
  ]);

  const [userEmail, setUserEmail] = useState("");

  const getEvents = () => {
    axios
      .get("https://bits-apogee.org/2026/main/registrations/web_events/")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      axios

        .post(
          "https://bits-apogee.org/2026/main/registrations/google-reg/",
          {
          access_token: response.access_token,
          },
        )

        .then((res) => {
          setCookies("Access_token", response.access_token);

          if (res.data.exists) {
            setCookies("user-auth", res.data);

            setCookies("Authorization", res.data.tokens.access);

            // window.location.href = `https://bits-oasis.org/2025/main/registrations?token=${res.data.tokens.access}`;

            redirectWithPost(
              "https://bits-apogee.org/2026/main/registrations/",

              {
                token: res.data.tokens.access,
              },
            );

            setUserEmail(res.data.email);
          } else {
            setCookies("user-auth", res.data);

            setUserEmail(res.data.email);

            setAccessToken(response.access_token);

            if (res.data.email) {
              setRegistrationStep("details");
              getEvents();
            }
          }
        })

        .catch((err) => {
          console.log(err);
        });
    },

    // onFailure: () => {

    //   console.error("Login failed");

    // },
  });

  const handleBack = () => {
    if (registrationStep === "events") {
      setRegistrationStep("details");
    } else if (registrationStep === "details") {
      setRegistrationStep("instructions");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <RegPreLoader loading={true} progress={progress} />}
      <button className={styles.backButton} onClick={handleBack}>
        <img src="/svg/registrations/back-button.svg" alt="Back" />
      </button>

      <div className={styles.leftPanel}>
        <div className={styles.bannerText}>
          <GlitchText />
        </div>
        <div className={styles.robotFace}>
          <Helmet />
        </div>

        {registrationStep === "events" && displayEvent && (
          <div className={styles.detailsPanel}>
            {/* Header Section: Fixed at top */}
            <div className={styles.detailsHeader}>
              <h2 className={styles.eventName}>[{displayEvent.name}]</h2>
              <button
                onClick={() => {
                  useRegistrationStore.getState().setStickyEvent(null);
                  useRegistrationStore.getState().setActiveEvent(null);
                }}
                className={styles.closeButton}
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Section */}
            <div className={styles.scrollContainer}>
              <div className={styles.detailsContent}>
                <p className={styles.eventDesc}>{displayEvent.description}</p>
              </div>
              {/* Fade Overlay */}
              <div className={styles.fadeOverlay}></div>
            </div>

            {stickyEvent && (
              <button
                onClick={() => toggleEvent(displayEvent)}
                className={`${styles.actionButton} ${isSelected ? styles.selected : ""}`}
              >
                {isSelected ? "REMOVE" : "ADD"}
              </button>
            )}
          </div>
        )}
      </div>

      <div className={styles.rightPanel}>
        <img
          src="/img/registrations/regBackground.png"
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.bgContainerMobile}>
          <img
            className={styles.bgPanelImage}
            src="/img/registrations/instructions-panel-bg-mobile.png"
          />
          <img
            className={styles.bgPanelFrame}
            src="/img/registrations/instructions-panel-frame-mobile.png"
          />
        </div>
        {registrationStep === "instructions" && (
          <Instructions googleLogin={googleLogin} />
        )}
        {registrationStep === "details" && <DetailsForm mail={userEmail} />}
        {registrationStep === "events" && <Events />}
      </div>
    </div>
  );
}

export default Registration;
