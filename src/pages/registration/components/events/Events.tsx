import { useState, useEffect, useRef } from "react";
import { useRegistrationStore } from "../../../../utils/store";
import styles from "./Events.module.scss";
import NavButton from "../navButton/NavButton";
import axios from "axios";
import redirectWithPost from "../../redirectWithPost";

const Events = () => {
  const {
    events,
    selectedEvents,
    toggleEvent,
    setActiveEvent,
    activeEvent,
    userData,
    accessToken,
  } = useRegistrationStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = search;
    }
  }, [search]);

  const isSelected = (id: number) => selectedEvents.some((e) => e.id === id);

  const register = () => {
    const submissionData = {
      access_token: accessToken,
      email_id: userData?.email,
      phone: userData?.phone,
      name: userData?.name,
      gender: userData?.gender,
      college_id: userData?.college,
      year: userData?.year,
      city: userData?.city,
      events: selectedEvents.map((e) => e.id),
    }
    console.log(submissionData);
    axios.post("https://bits-apogee.org/2026/main/registrations/register/",
      submissionData
    ).then((res) => {
      console.log(res.data);
      redirectWithPost(
        "https://bits-apogee.org/2026/main/registrations/google-reg/",

        {
          token: res.data.tokens.access,
        },
      );
    }).catch((err) => {
      alert("Error in registration. Try Again. " + err.response.data.message);
      console.log(err);
    })
  }

  return (
    <div className={styles.eventsContainer}>
      <div
        className={`${styles.eventsSubContainer} ${activeEvent ? styles.hasActiveEvent : ""}`}
      >
        <div className={styles.headingCont}>
          <h3 className={styles.heading}>EVENTS</h3>
        </div>

        <div className={styles.eventsListCont}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="[SEARCH EVENTS]"
              value={search}
              ref={inputRef}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Search"
            >
              <path
                d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24333 20.6178 3.14667 18.52C1.05 16.4222 0.00111199 13.86 8.81834e-07 10.8333C-0.00111023 7.80667 1.04778 5.24444 3.14667 3.14667C5.24556 1.04889 7.80778 0 10.8333 0C13.8589 0 16.4217 1.04889 18.5217 3.14667C20.6217 5.24444 21.67 7.80667 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6878 17.6044 16.1467 16.1467C17.6056 14.6889 18.3344 12.9178 18.3333 10.8333C18.3322 8.74889 17.6033 6.97833 16.1467 5.52167C14.69 4.065 12.9189 3.33556 10.8333 3.33333C8.74778 3.33111 6.97722 4.06056 5.52167 5.52167C4.06611 6.98278 3.33667 8.75333 3.33333 10.8333C3.33 12.9133 4.05945 14.6844 5.52167 16.1467C6.98389 17.6089 8.75445 18.3378 10.8333 18.3333Z"
                fill="currentColor"
              />
            </svg>
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                setSearch("");
                inputRef.current?.focus();
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <ul className={styles.eventsList}>
            {filteredEvents.map((event) => (
              <li
                key={event.id}
                className={`${styles.eventItem} ${isSelected(event.id) ? styles.selectedEvent : ""}`}
                onClick={() => {
                  const currentSticky =
                    useRegistrationStore.getState().stickyEvent;
                  if (currentSticky?.id === event.id) {
                    useRegistrationStore.getState().setStickyEvent(null);
                    useRegistrationStore.getState().setActiveEvent(null);
                  } else {
                    setActiveEvent(event);
                    useRegistrationStore.getState().setStickyEvent(event);
                  }
                }}
              >
                <button>[{event.name}]</button>
                <span
                  className={styles.actionIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEvent(event);
                  }}
                >
                  {isSelected(event.id) ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L10 17L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    "+"
                  )}
                </span>
              </li>
            ))}
            {filteredEvents.length === 0 && (
              <li
                className={styles.eventItem}
                style={{ justifyContent: "center" }}
              >
                <button style={{ textAlign: "center" }}>
                  [NO EVENTS FOUND]
                </button>
              </li>
            )}
          </ul>

          <NavButton onClick={register} outerClass={styles.confirmButton} innerClass={styles.confirmButtonContent}>Register</NavButton>
        </div>
      </div>

      <div
        className={`${styles.mobileDetailsContainer} ${activeEvent ? styles.active : ""}`}
      >
        <h3 className={styles.mobileHeading}>EVENTS</h3>

        {activeEvent && (
          <div className={styles.detailsCard}>
            <button
              className={styles.mobileCloseButton}
              onClick={() => {
                setActiveEvent(null);
                useRegistrationStore.getState().setStickyEvent(null);
              }}
            >
              ✕
            </button>
            <div className={styles.eventNameHeader}>{activeEvent.name}</div>
            <div className={styles.mobileScrollContent}>
              {activeEvent.description}
            </div>
            <button
              className={`${styles.mobileAddButton} ${isSelected(activeEvent.id) ? styles.selected : ""}`}
              onClick={() => toggleEvent(activeEvent)}
            >
              {isSelected(activeEvent.id) ? "REMOVE" : "ADD"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
