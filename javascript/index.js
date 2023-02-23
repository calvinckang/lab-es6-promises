// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error));



// Iteration 2 - using promises
// obtainInstruction("steak", 0)
//   .then((instruction1) => {
//     document.querySelector("#steak").innerHTML += `<li>${instruction1}</li>`
//     obtainInstruction("steak", 1)
//       .then((instruction2) => {
//         document.querySelector("#steak").innerHTML += `<li>${instruction2}</li>`
//         obtainInstruction("steak", 2)
//           .then((instruction3) => {
//             document.querySelector("#steak").innerHTML += `<li>${instruction3}</li>`
//             obtainInstruction("steak", 3)
//               .then((instruction4) => {
//                 document.querySelector("#steak").innerHTML += `<li>${instruction4}</li>`
//                 obtainInstruction("steak", 4)
//                   .then((instruction5) => {
//                     document.querySelector("#steak").innerHTML += `<li>${instruction5}</li>`
//                     obtainInstruction("steak", 5)
//                       .then((instruction6) => {
//                         document.querySelector("#steak").innerHTML += `<li>${instruction6}</li>`
//                         obtainInstruction("steak", 6)
//                           .then((instruction7) => {
//                             document.querySelector("#steak").innerHTML += `<li>${instruction7}</li>`
//                             obtainInstruction("steak", 7)
//                               .then((instruction8) => {
//                                 document.querySelector("#steak").innerHTML += `<li>${instruction8}</li>`
//                                 document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
//                               })
//                               .catch((err) => console.error(err))
//                           })
//                           .catch((err) => console.error(err))
//                       })
//                       .catch((err) => console.error(err))
//                   })
//                   .catch((err) => console.error(err))
//               })
//               .catch((err) => console.error(err))
//           })
//           .catch((err) => console.error(err))
//       })
//       .catch((err) => console.error(err))
//   })
//   .catch((err) => console.error(err))

obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .catch((err) => console.error(err))



// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...