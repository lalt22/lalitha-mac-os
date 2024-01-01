window.onload = function() {
    function updateDate() {
        var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]; 
        var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        var newDate = new Date();
        var dayIndex = newDate.getDay();
        var dateNum = newDate.getDate();
        var monthIndex = newDate.getMonth();
        var hour = newDate.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        
        var minute = newDate.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        
    
        document.getElementById("datetime").innerHTML = `${days[dayIndex]} ${dateNum} ${months[monthIndex]} ${hour}:${minute}`;
    }

    setInterval(updateDate, 1000);
}

