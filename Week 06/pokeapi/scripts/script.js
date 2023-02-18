const pokemonContainer = document.querySelector(".pokemon-container");


//This function fetches pokemon based on ID. 
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then (res => res.json())
    .then (data => {
        createPokemon(data);
    });
}


//This function allows us to enter the number of Pokemon we want to see, and return it up to that number. 
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    imgContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(imgContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);

}


fetchPokemons(15);