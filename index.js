
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

const passwords = [document.getElementById('first-password'),
document.getElementById('confirmed-password')]

passwords.forEach(password => {
    password.addEventListener('focusout', checkPassword)
})

function checkPassword(e) {
    let password = e.target.value
    console.log(password)
    let passwordFail = document.getElementById('password-requirements')
    console.log(passwordFail)
    let passwordCheck = /[A-Z]?[a-z]?[@#$%]{1,4}?/
    let test = passwordCheck.test(password)
    let passwordLength = password.length
    console.log(test)
    if(test && passwordLength >= 10) {
        e.target.classList.remove('error')
        passwordFail.textContent = ""
    }else if(test && passwordLength < 10){
        passwordFail.textContent = 'Password must be at least 10 characters '
        e.target.classList.add('error')
    }else {
        e.target.classList.add('error')
        passwordFail.textContent = 'Password must contain at least 1 upper case letter 1 lower case letter and a special symbol (@#$%)'
    }
}