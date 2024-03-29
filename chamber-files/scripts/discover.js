const images = document.querySelectorAll('.images');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preLoadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}


const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preLoadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
);


images.forEach(image => {
    io.observe(image); 
})



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

let stored_date = localStorage.getItem('last_visited');

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









// // initialize display elements
// const todayDisplay = document.querySelector(".today");
// const visitsDisplay = document.querySelector(".visits");

// // get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = ("You have visited this website " + numVisits + " times.");
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// // let days = todayDisplay / 60

// // increment the number of visits.
// numVisits++;
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);

// // show todays date.
// todayDisplay.textContent = Date.now();

