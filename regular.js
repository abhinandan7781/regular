// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);
// })
// mypromise
//   .then((result) => {
//     console.log(result); // logs after 2 sec
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("P2"); // logs after another 4 sec
//         resolve();
//       }, 4000);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1");
//         console.log("Promise 1 resolved");
//     }, 2000);
// })

//   function somethingsomwthing(messagework, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise" + messagework);
//             console.log("promise" + messagework);
//         }, delay);
//     });
//   }

//   promise1.then(()=>{
//     return somethingsomwthing("1", 2000);
//   })
//   .then(() => {
//     return somethingsomwthing("2", 3000);
//   })
//   .then(() => {
//     return somethingsomwthing("3", 4000);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })


// const assignments = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Assignments completed");
//     }, 2000);
// })

// async function completeAssignments() {
//     var assignmentdetail = await assignments;
//     console.log("assign checking", assignmentdetail);
// }
// completeAssignments();

// async function apidata(){
//     const data = await fetch("https://dummyjson.com/users")
//     const mydata = await data.json();
//     console.log(data);
// }
// apidata()




// echo "# regular" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/abhinandan7781/regular.git
// git push -u origin main