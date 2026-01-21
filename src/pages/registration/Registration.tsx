import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";
import Instructions from "./components/instruction/Instructions";
import Events from "./components/events/Events";
import DetailsForm from "./components/detailsForm/DetailsForm";
import { useRegistrationStore } from "../../utils/store";

function Registration() {
  const navigate = useNavigate();
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
        {registrationStep === "instructions" && <Instructions />}
        {registrationStep === "details" && <DetailsForm />}
        {registrationStep === "events" && <Events />}
      </div>
    </div>
  );
}

export default Registration;
