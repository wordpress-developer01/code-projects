let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let playAge = 22;

if (playAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (playAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} 

else if (playAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}

else if (playAge < 18) {
  console.log(`You will race at 12:30 am. Your race number is ${raceNumber}.`);
}

else {
  console.log("Please see the registration desk.");
}

