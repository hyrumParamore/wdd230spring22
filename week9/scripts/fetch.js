const url = "https://pokeapi.co/api/v2/pokemon/ditto";

// async function getpokemon(url) {
//     const response = await fetch(url);
    
//     if(response.ok) {
//         console.log(response);
//         const data = await response.json();

//         console.log(data);
//         console.log(data.name);
//     }
// };

// getpokemon(url)

// console.log('second');



fetch(url).then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        alert('error', response);
    }
}).then((data) => {
    retults = data;
    console.log('first', results);
});

console.log('second');