// // *****************
// //   LOCAL STORAGE
// // *****************

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
    visit_heading.textContent = diff_day + " days since you last visited!";
}

// Converts the date into a string in the local storage
localStorage.setItem('last_visited', now_date);




// **************************
//   COUNTS PEOPLE VISITED
//              maybe...
// **************************




function openPage(evt, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
  }

