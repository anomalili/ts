class Assync {
    constructor(token) {
        this.token = token;
    }
    dataIn(api, myCallBack) {
        console.log(api);
        fetch(api, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                myCallBack(data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    dataNew(api, data) {
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Új data" + data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    dataUpdate(api, data) {
        console.log(data);
        console.log("MÓDOSÍT" + api);
        fetch(api, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((error) => {
                console.error("Error", error);
            });
    }
    dataDelete(api) {
        console.log(api);
        fetch(api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                console.log("Error:", error);
            });
    }


    
        
}

export default Assync;