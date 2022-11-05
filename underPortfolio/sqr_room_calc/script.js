function calcSqr() {
    console.log("submit");
    //Variables
    let roomLength = document.getElementById("length").value;
    let roomWidth = document.getElementById("width").value;
    let sqrMeterRoomArea;


    //Calc square metres
    sqrMeterRoomArea = roomLength * roomWidth;

    //Show result
    // document.getElementById("result").innerHTML =
    //     "Your room area is  " +
    //     sqrMeterRoomArea +
    //     "m<sup>2</sup>.";
    document.getElementById("result").innerHTML =
        `Your room area is ${sqrMeterRoomArea} m<sup>2</sup>.`
};


function myReset() {
    // window.location.reload();
    document.getElementById("form").reset();
    document.getElementById("result").innerHTML = "";
    console.log("reset");
};