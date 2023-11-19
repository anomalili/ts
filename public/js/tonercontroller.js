import Assync from "./assync.js";

class TonerController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const assync = new Assync(token);

        const endpoints = [
            { endpoint: "xerox0", target: "#x0" },
            { endpoint: "xerox1", target: "#x1" },
            { endpoint: "hp2", target: "#hp2" },
            { endpoint: "hp3", target: "#hp3" },
        ];

       
        endpoints.forEach(({ endpoint, target }) => {
     

            $(target).html(""); 

           
            assync.dataIn(endpoint, (data) => {
                
                if (data && Array.isArray(data) && data.length > 0) {
                    this.generateTable(data, target);
                } else {
                    $(target).html("Nincs elérhető adat.");
                }
            });
        });
    }

    generateTable(data, target) {

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

        tableHtml += `
                </tbody>
            </table>
        `;

        $(target).html(tableHtml);
    }
}

export default TonerController;
