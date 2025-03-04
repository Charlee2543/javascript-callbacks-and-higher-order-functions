//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const roomScore = [];
  let numberArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      // roomScore.push(operation(array[i]));
      numberArray = numberArray + 1;
    }
  }
   
  console.log(numberArray)
  return operation(Number(numberArray));

  // if (roomScore.length >= 5) {
  //   // console.log(roomScore.length)
  //   message = "ผ่านเกณฑ์ ✅";
  // } else {
  //   message = "ไม่ผ่านเกณฑ์ ❌";
  // }
  // console.log(roomScore); 
}

function operation(messageOperation) {
  // console.log(messageOperation);      
  let message = "";
  if (messageOperation >= 5) {
    message = "ผ่านเกณฑ์ ✅";
  } else {
    message = "ไม่ผ่านเกณฑ์ ❌";
  }
  return message
  // console.log(message); 
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, operation);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, operation);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, operation);
console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`)
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`)
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`)

