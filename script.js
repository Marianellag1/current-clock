function currentTime() {
    //creating an instance of the Date obj.- g for g
    const today = new Date(); //When called as a constructor(constant), returns a new Date obj. - mdn web docs
    let hours = today.getHours(); //method that returns the hour for a specific date, according to local time.- mdn web docs
    let minute = today.getMinutes(); // method that returns minutes
    let seconds = today.getSeconds(); // method that returns seconds
    let meridiem = "AM"; //what m means, crossing the meridiem
    if (hours == 0) {
        //looking if 'is equal to' 0
        hours = 12;
        //telling the system what hours will be.
    }
    if (hours > 12) {
        hours = hours - 12;
        //its a loop!!! Once the 12th hour comes, it will be sub. by 12, starting the process until 12!!
        meridiem = "PM";
    }

    //condition statement: (condition ? if true : if false)
    hours = (hours < 10) ? "0" + hours : hours; //instead of being displayed as single, it will be displayed as double digit =>
    minute = (minute < 10) ? "0" + minute : minute; // => as long as it is less than 10
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    //another resource: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_comparison

    let time = hours + ":" + minute + ":" + seconds + " " + meridiem;
    // " " is the space between seconds and the meridiem. 
    //concatination(?) is used to connect all 

    document.getElementById('clock').innerHTML = time;
    //either innerHTML and innerText both can pass through to html div.
    let update = setTimeout(function () { currentTime() }, 1000);
    //1000ms to a second.

}

currentTime();