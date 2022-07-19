

// ****************
// Projects Page, Side Projects Tab Cards.
// This information is brought in through a JSON file.

const requestURL = 'https://hyrumparamore.github.io/wdd230spring22/1portfolio/json-files/json.json';


getBoxes(requestURL)

async function getBoxes(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);

    const box = jsonObject['boxes'];
    box.forEach(displayBoxes);
  }
}


function displayBoxes(boxes)
{
    
    var box = document.createElement('div');
    box.className = "side-project-boxes";

    let h2 = document.createElement('h2');
    let ex = document.createElement('p');
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.className = "images"

    h2.textContent = boxes.title; 
    ex.textContent = boxes.extra;   
    p.textContent = boxes.text;                           
    img.setAttribute('src', boxes.imageurl);                                     
    img.setAttribute('alt', `${boxes.title}`)


    box.appendChild(img);
    box.appendChild(h2);
    box.appendChild(ex);
    box.appendChild(p);

    document.querySelector('.this').appendChild(box);

}

