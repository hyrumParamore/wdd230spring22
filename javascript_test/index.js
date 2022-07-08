// local storage

localStorage.setItem('msg1', 'Hello Permanent');

sessionStorage.setItem('msg2', 'Hi Temporary');

console.log(localStorage.getItem('msg1'));




// Days since last visit

let visit_heading = document.querySelector('.visited');





// Gets the date

let now_date = new Date();



// Converts the string in the local storage back to the date. NEED

// TO DO IT EVERYTIME YOU NEED TO PULL DATA OUT OF THE STORAGE!!!



// This is this weekends homework to calculate the difference in days they visited

let stored_date = localStorage.getItem('last-visited');

let last_date = new Date(stored_date);



if(!stored_date) {

    visit_heading.textContent = "Welcome!";

}

else {

    // calc the diff to the two dates

    let diff_time = now_date.getTime() - last_date.getTime();



    let diff_day = Math.round(diff_time/(1000 * 60 * 60 * 24));



    visit_heading.textContent = diff_day + " days since your last visit!";

}



// Converts the date into a string in the local storage

localStorage.setItem('last_visited', now_date);
