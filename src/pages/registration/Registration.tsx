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
        {registrationStep === "events" && displayEvent ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url(/img/registrations/event-info-panel.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "4rem",
              boxSizing: "border-box",
              color: "#e2dccb",
              position: "relative",
            }}
          >
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                width: "100%",
                marginTop: "auto",
                marginBottom: "auto",
                display: "flex",
                flexDirection: "column",
                maxHeight: "70%",
                position: "relative",
              }}
            >
              <button
                onClick={() => {
                  useRegistrationStore.getState().setStickyEvent(null);
                  useRegistrationStore.getState().setActiveEvent(null);
                }}
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "0",
                  background: "transparent",
                  border: "none",
                  color: "#ffff00",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0.5rem",
                  lineHeight: "1",
                }}
              >
                ✕
              </button>
              <h2
                style={{
                  color: "#ffff00",
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ffff00",
                  display: "inline-block",
                  paddingRight: "2rem",
                }}
              >
                [{displayEvent.name}]
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "justify",
                }}
              >
                {displayEvent.about}
              </p>
            </div>

            {stickyEvent && (
              <button
                onClick={() => toggleEvent(displayEvent)}
                style={{
                  border: "1px solid #e2dccb",
                  background: isSelected ? "#ffff00" : "transparent",
                  color: isSelected ? "#000" : "#e2dccb",
                  padding: "0.5rem 2rem",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  alignSelf: "flex-end", // Align to right
                  marginTop: "auto", // Push to bottom
                  transition: "all 0.3s ease",
                }}
              >
                {isSelected ? "REMOVE" : "ADD"}
              </button>
            )}
          </div>
        ) : (
          <>
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
          </>
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
