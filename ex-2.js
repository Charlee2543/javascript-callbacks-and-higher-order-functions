//Exercise #2: At Least Five Function
//นับตัวแรกนักเรียนที่ผ่าน
//ตรวจสอบว่าใครผ่านเกญต์บ้าง

function atLeastFive(array, operation) {
	// Start coding here
	let scorePass = 0;
	for (let item of array) {
		if (item > 70) {
			scorePass += 1;
			// console.log(scorePass);
		}
	}
	return operation(scorePass);
}

// const checkPass = (number) => {
// 	let student = "";
// 	if (number >= 5) {
// 		student = `Pass✅`;
// 	} else {
// 		student = `Not Pass❌`;
// 	}
// 	return student;
// };

const checkPass = (number) => {
	return number >= 5 ? `Pass✅` : `Not Pass❌`;
};
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkPass);
console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkPass);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkPass);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);
