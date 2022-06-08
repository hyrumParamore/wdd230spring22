

// const datefield = document.querySelector(".last-modified");

// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);


// datefield.innerHTML = `<p> Last Modified: ${fulldate}</p>`;


let currentdate = document.lastModified;

document.querySelector('span').textContent = currentdate;

console.log(currentdate);
