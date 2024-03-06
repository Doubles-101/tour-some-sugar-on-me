import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const venues = getVenues()

export const BookingList = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        for (const venue of venues) {
            if (booking.venueId === venue.id)
            html += `<li>
            ${venue.name} are playing at the ${venue.name}
            </li>`
            
        }
    }

    html += "</ul>"

    return html
}