
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  
//   // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();





// // **********************
// //    SNACKBAR POP-UP
// // **********************
// function Snackbar() {
//     // Get the snackbar DIV
//     var x = document.getElementById("snackbar");
  
//     // Add the "show" class to DIV
//     x.className = "show";
  
//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//   }




// **********************
//      Scroll Bar
// **********************

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}




// // ****************
// // Projects Page, Side Projects Tab Cards.
// // This information is brought in through a JSON file.

// const requestURL = 'https://hyrumparamore.github.io/wdd230spring22/1portfolio/json-files/json.json';


// getBoxes(requestURL)

// async function getBoxes(requestURL) {
//   const response = await fetch(requestURL);
//   if (response.ok) {
//     const jsonObject = await response.json();
//     console.log(jsonObject);

//     const box = jsonObject['boxes'];
//     box.forEach(displayBoxes);
//   }
// }


// function displayBoxes(boxes)
// {
    
//     var box = document.createElement('div');
//     box.className = "side-project-boxes";

//     let h2 = document.createElement('h2');
//     let ex = document.createElement('p');
//     let p = document.createElement('p');
//     let img = document.createElement('img');
//     img.className = "images"

//     h2.textContent = boxes.title; 
//     ex.textContent = boxes.extra;   
//     p.textContent = boxes.text;                           
//     img.setAttribute('src', boxes.imageurl);                                     
//     img.setAttribute('alt', `${boxes.title}`)


//     box.appendChild(img);
//     box.appendChild(h2);
//     box.appendChild(ex);
//     box.appendChild(p);

//     document.querySelector('.this').appendChild(box);

// }


