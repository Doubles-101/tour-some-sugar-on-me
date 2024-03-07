import { getVenues } from "./database.js";

const venues = getVenues()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "venue") {
            


            window.alert("venue ayyyy")
        }
    }
)


export const VenuesList = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li
        data-type="venue"
        >${venue.name}</li>`
    }

    html += "</ul>"

    return html
}