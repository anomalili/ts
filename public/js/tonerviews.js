class TonerView {
    constructor(elem, parent) {
        let printer = "";
        let color = "";

        if (elem.toners.length > 0) {
            const firstToner = elem.toners[0]; // Vegyük az első tonert a színek ellenőrzéséhez

            if (firstToner.color == 1) {
                color = "magenta";
            } else if (firstToner.color == 2) {
                color = "cián";
            } else if (firstToner.color == 3) {
                color = "sárga";
            } else if (firstToner.color == 4) {
                color = "fekete";
            }

            if (firstToner.printerType == 1) {
                printer = "xerox régi";
            } else if (firstToner.printerType == 2) {
                printer = "xerox új";
            } else if (firstToner.printerType == 3) {
                printer = "hp 1";
            } else if (firstToner.printerType == 4) {
                printer = "hp 2";
            }
        }

        // Létrehozzuk az objektum tartalmának HTML struktúráját
        const rowHtml = `
            <tr>
                <td>${printer || 'N/A'}</td>
                <td>${color || 'N/A'}</td>
                <td>${elem.toners.length}</td>
            </tr>
        `;

        // Kiírjuk az objektumot a parent táblázatba
        parent.append(rowHtml);
    }
}

class TonerViews {
    #element;

    constructor(element, parent) {
        this.#element = element;
        parent.html("");
        parent.append(`
            <table>
                <thead>
                    <tr>
                        <th>Nyomtató</th>
                        <th>Szín</th>
                        <th>Szám</th>
                    </tr>
                </thead>
                <tbody id="toner-container"></tbody>
            </table>
        `);

        const parentElement = $("#toner-container");

        if (Array.isArray(element)) {
            element.forEach(elem => {
                new TonerView(elem, parentElement);
            });
        }
    }
}

export default TonerViews;
