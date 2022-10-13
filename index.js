
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

const phoneNumber = document.getElementById('phone-number')
phoneNumber.addEventListener('focusout', testPhoneNumber)

function testPhoneNumber(e) {
    let phoneNumber = e.target.value
    console.log(phoneNumber.length === 10)
    if(phoneNumber.length === 10) {
        e.target.classList.remove('error')
    }else {
        e.target.classList.add('error')
    }
}