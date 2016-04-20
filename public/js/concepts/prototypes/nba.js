function nba(teamName) {
  this.team = teamName;
}

nba.prototype.printTeamName = function() {
  console.log(this.team);
}

var league = new nba("Cavaliers");
league.printTeamName(); // prints: Cavaliers
