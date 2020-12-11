// //Local Storage

// var dateWateredArray = new Array();

// function readData() {
//     console.log('readData called');
//     //Does this modern browser support local storages?
//     //Checks if there is anything in the local stroage
//     if (typeof (Storage) !== "undefined") {
        
//         //Then read data from local storage
//         dateWateredStr = localStorage.dys_DateWatered;

//         console.log("The date I last watered the plant is" + dateWateredStr);

//         if (typeof (dateWateredStr) !=="undefined") { //if there is something then display it
//             //Then convert data string into array
//             dateWateredArray = dateWateredStr.split(",");
//             //Diisplay data screen
//             date.value = dateWateredArray[0];
//         }

//         else {//if not then
//             date.value = "";
//         }

//     }

//     else {

//         //Sorry! No web storage support...
//         alert ('This browser does NOT support local storage');
    
//     }
// }

// function writeData() {
//     console.log("writeData called");
//     console.log('readData called');
//     //Once again checks does this modern browser support local storages?
//     if (typeof (Storage) !== "undefined") {
//         //Add data to array
//         dateWateredArray.push(date.value);
//         //Convert arrays into data strings
//         dateWateredStr = dateWateredArray.join();
//         //save data strings to local storage
//         localStorage.dys_DateWatered = dateWateredStr;
//         //
//         alert('Record ADDED.')

//     }
//     else {

//         //Sorry! No web storage support...
//         alert ('This browser does NOT support local storage');
    
//     }
// }



