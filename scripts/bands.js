import { getBands } from "./database.js";

const bands = getBands()

export const BandsList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
        data-type="employee"
        data-name="${band.name}"
        data-id="${band.id}"
        >${band.name}</li>`
    }

    html += "</ul>"

    return html
}