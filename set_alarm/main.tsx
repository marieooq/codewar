function setAlarm(employed: boolean, vacation: boolean) {
  return employed && !vacation ? true : false;
}

// better solution
// function setAlarm(employed: boolean, vacation: boolean) {
//   return employed && !vacation;
// }
