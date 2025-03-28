const getSleepHours = (day) => {
 switch(day.toLowerCase()) {
  case 'monday':
   return 8;
  case 'tuesday':
   return 7;
  case 'wednesday':
   return 8;
  case 'thursday':
   return 7
  case 'friday':
   return 8;
  case 'saturday':
   return 7
  case 'sunday':
   return 8;
  default:
   return 'Error: invalid day';
  }
};


  const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
      console.log("you sleep enough");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("you sleep more than enough"); }
      else if(actualSleepHours < idealSleepHours) {
        console.log("you don't enough sleep"); }
      else {
        console.log('error');
      }
      };
    

  
console.log(calculateSleepDebt());
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log(getSleepHours('monday')); // should print 8
console.log(getSleepHours('tuesday')); // should print 7
console.log(getSleepHours('wednesday')); // should print 6
console.log(getSleepHours('thursday')); // should print 5
console.log(getSleepHours('friday')); // should print 8
console.log(getSleepHours('saturday')); // should print 9
console.log(getSleepHours('sunday')); // should print 7
