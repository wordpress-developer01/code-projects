const team = {
  // Array to store player objects
  _players: [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Repl', lastName: 'Doi', age: 25 },
    { firstName: 'Daki', lastName: 'Dop', age: 25 }
  ],
  
  // Array to store game objects
  _games: [
    { opponent: 'Lions', teamPoints: 42, opponentPoints: 27 },
    { opponent: 'Tigers', teamPoints: 35, opponentPoints: 30 },
    { opponent: 'Bears', teamPoints: 50, opponentPoints: 45 }
  ],

  // Getter method to retrieve players
  get players() {
    return this._players;
  },

  // Getter method to retrieve games
  get games() {
    return this._games;
  },

  // Method to add a new player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  // Method to add a new game result
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Add a new player to the team
team.addPlayer('Bugs', 'Bunny', 76);

// Add a new game result
team.addGame('Titans', 100, 98);

// Log the list of players
console.log(team.players);

// Log the list of games
console.log(team.games);
