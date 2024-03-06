const database = {
    venues: [
        { id: 1, name: "Vegas", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 2, name: "Nashville", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 3, name: "New York City", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 4, name: "San Diego", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 5, name: "St. Paul", address: "", size: 1.1, maxOccupancy: 200 }
    ],
    bands: [
        { id: 1, name: "", memberNumber: 2, genre: "", founded: 2002 },
        { id: 2, name: "", memberNumber: 2, genre: "", founded: 2002 },
        { id: 3, name: "", memberNumber: 2, genre: "", founded: 2002 },
        { id: 4, name: "", memberNumber: 2, genre: "", founded: 2002 },
        { id: 5, name: "", memberNumber: 2, genre: "", founded: 2002 }
    ],
    bookings: [
        { id: 1, date: "12-11-23", bandId: [2, 3], venueId: 2 },
        { id: 2, date: "12-11-23", bandId: [2], venueId: 1 },
        { id: 3, date: "12-11-23", bandId: [1, 3], venueId: 2 },
        { id: 4, date: "12-11-23", bandId: [4], venueId: 4 },
        { id: 5, date: "12-11-23", bandId: [1, 3], venueId: 1 }
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}