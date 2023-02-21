


const tipCalculator = () => {
      const billAmount = parseInt(document.getElementById("billAmount").value);
      const billSharing = parseInt(document.getElementById("billSharing").value);
      const serviceExperience = String((document.getElementById("serviceExperience")).value);


      if (serviceExperience === "Excellent") {
            document.getElementById("output").textContent = (((20 / 100) * billAmount) / billSharing).toFixed(2) + " Each";
      }
      else if (serviceExperience === "Medium") {
            document.getElementById("output").textContent = (((10 / 100) * billAmount) / billSharing).toFixed(2) + " Each";
      }
      else if (serviceExperience === "NotSoGood") {
            document.getElementById("output").textContent = (((5 / 100) * billAmount) / billSharing).toFixed(2) + " Each";
      }
      else {
            document.getElementById("output").textContent = "Enter Valid Numbers";
      }

}

// const button = document.getElementById("calculate");
document.getElementById("calculate").addEventListener("click", tipCalculator)


// for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j].sal
//       }
// }

const arr = [[{ 'name': 'arohi', 'sal': 300000, 'age': 23 },
{ 'name': 'abc', 'sal': 200000, 'age': 20 },
{ 'name': 'abcsd', 'sal': 900000, 'age': 27 }],
[{ 'name': 'aarav', 'sal': 500000, 'age': 5 },
{ 'name': 'arush', 'sal': 600000, 'age': 25 }]]


let sum = 0;
arr.forEach((elements)=>{
elements.forEach((elements)=>{
      sum += elements.sal
})
})
console.log("sum of all salaries "+sum);


let arr2 = arr[0];
let sum2 = 0;
arr2.forEach((elements) => {
      sum2 += elements.sal;
})

console.log("sum of department1 salaries " + sum2)

let arr3 = arr[1];
let sum3 = 0;
arr3.forEach((elements) => {
      sum3 += elements.sal;
})
console.log("sum of department2 salaries " +sum3);



