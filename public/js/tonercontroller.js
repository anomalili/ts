import Assync from "./assync.js";
import TonerViews from "./tonerviews.js";

class TonerController{

    constructor(){

        const token = $('meta[name="csrf-token"]').attr("content");
        const assync = new Assync(token);
        $("#status").on("click", () => {
            $("#datacontent").html("");

            let api0 ="xerox0"
            assync.dataIn(api0, this.show);
        })


    }
    
    showdata(data){
        new TonerViews(data, $("#datacontent"));
    }

    show = (data) => {
        new TonerViews(data, $("#queryDiv"));
    }
}

export default TonerController;