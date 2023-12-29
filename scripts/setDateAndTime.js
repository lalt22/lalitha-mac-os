window.onload = function() {
    function updateDate() {
        var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]; 
        var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        var newDate = new Date();
        var dayIndex = newDate.getDay();
        var dateNum = newDate.getDate();
        var monthIndex = newDate.getMonth();
        var hour = newDate.getHours();
        var minute = newDate.getMinutes();
        
    
        document.getElementById("datetime").innerHTML = `${days[dayIndex]} ${dateNum} ${months[monthIndex]} ${hour}:${minute}`;
    
    }

    setInterval(updateDate, 1000);
}

