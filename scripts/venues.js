import { getBookings, getVenues, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "venue") {

            window.alert(`${clickTarget.dataset.bandsbooked}`)
        }
    }
)


// Making an HTML list of venues
export const VenuesList = () => {
    let html = "<ul>"

    // Making a list for each venue
    for (const venue of venues) {
        let bandsBooked = ""
        // Go through each booking and look for a venue.id match with booking.venueId
        for (const booking of bookings) {
            if (venue.id === booking.venueId) {
                // Iterate through the booking.bandId array
                for (const bookingBandId of booking.bandId) {
                    // Iterate through the bands to see if their Id matches the ones in the booking.bandId array
                    for (const band of bands) {
                        if (band.id === bookingBandId) {
                            bandsBooked += `, ${band.name}`
                        }   
                    }
                    
                }
            }
            
        }
        html += `<li
        data-type="venue"
        data-bandsbooked="${bandsBooked.slice(2)}"
        >${venue.name}</li>`
    }

    html += "</ul>"

    return html
}
