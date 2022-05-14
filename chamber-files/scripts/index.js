let currentdate = document.lastModified;

document.querySelector('.javascript-date').textContent = currentdate;



// select the elements to manipulate (output to)
const datefield = document.querySelector("span");
// const datefieldUK = document.querySelector("span"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<p>${fulldate}</p>`;

// Don't think I need this vv. It only gives me an error when it is in the code.
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



function myFunction() {
    var x = document.querySelector(".page-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 
  }



