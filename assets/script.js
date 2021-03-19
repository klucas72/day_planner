$(document).ready(function() {
    //setting up date and time for today's date
    var now = moment().format('MMMM Do YYYY');
    
    var $dateHeading = $('#navbar-subtitle');
    $dateHeading.text(now);

    
    //create variables of each time frame
    var $text9am = $("#text9AM");
    var $text10am = $("#text10AM");
    var $text11am = $("#text11AM");
    var $text12pm = $("#text12PM");
    var $text1pm = $("#text1PM");
    var $text2pm = $("#text2PM");
    var $text3pm = $("#text3PM");
    var $text4pm = $("#text4PM");
    var $text5pm = $("#text5PM");
    
    //changing the colors of the schedule block
    
    $("textarea").each(function() {
        var currentTime = parseInt(moment().format("HH"));
        var name = parseInt($(this).attr("name"));
        if (name < currentTime) {
            $(this).css("background-color", "gray");
        }

        if (name > currentTime) {
            $(this).css("background-color", "green");
        }

        if(name === currentTime) {
            $(this).css("background-color", "red");
        }
    })
//setting local storage
$("button").on("click", function() {
    localStorage.setItem("9AM", ($text9am.val()));
    localStorage.setItem("10AM", ($text10am.val()));
    localStorage.setItem("11AM", ($text11am.val()));
    localStorage.setItem("12PM", ($text12pm.val()));
    localStorage.setItem("1PM", ($text1pm.val()));
    localStorage.setItem("2PM", ($text2pm.val()));
    localStorage.setItem("3PM", ($text3pm.val()));
    localStorage.setItem("4PM", ($text4pm.val()));
    localStorage.setItem("5PM", ($text5pm.val()));
});

//recovering localstorage
$("#text9AM").append(localStorage.getItem("9AM"));
$("#text10AM").append(localStorage.getItem("10AM"));
$("#text11AM").append(localStorage.getItem("11AM"));
$("#text12PM").append(localStorage.getItem("12PM"));
$("#text1PM").append(localStorage.getItem("1PM"));
$("#text2PM").append(localStorage.getItem("2PM"));
$("#text3PM").append(localStorage.getItem("3PM"));
$("#text4PM").append(localStorage.getItem("4PM"));
$("#text5PM").append(localStorage.getItem("5PM"));
});
