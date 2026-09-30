import { demoEvents, sampleIdentity } from "../../utils/demoService";
import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.scss";
import Instructions from "./components/instruction/Instructions";
import Events from "./components/events/Events";
import DetailsForm from "./components/detailsForm/DetailsForm";
import { useRegistrationStore } from "../../utils/store";
import { useEffect } from "react";
import Helmet from "./components/UI/helmet/Helmet";
import GlitchText from "./components/UI/glitchText/GlitchText";
// @ts-ignore
// @ts-ignore
import ReactHelmet from "../components/ReactHelmet";

function Registration() {
  const navigate = useNavigate();
  const { setRegistrationStep, setEvents } = useRegistrationStore();

  const {
    registrationStep,
    activeEvent,
    stickyEvent,
    selectedEvents,
    toggleEvent,
    // setAccessToken,
  } = useRegistrationStore();

  const displayEvent = stickyEvent || activeEvent;
  const isSelected = displayEvent
    ? selectedEvents.some((e) => e.id === displayEvent.id)
    : false;

  const userEmail = sampleIdentity.email;
  useEffect(() => { setEvents(demoEvents); }, [setEvents]);
  const handleSuccess = () => {
    useRegistrationStore.getState().setUserData(sampleIdentity);
    setRegistrationStep("details");
  };

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
    <>
      <ReactHelmet
        title="APOGEE '26 | Under Steel Skies | Registration"
        description="Register for APOGEE 2026."
        url="https://apogee2026.bits-apogee.org/registration"
      />
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
            src="/img/registrations/regBackground.png"
            alt="Background"
            className={styles.backgroundImage}
          />
          <div className={styles.bgContainerMobile}>
            <img
              className={styles.bgPanelImage}
              src="/img/registrations/instructions-panel-bg-mobile.png"
              alt="Instructions Panel Background"
            />
            <img
              className={styles.bgPanelFrame}
              src="/img/registrations/instructions-panel-frame-mobile.png"
              alt="Instructions Panel Frame"
            />
          </div>
          {registrationStep === "instructions" && (
            <Instructions onContinue={handleSuccess} />
          )}
          {registrationStep === "details" && <DetailsForm mail={userEmail} />}
          {registrationStep === "events" && <Events />}
        </div>
      </div>
    </>
  );
}

export default Registration;
