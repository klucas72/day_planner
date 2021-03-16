$(document).ready(function() {
    //setting up date and time for today's date
    var now = moment().format('MMMM do YYYY');
});

//     var $dateheading = $('navbar-subtitle');
//     $dateheading.text(now);

//     var saveBtn = "./images/floppy-disk-svgrepo-com.svg"

//     //getting events from local storage
//     var storedEvents = JSON.parse(localStorage.getItem('storedEvents'));

//     if (storedEvents !== null){
//         planText = storedEvents;
//     } else {
//         planText = new Array(9);
//     }

//     //setting planning container
//     var $plannerDiv = $('plannerContainer');
//     $plannerDiv.empty();

// //build rows and time boxes
//     for (var hour = 9; hour <=17; hour++){
//         var index = hour - 9;

//         var $rowDiv = $('<div>');
//         $rowDiv.addClass('row');
//         $rowDiv.addClass('plannerRow');
//         $rowDiv.attr('hour-index', hour);

//         var $col2timeDiv = $('<div>');
//         $col2timeDiv.addClass('col-md-2');

//         var $timeBoxSpan = $('<span>');
//         $timeBoxSpan.attr('class', 'timeBox');

//         var displayHour = 0;
//         var ampm = "";
//         if (hour > 12){
//         displayHour = hour - 12;
//             ampm = "pm";
//         } else {
//         displayHour = hour;
//             ampm = "am";
//         };

//     //timebox with time
//     $timeBoxSpan.text('${displayHour} ${ampm}');

//     $rowDiv.append($col2timeDiv);
//     $col2timeDiv.append($timeBoxSpan);

//     var $dailyPlan = $('<input>');

//     $dailyPlan.attr('id', 'input-${index}');
//     $dailyPlan.attr('hour-index', index);
//     $dailyPlan.attr('type', 'text');
//     $dailyPlan.attr('class', 'dailyPlan');

//     $dailyPlan.val(planText[index]);

//     var $col9InputDiv = $('<div>');
//     $col9InputDiv.addClass('col-md-9');

//     $rowDiv.append($col9InputDiv);
//     $col9InputDiv.append($dailyPlan);

//     $colSaveDiv = $('<div>');
//     $colSaveDiv.addClass('col-md-1');

//     var $saveBtn = $('<i>');
//     $saveBtn.attr('id', 'saveid-$(index)');
//     $saveBtn.attr('save-id', index);
//     $saveBtn.attr('class', "far fa-save saveBtn");

//     $rowDiv.append($colSaveDiv);
//     $colSaveDiv.append($saveBtn);

//     updateRowColor($rowDiv, hour);

//     $plannerDiv.append($rowDiv);
//     };





// });
