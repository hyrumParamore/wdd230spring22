const search_term = document.getElementById('search_q')
const search_btn = document.getElementById('search-btn')

// Capitalize the first letter of the sentence.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// api https://pokeapi.co/docs/v2/pokemon
const getPokemonData = async term => {
        
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
    const response = await fetch(url)

    const pokemon = await response.json()

    // Update ui with data.
    document.getElementById('update-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('update-name').innerHTML = capitalizeFirstLetter(pokemon.name);
    document.getElementById('update-hp').innerHTML = `HP ${pokemon.stats[0].base_stat}`;
    document.getElementById('update-type').innerHTML = capitalizeFirstLetter(`${pokemon.types[0].type.name}`)
    document.getElementById('ability-1').innerHTML = capitalizeFirstLetter(`${pokemon.abilities[0].ability.name}`)
    document.getElementById('ability-2').innerHTML = capitalizeFirstLetter(`${pokemon.abilities[1].ability.name}`)
    document.getElementById('ability-3').innerHTML = capitalizeFirstLetter(`${pokemon.moves[0].move.name}`)
    document.getElementById('update-weight').innerHTML = `${pokemon.weight}kg`
    document.getElementById('update-height').innerHTML = `0.${pokemon.height}m`

}

search_btn.addEventListener('click', () => getPokemonData(search_term.value))