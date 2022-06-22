const requestURL = 'https://hyrumparamore.github.io/wdd230spring22/chamber-files/json-files/directory.json';
// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// .THEN function
// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });




function showCards() {
  let section2 = document.querySelectorAll('tr');
  section2.forEach((tr) =>
    tr.remove());
  getBusinesses(requestURL);
}

getBusinesses(requestURL)





function showTable() {
  let section = document.querySelectorAll('.cards section');
  section.forEach((cards) =>
    cards.remove());
  getTable(requestURL);
}



// let button2 = document.querySelector('#button2');


// let button1 = document.querySelector('#button1');



// ASYNC function
async function getTable(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);

    const business = jsonObject['businesses'];
    // business.forEach(displayBusinesses);
    business.forEach(displayTable);
  }
}

async function getBusinesses(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);

    const business = jsonObject['businesses'];
    business.forEach(displayBusinesses);
    // business.forEach(displayTable);
  }
}

// getTable(requestURL);
// getBusinesses(requestURL);


function displayBusinesses(business)
{
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let add = document.createElement('p');
  let web = document.createElement('p');
  let pho = document.createElement('p');
  // let pob = document.createElement('p');
  let img = document.createElement('img');

  h2.textContent = business.name; //+ ' ' + business.lastname; // Same as v
  add.textContent = business.address;    //   v
  web.textContent = business.website;
  pho.textContent = business.phone;
  // pob.textContent = `${business.birthplace}`;                               //   v
  img.setAttribute('src', business.imageurl);                                     //   v
  img.setAttribute('alt', `${business.name}`) // This :)


  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(add);
  card.appendChild(pho);
  card.appendChild(web);
  // card.appendChild(pob);
  
  document.querySelector('.cards').appendChild(card)

}


function displayTable(business) 
{
  let list_row = document.createElement('tr');
  let td_name = document.createElement('td');
  td_name.textContent = business.name;

  let td_address = document.createElement('td');
  td_address.textContent = business.address;

  let td_phone = document.createElement('td');
  td_phone.textContent = business.phone;

  let td_website = document.createElement('td');
  td_website.textContent = business.website;


  list_row.appendChild(td_name);
  list_row.appendChild(td_address);
  list_row.appendChild(td_phone);
  list_row.appendChild(td_website);
  document.querySelector('table').appendChild(list_row);

}
