import { getVenues } from "./database.js";

const venues = getVenues()

export const VenuesList = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li
        >${venue.name}</li>`
    }

    html += "</ul>"

    return html
}