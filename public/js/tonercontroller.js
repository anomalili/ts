import Assync from "./assync.js";
/*class TonerController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const assync = new Assync(token);

        $("#status").on("click", () => {
            $("#datacontent").html("");

            let api0 = "xerox0";
            let api1 = "xerox1";
            let api2 = "hp2";
            let api3 = "hp3";

            assync.dataIn(api0, (data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    this.xerox0(data);
                } else {
                    $("#x0").html("Nincs elérhető adat.");
                }
            });
            assync.dataIn(api1, (data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    this.xerox1(data);
                } else {
                    $("#x1").html("Nincs elérhető adat.");
                }
            });
            assync.dataIn(api2, (data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    this.hp2(data);
                } else {
                    $("#hp2").html("Nincs elérhető adat.");
                }
            });
            assync.dataIn(api3, (data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    this.hp3(data);
                } else {
                    $("#hp3").html("Nincs elérhető adat.");
                }
            });
        });
    }

    xerox0(data) {
        // Táblázat létrehozása
        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Szín</th>
                        <th>Szám</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adatok hozzáadása a táblázathoz

        data.forEach((item) => {
            let color = "";
            if (item.color == 1) {
                color = "kék";
            } else if (item.color == 2) {
                color = "cián";
            } else if (item.color == 3) {
                color = "sárga";
            } else if (item.color == 4) {
                color = "fekete";
            }
             else if (item.color == 5) {
                color = "hulladéktartály";
            }

            tableHtml += `
                <tr>
                    <td>${color}</td>
                    <td>${item.count}</td>
                </tr>
            `;
        });

        // Táblázat lezárása
        tableHtml += `
                </tbody>
            </table>
        `;

        $("#x0").html(tableHtml);
    }
    xerox1(data) {
        // Táblázat létrehozása
        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adatok hozzáadása a táblázathoz
        data.forEach((item) => {



            tableHtml += `
                <tr>
                    <td>${item.color}</td>
                    <td>${item.count}</td>
                </tr>
            `;
        });

        // Táblázat lezárása
        tableHtml += `
                </tbody>
            </table>
        `;

        // Táblázat beillesztése az oldalra
        $("#x1").html(tableHtml);
    }
    hp2(data) {
        // Táblázat létrehozása
        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adatok hozzáadása a táblázathoz
        data.forEach((item) => {
            tableHtml += `
                <tr>
                    <td>${item.color}</td>
                    <td>${item.count}</td>
                </tr>
            `;
        });

        // Táblázat lezárása
        tableHtml += `
                </tbody>
            </table>
        `;

        // Táblázat beillesztése az oldalra
        $("#hp2").html(tableHtml);
    }
    hp3(data) {
        // Táblázat létrehozása
        let tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adatok hozzáadása a táblázathoz
        data.forEach((item) => {
            tableHtml += `
                <tr>
                    <td>${item.color}</td>
                    <td>${item.count}</td>
                </tr>
            `;
        });

        // Táblázat lezárása
        tableHtml += `
                </tbody>
            </table>
        `;

        // Táblázat beillesztése az oldalra
        $("#hp3").html(tableHtml);
    }
}

export default TonerController;
 */

class TonerController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const assync = new Assync(token);

        // Végpontok és célok definiálása
        const endpoints = [
            { endpoint: "xerox0", target: "#x0" },
            { endpoint: "xerox1", target: "#x1" },
            { endpoint: "hp2", target: "#hp2" },
            { endpoint: "hp3", target: "#hp3" },
        ];

        // Az összes végponton végigmenni
        endpoints.forEach(({ endpoint, target }) => {
            // Kattintás esemény hozzáadása

            $(target).html(""); // Törlés az előző tartalmakat

            // Adatok lekérése
            assync.dataIn(endpoint, (data) => {
                // Ellenőrzés, hogy van-e adat
                if (data && Array.isArray(data) && data.length > 0) {
                    // Táblázat generálása és megjelenítése a célon
                    this.generateTable(data, target);
                } else {
                    // Ha nincs adat, megjeleníthetsz egy üzenetet vagy kezelheted másként
                    $(target).html("Nincs elérhető adat.");
                }
            });
        });
    }

    // Általános metódus a táblázat generálásához és megjelenítéséhez
    generateTable(data, target) {
        // Táblázat létrehozása

        let tableHtml = `
            <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="row">Szín</th>
                        <th scope="row">Darab</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adatok hozzáadása a táblázathoz
        data.forEach((item) => {
            let color = "";
            if (item.color === 1) {
                color = "Fekete";
            } else if (item.color === 2) {
                color = "Magenta";
            } else if (item.color === 3) {
                color = "Cián";
            } else if (item.color === 4) {
                color = "Sárga";
            } else if (item.color === 5) {
                color = "Hulladéktartály";
            }

            tableHtml += `
                <tr>
                    
                    <td>${color}</td>
                    <td>${item.count}</td>
                </tr>
            `;
        });

        // Táblázat lezárása
        tableHtml += `
                </tbody>
            </table>
        `;

        // Táblázat beillesztése a célon
        $(target).html(tableHtml);
    }
}

export default TonerController;
