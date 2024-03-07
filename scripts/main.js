import { BandsList } from "./bands.js";
import { BookingList } from "./bookings.js";
import { VenuesList } from "./venues.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${BookingList()}
</article>

<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${VenuesList()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${BandsList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

