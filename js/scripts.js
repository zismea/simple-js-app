let pokemonList = [
    {name: 'Ninetales', height: 1, types: 'fire'},
    {name: 'Alakazam', height: 4, types: 'psychic'},
    {name: 'Jynx', height: 8, types: ['ice', 'psychic']},
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 2) {
        document.write(pokemonList[i].name + ": Wow, she is tiny!");
    } else if (pokemonList[i].height > 2 && pokemonList[i].height < 6) {
        document.write(pokemonList[i].name + ": He is not too dangerous!")
    } else {
        document.write(pokemonList[i].name + ": Please be careful!")
    }
}