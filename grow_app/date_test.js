const dateInput  = document.getElementById('date');
const go = document.getElementById('go');
const days = document.getElementById('days');


// }

go.addEventListener('click', function ()  {
    console.log(dateInput.value);

    var deadline = new Date(dateInput.value);
    deadline.setDate(deadline.getDate()+14);
    console.log(deadline);

    var todayDate = new Date();

    var ms_left=  deadline - todayDate;
    console.log(daysLeft);

    var diffDays = ms_left / (1000 * 60 * 60 * 24);
    
    var daysLeft = Math.round(diffDays);
    console.log(daysLeft);

    days.innerHTML = daysLeft;


})

