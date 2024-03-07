import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "band") {

            let venueId = ""
            let nameOfVenue = "Hi"

            

            for (const booking of bookings) {
                if (clickTarget.dataset.id === booking.bandId) {
                    // return the venueId
                    venueId += booking.venueId
                    // then iterate through venues to match
                    for (const venue of venues) { 
                        if (venueId === venue.id) {
                            nameOfVenue += venue.name
                        }
                        
                    }
                }
            }
            

           window.alert(`${nameOfVenue}`)
        }
    }
)

export const BandsList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
        data-type="band"
        data-name="${band.name}"
        data-id="${band.id}"
        >${band.name}</li>`
    }

    html += "</ul>"

    return html
}