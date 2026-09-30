import { DUMMY_EVENTS } from "../pages/events/eventsData";
export const demoEvents = Object.values(DUMMY_EVENTS).flat().map((event,index)=>({id:index+1,name:event.name,description:event.description}));
export const demoColleges = [{id:"1",name:"BITS Pilani (sample)"},{id:"2",name:"Sample College"}];
export const sampleIdentity={name:"Demo Visitor",email:"visitor@example.com",phone:"9999999999",gender:"Other",college:"1",year:"2",state:"Rajasthan",city:"Pilani"};
export function confirmDemo(ids:number[]){ if(!ids.length)return "Select at least one sample event."; if(ids.some(id=>!demoEvents.some(e=>e.id===id)))return "Select a valid sample event."; return `Demo confirmed: ${ids.length} sample event(s). Nothing was sent, booked, charged or emailed. Refresh to reset.`; }
