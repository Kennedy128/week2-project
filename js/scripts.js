function myfunction() {
    var year = document.getElementById("yearborn").value;
    var ccentury = parseInt(year.slice(0, 2));
    var yyear = parseInt(year.slice(2, 4));
    var mmonth = parseint(document.getElementById("monthborn").value);
    if (mmonth <= 0 || mmonth > 12) {
        alert("the month entered does not apply,must be between 1 and 12");
    }
    var dday = parseInt(document.getElementById("dayborn").value);
    if (dday <= 0 || dday > 31) {
        alert("the date entered does not apply,must be between 1 and 31");

    }
    var gender = document.getElementById("gendertype").value;

    var male = ["Kwasi", "Kwaduo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayOfTheWeek = parseInt((( ( (ccentury / 4) - 2*ccentury - 1) + ((5 * yyear / 4) ) + ((26 * (mmonth + 1)/10)) + dday) % 7));

    if (gender === "female") {

        document.getElementById("dayborn").innerText = days[dayOfTheWeek];
        document.getElementById("name").innerText = female[dayOfTheWeek];
    }
    else {
        document.getElementById("dayborn").innerText = days[dayOfTheWeek];
        document.getElementById("name").innerText = male[dayOfTheWeek];
    }

}










