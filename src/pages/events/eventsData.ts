import type { EventData } from "./eventsItem/EventsItem";

const dummyDesc = "BITS Pilani, India is back with the 43rd edition of APOGEE (A Professions Oriented Gathering over Educational Experiences), the institute's annual technical extravaganza, from 28th March to 31st this March 2025.";
const dummyLoc = "LTC 5106";
const dummyTime = "2nd April, 6-8 pm";
const dummyPhone = "Madhur Jain: 9381337967";

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
    "E SUMMIT": [
        { name: "STARTUP PITCH", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
    "GAMES & QUIZ": [
        { name: "TECH QUIZ", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
        { name: "GAMING NIGHT", description: dummyDesc, location: dummyLoc, time: dummyTime, phone: dummyPhone, unstop_url: "" },
    ],
};
