import { BandsList } from "./bands.js";
import { BookingList } from "./bookings.js";
import { VenuesList } from "./venues.js";


document.getElementById("container").innerHTML = BookingList() + BandsList() + VenuesList()