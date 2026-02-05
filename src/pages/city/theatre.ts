import { getProject } from "@theatre/core";

// Initialize project and sheet
const project = getProject("APOGEE 26");
const sheet = project.sheet("Cyber City");

export { project, sheet };
