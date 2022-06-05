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




// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = ("You have visited this website " + numVisits + " times.");
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// let days = todayDisplay / 60

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();

