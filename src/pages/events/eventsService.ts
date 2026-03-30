import axios from "axios";
import type { EventData } from "./eventsItem/EventsItem";

const API_URL = "https://bits-apogee.org/2026/main/registrations/web_events/";

export interface ApiEvent {
    id: number;
    name: string;
    description: string;
    unstop_url: string;
    venue: string;
    contact: string;
    time: string;
    category_name: string;
}

const CATEGORY_MAPPING: Record<string, string> = {
    "STALL EVENTS": "STALLS",
    "TALKS & WORKSHOP": "TALKS & WORKSHOPS",
    "ARTS & CINEMA": "ART & CINEMA",
    "GAMES & QUIZ": "GAMES & QUIZ",
    "MISCELLANEOUS": "MISCELLANEOUS",
};

export const fetchEvents = async (): Promise<Record<string, EventData[]>> => {
    try {
        const response = await axios.get<ApiEvent[]>(API_URL);
        const data = response.data;
        console.log(data);

        const groupedEvents: Record<string, EventData[]> = {};

        data.forEach((event) => {
            // Normalize backend names to match frontend EVENT_CATEGORIES
            const backendCategory = (event.category_name || "").trim().toUpperCase().replace(" AND ", " & ");
            let category = backendCategory;

            if (CATEGORY_MAPPING[category]) {
                category = CATEGORY_MAPPING[category];
            }

            if (!groupedEvents[category]) {
                groupedEvents[category] = [];
            }

            groupedEvents[category].push({
                name: event.name,
                description: event.description,
                location: event.venue || "TBA",
                time: event.time || "TBA",
                phone: event.contact || "TBA",
                unstop_url: event.unstop_url,
            });
        });
        console.log("Standardized groupedEvents:", groupedEvents);

        return groupedEvents;
    } catch (error) {
        console.error("Error fetching events:", error);
        return {};
    }
};
