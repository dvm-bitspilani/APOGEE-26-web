import type { EventData } from "./eventsItem/EventsItem";

const dummyDesc = "Sample event for this portfolio demo. The original event API is unavailable; this is not a confirmed 2026 schedule.";
const dummyLoc = "Sample venue";
const dummyTime = "Sample schedule";
const dummyPhone = "Not available in archive";

export const DUMMY_EVENTS: Record<string, EventData[]> = {
    "CODING": [
        { name: "HACKATHON", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
        { name: "CODE WARS", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "KERNEL": [
        { name: "EVENT NAME", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
        { name: "PROJECT SHOWCASE", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "EXHIBITIONS": [
        { name: "TECH EXPO", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
        { name: "AUTO EXPO", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "COMPETITIONS": [
        { name: "ROBO WARS", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "ART & CINEMA": [
        { name: "SHORT FILM FEST", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "MISCELLANEOUS": [
        { name: "TREASURE HUNT", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "TALKS & WORKSHOPS": [
        { name: "STARTUP PITCH", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "GAMES & QUIZ": [
        { name: "TECH QUIZ", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
        { name: "GAMING NIGHT", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
};
