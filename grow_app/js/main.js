
const selectplant = document.getElementById('selectplant');
const whitecircle = document.getElementById('whitecircle').classList;
const choose_plant = document.getElementById('choose_plant');
const blob = document.getElementById('blob');
const plant_bg_class = document.getElementById('plant_bg').classList;
const chosen_plant = document.getElementById('chosen_plant');
const progress_circle_class = document.getElementById('progress_circle').classList;
const move_circle_class = document.getElementById('move_circle').classList;
const chosen_plant_name = document.getElementById('chosen_plant_name');
const backbutton = document.getElementById('backbutton');



    

function fillup_bg() {
    if (whitecircle.contains("white_circle")) {

        whitecircle.remove('white_circle');
        whitecircle.add('whitebackground');
        
        blob.style.opacity = "0";
        blob.style.transition = "all 0.3s ease-in-out";

        setTimeout(() => {choose_plant.style.display = "none";}, 1000);
        choose_plant.style.opacity = "0";
        plant_bg_class.remove('plant_bg');
        plant_bg_class.add('plant_bg_appear')

        backbutton.style.opacity = "1";
        chosen_plant.style.opacity = "1";
        chosen_plant.style.transform = "translateY(0px)"
        chosen_plant.style.transition = "all 2s ease-in-out 1.2s"

        // progress_circle_class.remove('progress_circle_before');
        // progress_circle_class.add('progress_circle')

        move_circle_class.remove('main_circle');
        move_circle_class.add('main_circle_after')

        chosen_plant_name.style.opacity = "1";

        waterNow.style.display = "none";

    }
}

selectplant.addEventListener('click', () => {
    fillup_bg(); //to make white ball expand
}); 


function remove_bg() {
    if (whitecircle.contains("whitebackground")) {

        whitecircle.remove('whitebackground');
        whitecircle.add('white_circle');
        
        blob.style.opacity = "1";
        blob.style.transition = "all 1s ease-in-out 1s";

        choose_plant.style.display = "block";
        choose_plant.style.opacity = "1";
        plant_bg_class.remove('plant_bg_appear');
        plant_bg_class.add('plant_bg')

        backbutton.style.opacity = "0";
        backbutton.style.transition = "all 1s ease-in-out";
        chosen_plant.style.opacity = "0";
        chosen_plant.style.transform = "translateY(100px)"
        chosen_plant.style.transition = "all 0.3s ease-in-out"


        move_circle_class.remove('main_circle_after');
        move_circle_class.add('main_circle')

        chosen_plant_name.style.opacity = "0";
        chosen_plant_name.style.transition = "all 1s ease-in-out";

        waterNow.style.display = "none";


    }
}

backbutton.addEventListener('click', () => {
    remove_bg(); //to go back to homepage and white ball shrink
})



const dateInput  = document.getElementById('date');
const go = document.getElementById('go');
const daysContainer = document.getElementById('days');
const days = document.getElementById('daysLeft');
const dateContainer = document.getElementById('dateContainer');
const date_prompt = document.getElementById('date_prompt');
const resetbutton = document.getElementById('resetbutton');
console.log(dateInput.value);
const waterNow = document.getElementById('waterNow');
const removebutton = document.getElementById('removebutton');


var daysLeft = localStorage.dys_daysLeft; 

const circumference = 590.62
const circle = document.querySelector('.circle');

function setProgress(day) {
    const offset = day / 14 * circumference;
    circle.style.strokeDashoffset = offset;
}




go.addEventListener('click', function ()  {
    console.log('hello');
    console.log(dateInput.value);

    var deadline = new Date(dateInput.value);
    deadline.setDate(deadline.getDate()+14);
    console.log(deadline);

    var todayDate = new Date();
    console.log(todayDate);

    var ms_left=  deadline - todayDate;
    console.log(ms_left);


    var diffDays = ms_left / (1000 * 60 * 60 * 24);
    console.log(diffDays);
    
    daysLeft = Math.round(diffDays);

    localStorage.dys_daysLeft = daysLeft;
    console.log(daysLeft);

    dateContainer.style.display = 'none';
    daysContainer.style.display = 'block';
    days.innerHTML = daysLeft;

    date_prompt.style.display = 'none';
    resetbutton.style.display = 'block';
    circle.style.stroke = "#FFD5BF";

    waterNow.style.display = "none";

    setProgress(daysLeft);

    removebutton.style.display = "block";

})



removebutton.addEventListener('click', () => {
    
    removed = --daysLeft;
    console.log("daysLeft = " + removed);
    
    if (removed > 0) {
        console.log(removed);
        days.innerHTML = removed;
        setProgress(removed); 
        circle.style.stroke = "#FFD5BF";
        
        localStorage.dys_daysLeft = daysLeft;


    } else {

        setProgress(removed); 
        console.log(removed);
        daysContainer.style.display = "none";

        daysLeft = "15";
        console.log(daysLeft);

        waterNow.style.display = "block";
        circle.style.stroke = "#BEFFE3";

        removebutton.style.display = "none";

    };
});

//Local Storage


//Read Data to see if there is a watered date set in the local storage, then display the days left and show the plant and the plant information.
function readData() {
    console.log('readData called');
    //Does this modern browser support local storages?

    //Checks if there is anything in the local stroage
    if (typeof (Storage) !== "undefined") {

        //Then read data from local storage
        var dateWatered = localStorage.dys_DateWatered;
        console.log("Date watered is = " + dateWatered);

        console.log("The date I last watered the plant is" + dateWatered);
        console.log('dateWatered = ' + dateWatered);
       
        if ( dateWatered == null || dateWatered== '')
            {

                dateContainer.style.display = 'block';
                daysContainer.style.display = 'none';
    
                date_prompt.style.display = 'block';
                resetbutton.style.display = 'none';

                removebutton.style.display = "none";

            }
            else {

                fillup_bg();

                daysLeft= localStorage.dys_daysLeft;
                console.log("read Data daysleft = " + daysLeft);

                
                dateContainer.style.display = 'none';
                daysContainer.style.display = 'block';
                days.innerHTML = daysLeft;

                date_prompt.style.display = 'none';
                resetbutton.style.display = 'block';

                setProgress(daysLeft);
                removebutton.style.display = "block";

                
            }

    }

    else {

        //Sorry! No web storage support...
        alert ('This browser does NOT support local storage');
    
    }
}



function writeData() {
    console.log("writeData called");
    //Once again checks does this modern browser support local storages?
    if (typeof (Storage) !== "undefined") {
        
        localStorage.dys_DateWatered = dateInput.value;
         
        console.log("The date I last watered the plant is" + dateInput.value );

        //
        alert('Record ADDED.')
    }
    else {

        //Sorry! No web storage support...
        alert ('This browser does NOT support local storage');
    
    }
}

function restart(){
    // var daysLeft = "14";
    // console.log(daysLeft);
    waterNow.style.display = "none";
    daysContainer.style.display = 'block';
    removebutton.style.display = "block";

    daysLeft = "14";
    localStorage.dys_daysLeft = daysLeft;
    days.innerHTML = daysLeft;
    setProgress(daysLeft);
}

function removeData() {
    console.log('remove data called');
    if (typeof (Storage) !== "undefined"){
        if (confirm('Are you sure you want to add in a new watered date?')) {
            localStorage.removeItem("dys_DateWatered");
            localStorage.removeItem("dys_daysLeft");
            //
            dateContainer.style.display = 'block';
            daysContainer.style.display = 'none';

            date_prompt.style.display = 'block';
            resetbutton.style.display = 'none';

            waterNow.style.display = "none";
            removebutton.style.display = "none";

            setProgress("14");

        }
    } else {
        //Sorry! No Web Storage Support...
        alert ('This browser does NOT support local storage');
    }
}



