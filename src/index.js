fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(dogsData =>{
        // console.log(dogsData)
        dogsData.forEach(dog =>{
            buildRegisteredDogs(dog)
        })
    })


const tableBody = document.getElementById('table-body')
console.log(tableBody)
function buildRegisteredDogs(dog) {
    
}

































// let dogs;
// let newDog = document.getElementById('new-dog')
// let newSex = document.getElementById('new-sex')
// let newBreed = document.getElementById('new-breed')
// let wholeTable = document.getElementById('table-body')
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/dogs')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         dogs = data
//     })
//     let dogForm = document.getElementById('dog-form');
//     dogForm.addEventListener('submit', (event) => {
//         event.target.value;
//         event.preventDefault();
//     })
    
//     function tableBuilder (dogs){
//         dogs.forEach(dogs =>{
//             addDogToTable(dogs);
//         })
//         }
//         function addDogToTable(){
//             let row = document.createElement('tr')
//             let cell = document.createElement('td')
//         document.createElement('td').appendChild(wholeTable)
//         newDog.textContent = newDog.value
//         newSex.textContent = newSex.value
//         newBreed.textContent = newBreed.value
//     }

// })