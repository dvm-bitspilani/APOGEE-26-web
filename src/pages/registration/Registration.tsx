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

function Registration() {
  const navigate = useNavigate();
  const { setRegistrationStep } = useRegistrationStore();

  const {
    registrationStep,
    activeEvent,
    stickyEvent,
    selectedEvents,
    toggleEvent,
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

            if (res.data.email) setRegistrationStep("details");
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

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src="/svg/registrations/back-button.svg" alt="Back" />
      </button>

      <div className={styles.leftPanel}>
        <img
          src="/img/registrations/apogee-text-banner.png"
          alt="APOGEE 2026"
          className={styles.bannerText}
        />
        <img
          src="/img/registrations/robot-face.png"
          alt="Mascot"
          className={styles.robotFace}
        />

        {registrationStep === "events" && displayEvent && (
          <div className={styles.detailsPanel}>
            <div className={styles.detailsContent}>
              <button
                onClick={() => {
                  useRegistrationStore.getState().setStickyEvent(null);
                  useRegistrationStore.getState().setActiveEvent(null);
                }}
                className={styles.closeButton}
              >
                ✕
              </button>
              <h2 className={styles.eventName}>[{displayEvent.name}]</h2>
              <p className={styles.eventDesc}>{displayEvent.about}</p>
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
          <img className={styles.bgPanelImage} src="/img/registrations/instructions-panel-bg-mobile.png" />
          <img className={styles.bgPanelFrame} src="/img/registrations/instructions-panel-frame-mobile.png" />
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
