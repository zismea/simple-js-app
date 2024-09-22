let pokemonRepository = (function() {
    let repository = [
        {name: 'Ninetales', height: 1, types: 'fire'},
        {name: 'Alakazam', height: 4, types: 'psychic'},
        {name: 'Jynx', height: 8, types: ['ice', 'psychic']},
    ];
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log('Pokemon is not valid');
        }
    }

    function getAll() {
        return repository;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({name: 'Poliwrath', height: 4, types: ['water', 'fighting']});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});