/*
7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.
*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

// Filtrar los videojuegos por género 'RPG'
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

// Verificar si existe al menos un videojuego con género 'RPG'
if (rpgGames.length > 0) {
    // Calcular la media de las puntuaciones de los juegos 'RPG'
    const averageScore = rpgGames.reduce((acumulador, game) => acumulador + game.score, 0) / rpgGames.length;
    console.log(averageScore); // Salida: 7.8
} else {
    console.log('No hay videojuegos con género RPG');
}




