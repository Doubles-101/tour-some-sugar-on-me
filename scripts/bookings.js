import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "booking") {

            window.alert(
            `
            ${clickTarget.dataset.bandname}
            ${clickTarget.dataset.bandgenre}
            ${clickTarget.dataset.bandformed}
            ${clickTarget.dataset.bandmembers}
            `)
        }
    }
)

// Making an HTML list of all the bookings with band, venue, and date information
export const BookingList = () => {

    let html = "<ul>"
    

    // The large forof loop iterates through each booking
    for (const booking of bookings) {

        
        // This nested forof loop iterates through the bandIds and concats a string
        // Also stores the band information so we can store it in a data set
        let bandBookingHTML = ""
        let bandBookingName = ""
        let bandBookingGenre = ""
        let bandBookingFormed = ""
        let bandBookingBandMembers = ""
        for (const bandId of booking.bandId) {           
            for (const band of bands) {
                if (band.id === bandId) {
                    bandBookingHTML += `and ${band.name} `
                    bandBookingName += `, ${band.name}`
                    bandBookingGenre += `, ${band.genre}`
                    bandBookingFormed += `, Formed in ${band.founded}`
                    bandBookingBandMembers += `, ${band.memberNumber} band members`
                }
            }
        }



        // This nested forof loop iterates through the venueIds and concats a string of bands, venues, and bookingdates in a li
        // We are also storing the band information into the li. So we can later click and get their info
        for (const venue of venues) {
            if (booking.venueId === venue.id)
            html += `<li
            data-type="booking"
            data-bandname="${bandBookingName.slice(2)}"
            data-bandgenre="${bandBookingGenre.slice(2)}"
            data-bandformed="${bandBookingFormed.slice(2)}"
            data-bandmembers="${bandBookingBandMembers.slice(2)}"
            >
            ${bandBookingHTML.slice(4)} are playing at ${venue.name} on ${booking.date}
            </li>`
            
        }
    }

    html += "</ul>"

    return html
}