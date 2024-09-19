let pokemonRepository = (function() {
    let pokemonList = [
        {name: 'Ninetales', height: 1, types: 'fire'},
        {name: 'Alakazam', height: 4, types: 'psychic'},
        {name: 'Jynx', height: 8, types: ['ice', 'psychic']},
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }    
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    }
})();

let pokemons = pokemonRepository.getAll();

pokemons.forEach(pokemon => {
    document.write(pokemon.name + "| height: " + pokemon.height);
    if (pokemon.height <= 2) {
        document.write(": Wow, she is tiny!")};
});