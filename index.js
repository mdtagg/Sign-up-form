
const names = 
[document.getElementById('first-name'),
document.getElementById('last-name')]

names.forEach(name => {
    name.addEventListener('focusout', testError)})

function testError(e) {
    let name = e.target.value
    console.log(name)
    if(name === "") {
        e.target.classList.add('error')
    }else {
        e.target.classList.remove('error')
    }
}


// const firstName = document.getElementById('first-name')
// firstName.addEventListener('keydown', (e) => firstName.textContent = e.target.value)
// firstName.addEventListener('focusout', error)

// const lastName = document.getElementById('last-name')
// lastName.addEventListener('keydown', (e) => lastName.textContent = e.target.value)
// lastName.addEventListener('focusout', error)

// function error(e) {
//     console.log(e.target.value)
//     let name = e.target.value
//     if(name === "") {
//         firstName.classList.add('error')
//     }else {
//         firstName.classList.remove('error')
//     }
// }