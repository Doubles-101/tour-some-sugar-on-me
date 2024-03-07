import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()


export const BookingList = () => {

    let html = "<ul>"
    

    // The large forof loop iterates through each booking
    for (const booking of bookings) {

        
        // This nested forof loop iterates through the bandIds and concats a string
        let bandBookingHTML = ""
        for (const bandId of booking.bandId) {           
            for (const band of bands) {
                if (band.id === bandId) {
                    bandBookingHTML += `and ${band.name} `
                }
            }
        }



        // This nested forof loop iterates through the venueIds and concats a string of bands, venues, and bookingdates in a li
        for (const venue of venues) {
            if (booking.venueId === venue.id)
            html += `<li>
            ${bandBookingHTML.slice(4)} are playing at the ${venue.name} on ${booking.date}
            </li>`
            
        }
    }

    html += "</ul>"

    return html
}