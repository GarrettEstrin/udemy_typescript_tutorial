// ? makes the arg optional
// decarling an arg with a default value is how to have a default value
// function printAddress(street: string, streetTwo?: string, state = "AZ"){
//   console.log(street);
//   if(streetTwo){
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', "Suite 540");
// printAddress('123 Any St', "Suite 540", "UT");

// // Rest arguments - array of values
// function lineupCard(team: string, ...players: string[]){
//   console.log("Team: " + team);
//   for(let player of players){
//     console.log(player);
//   }
// }

// lineupCard("Ducks", "Getzlaf", "Selanne", "Kariya");