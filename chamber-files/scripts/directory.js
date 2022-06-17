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



// Remove the previous cards so they don't show when changing between the cards and list.
// section.forEach((item)) => {
//   forEach 
//   item.remove()
// }


// ASYNC function
async function getBusinesses(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);

    const business = jsonObject['businesses'];
    business.forEach(displayBusinesses);
  }
}

getBusinesses(requestURL);


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
  card.appendChild(web);
  card.appendChild(pho);
  // card.appendChild(pob);
  
  document.querySelector('.cards').appendChild(card)

}


function displayTable(business) 
{
  let list_row = document.createElement('tr');
  let td_name = document.createElement('td');
  td_name.textContent = business.name + ' ' + business.lastname;

  let td_birthdate = document.createElement('td');
  td_birthdate.textContent = business.birthdate;

  list_row.appendChild(td_name);
  list_row.appendChild(td_birthdate);
  document.querySelector('table').appendChild(list_row);

}
