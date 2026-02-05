import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";
import Instructions from "./components/instruction/Instructions";
import Events from "./components/events/Events";
import DetailsForm from "./components/detailsForm/DetailsForm";
import { useRegistrationStore } from "../../utils/store";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Helmet from "./components/UI/helmet/Helmet";
import GlitchText from "./components/UI/glitchText/GlitchText";

function Registration() {
  const navigate = useNavigate();
  const { setRegistrationStep, setEvents } = useRegistrationStore();



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

  function redirectWithPost(url: string, data: { [key: string]: string }) {
    const form = document.createElement("form");

    form.method = "POST";

    form.action = url;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const input = document.createElement("input");

        input.type = "hidden";

        input.name = key;

        input.value = data[key];

        form.appendChild(input);
      }
    }

    document.body.appendChild(form);

    form.submit();
  }

  const [userEmail, setUserEmail] = useState("");


  const getEvents = () => {
    axios
      .get("https://merge.bits-apogee.org/2026/main/registrations/web_events/")
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
          "https://merge.bits-apogee.org/2026/main/registrations/google-reg/",
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
              "https://merge.bits-apogee.org/2026/main/registrations/google-reg/",

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
          src="/img/registrations/instructions-right-panel.png"
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
