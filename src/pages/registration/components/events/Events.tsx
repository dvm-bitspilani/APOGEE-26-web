import { useState, useEffect } from "react";
// import axios from "axios";
import { useRegistrationStore, type Event } from "../../../../utils/store";
import styles from "./Events.module.scss";

// Dummy Data until API is ready
const DUMMY_EVENTS: Event[] = [
  {
    id: 1,
    name: "Event One",
    about:
      "Oasis, The Annual Cultural Extravaganza Of Birla Institute Of Technology And Science, Pilani, Has Been A Vibrant Part Of India's Cultural Tapestry Since 1971. Managed Entirely By Students, It's A Dazzling Showcase Of Talent In Dance, Drama, Literature, Comedy, Fashion, And Music.",
  },
  {
    id: 2,
    name: "Event Two",
    about: "Description for Event Two. A competitive coding marathon.",
  },
  {
    id: 3,
    name: "Event Three",
    about: "Description for Event Three. A robotics showcase.",
  },
  {
    id: 4,
    name: "Event Four",
    about: "Description for Event Four. Battle of the bands.",
  },
  {
    id: 5,
    name: "Event Five",
    about: "Description for Event Five. Fashion show.",
  },
  {
    id: 6,
    name: "Event Six",
    about: "Description for Event Six. Drama competition.",
  },
  {
    id: 7,
    name: "Event Seven",
    about: "Description for Event Seven. Debate tournament.",
  },
  {
    id: 8,
    name: "Event Eight",
    about: "Description for Event Eight. Quiz competition.",
  },
];

const Events = () => {
  const { events, setEvents, selectedEvents, toggleEvent, setActiveEvent } =
    useRegistrationStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate API call
    setEvents(DUMMY_EVENTS);
  }, [setEvents]);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()),
  );

  const isSelected = (id: number) => selectedEvents.some((e) => e.id === id);

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.headingCont}>
        {/* <img src="/svgs/registration/leftarr.svg" alt="left" /> */}
        <h3 className={styles.heading}>EVENTS</h3>
        {/* <img src="/svgs/registration/rightarr.svg" alt="right" /> */}
      </div>

      <div className={styles.eventsSubContainer}>
        <div className={styles.eventsListCont}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="SEARCH EVENTS"
              value={search}
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
                  {isSelected(event.id) ? "✓" : "+"}
                </span>
              </li>
            ))}
            {filteredEvents.length === 0 && (
              <li
                className={styles.eventItem}
                style={{ justifyContent: "center" }}
              >
                <button style={{ textAlign: "center" }}>NO EVENTS FOUND</button>
              </li>
            )}
          </ul>

          <button
            className={styles.confirmButton}
            onClick={() => console.log("Submit", selectedEvents)}
          >
            CONFIRM SELECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
