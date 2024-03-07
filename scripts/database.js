const database = {
    venues: [
        { id: 1, name: "Las Vegas", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 2, name: "Nashville", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 3, name: "New York City", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 4, name: "San Diego", address: "", size: 1.1, maxOccupancy: 200 },
        { id: 5, name: "St. Paul", address: "", size: 1.1, maxOccupancy: 200 }
    ],
    bands: [
        { id: 1, name: "Toe Jam", memberNumber: 2, genre: "Dad Rock", founded: 2002 },
        { id: 2, name: "SSSTANK", memberNumber: 4, genre: "Classical", founded: 2005 },
        { id: 3, name: "Marley", memberNumber: 1, genre: "Pop", founded: 2020 },
        { id: 4, name: "Bucket Heads", memberNumber: 10, genre: "New Age Pop", founded: 2012 },
        { id: 5, name: "Trash Punk", memberNumber: 2, genre: "EDM", founded: 1996 }
    ],
    bookings: [
        { id: 1, date: "12-11-23", bandId: [2, 3], venueId: 2 },
        { id: 2, date: "12-11-23", bandId: [2], venueId: 1 },
        { id: 3, date: "12-11-23", bandId: [1, 5], venueId: 4 },
        { id: 4, date: "12-11-23", bandId: [4], venueId: 5 },
        { id: 5, date: "12-11-23", bandId: [1, 3], venueId: 3 }
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