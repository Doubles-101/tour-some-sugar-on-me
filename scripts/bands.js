import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "band") {

           window.alert(`${clickTarget.dataset.name} is playing at ${clickTarget.dataset.venueid}`)
        }
    }
)


// Creating a list of the bands in html
export const BandsList = () => {
    let html = "<ul>"

    // We iterate for each band and make a list
    for (const band of bands) {
        let bandVenue = ""
        // We need to know the venue the band is playing at, so first we iterate through bookings
        for (const booking of bookings) {
            // Then through each bandId in the array of bookings.bandId
            for (const bookingBandId of booking.bandId) {
                if (bookingBandId === band.id) {
                    // Finally the venue that is attach to the booking/band
                    for (const venue of venues) {
                        if (venue.id === booking.venueId) {
                            bandVenue += `, ${venue.name}`
                        } 
                    }
                }
            }
        }
        // make sure we have proper data tags so we can refer properly in the "click" event
        html += `<li
        data-type="band"
        data-name="${band.name}"
        data-venueid="${bandVenue.slice(2)}"
        >${band.name}</li>`
    }

    html += "</ul>"

    return html
}
