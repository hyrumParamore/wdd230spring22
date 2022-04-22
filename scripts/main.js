// Javascript review

// Sequence

// showing variables and date
let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

// Changing the elements in the html and putting javascript into it
// selecting elements in HTML and DOM manipulation
document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>Subtitle</h2>'

let newpara = document.createElement('p');
newpara.textContent = 'This is my paragraph';
document.querySelector('div').appendChild(newpara);

// Displaying an image through Javascript
document.querySelector('img').setAttribute('src', 'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg' )

document.querySelector('img').setAttribute('width', '400');

document.querySelector('img').classList.add('add_border');


// Function
function addayear(yr) {
    console.log(yr);
}
addayear(year);


// SELECTION

// if clause

if (year == 2022) {
    console.log('current year');
}



// REPETITION (loops)

const myarray = ['SCS121b', 'WDD230', 'CIT111'];

function makelist(item){
    // add to the list the "+" to make it a continuing list
    document.querySelector('div').innerHTML += '<li>' + item + '</li>'
    // or document.querySelector('div').innerHTML += `<li> ${item} </li>`
}

// Thats a for loop :)
myarray.forEach(makelist);


// This is all I need with JS for Week 1

// lastModified property that works with the document

let currentdate = document.lastModified;

document.querySelector('span').textContent = currentdate;

console.log(currentdate);

