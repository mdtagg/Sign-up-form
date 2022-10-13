
const names = 
[document.getElementById('first-name'),
document.getElementById('last-name')]

names.forEach(name => {
    name.addEventListener('focusout', testName)})

function testName(e) {
    let name = e.target.value
    if(name === "") {
        e.target.classList.add('error')
    }else {
        e.target.classList.remove('error')
    }
}

const email = document.getElementById('email')
email.addEventListener('focusout', testEmail)

function testEmail(e) {
    let emailCheck = /^[A-z]+[@]{1}[A-z]+[.]{1}[A-z]/
    let string = e.target.value
    let test = emailCheck.test(string)
    if(!test) {
        e.target.classList.add('error')
    }else {
        e.target.classList.remove('error')
    }
}