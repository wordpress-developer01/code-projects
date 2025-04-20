class School {
constructor(name, level, numberOfStudents) {
  this._numberOfStudents = numberOfStudents;
  this._level = level;
  this._name = name;
}

get numberOfStudents() {
  return this._numberOfStudents;
}

get level() {
  return this._level;
}

get name() {
  return this._name;
}

quickFacts() {
  console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
}

static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);

    return substituteTeachers[randomIndex];
}

set NumberOfStudents(newNumberOfStudents) {
  if(typeof newNumberOfStudents === 'number') {
    this._newNumberOfStudents;
  } else {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
}


}


class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
   super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
      this._numberOfStudents = numberOfStudents;
      this._name = name;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get name() {
    return this._name;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }


}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;

