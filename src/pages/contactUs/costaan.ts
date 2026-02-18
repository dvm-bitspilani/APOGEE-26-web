// import sample from "/img/contacts/sample.png"
import pcra from "/img/contacts/Anagha_Sharma_PCrA.png"
import dvm from "/img/contacts/Atharv_Agarwal_-_Department_of_Visual_Media.png"
import controls from "/img/contacts/Shreyak_Shintre_-_Controls.png"
import adp from "/img/contacts/Aurvind_Mohanty_Art_Design___Publicity.png"
import pep from "/img/contacts/Ishita_Sethi_Department_of_Paper_Evaluation_and_Presentation.png"
import spons from "/img/contacts/Shivansh_Rastogi_-_Department_of_Sponsorship___Marketing.png"
import recn from "/img/contacts/Shreya_Karnwal_RecNAcc.png"
import aditya from "/img/contacts/aditya.png"
import sajal from "/img/contacts/sajal.png"

interface Contact {
    name: string;
    dept: string;
    phone: string;
    email: string;
    photo: string;
}

const costaans: Contact[] = [
    {
        name: "Atharv Agarwal",
        dept: "Website, App and Payments",
        phone: "+91 9876543210",
        email: "webmaster@bits-apogee.org",
        // photo: sample,
        photo: dvm,
    },
    {
        name: "Anagha Sharma",
        dept: "Registrations and Correspondence",
        phone: "+91 9876543210",
        email: "recnacc@bits-apogee.org",
        // photo: sample,
        photo: pcra,
    },
    {
        name: "Shreyak Shintre",
        dept: "Logistics and Operations",
        phone: "+91 9876543210",
        email: "controls@bits-apogee.org",
        // photo: sample,
        photo: controls,
    },
    {
        name: "Shivansh Rastogi",
        dept: "Sponsorships and Company Collaborations",
        phone: "+91 9876543210",
        email: "shivansh@bits-apogee.org",
        // photo: sample,
        photo: spons,
    },
    {
        name: "Shreya Karnwal",
        dept: "Reception and Accommodation",
        phone: "+91 9876543210",
        email: "recnacc@bits-apogee.org",
        // photo: sample,
        photo: recn,
    },
    {
        name: "Aurvind Mohanty",
        dept: "Online Collaborations and Publicity",
        phone: "+91 9876543210",
        email: "adp@bits-apogee.org",
        // photo: sample,
        photo: adp,
    },
    {
        name: "Ishita Sethi",
        dept: "Guest Lectures and Paper Presentation",
        phone: "+91 9876543210",
        email: "pep@bits-apogee.org",
        // photo: sample,
        photo: pep,
    },
    {
        name: "Aditya Khandelwal",
        dept: "General Secretary, Students' Union",
        phone: "+91 9876543210",
        email: "gensec@pilani.bits-pilani.ac.in",
        photo: aditya,
        // photo: sample,
    },
    {
        name: "Sajal Yadav",
        dept: "President, Students' Union",
        phone: "+91 9876543210",
        email: "president@pilani.bits-pilani.ac.in",
        photo: sajal,
    },
]

export default costaans;

export type { Contact };