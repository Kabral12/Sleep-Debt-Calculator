const getSleepHours= day => {
switch (day){
  case 'monday' :
  return 8;
  break;
  case 'tuesday' :
  return 7;
  break;
  case 'wednesday' :
  return 6;
  break;
  case 'thursday' :
  return 5;
  break;
  case 'friday' :
  return 7;
  break;
  case 'saturday' :
  return 8;
  break;
  case 'sunday' :
  return 6;
  break;
  default: 
  return 'Error';
  break;
}
};

const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);

    if (actualSleepHours === idealSleepHours){
      console.log('Great, you got the perfect amount of sleep');
    }
    else if (actualSleepHours > idealSleepHours){
console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Get some rest.');
 }
    else if (actualSleepHours < idealSleepHours){
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
    else{
      console.log('Something went wrong, check your code');
    }
};


calculateSleepDebt();

