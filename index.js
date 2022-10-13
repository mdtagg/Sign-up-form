
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
    let emailCheck = /^\w+[@]{1}[A-z]+[.]{1}[A-z]{3}/
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
    password.addEventListener('focusout', confirmPasswords)
    password.addEventListener('focusout', checkPassword)
    
})

let firstPassword = ""
let secondPassword = ""

function confirmPasswords(e) {
    if(e.target.id === "first-password") {
        firstPassword = e.target.value
    }else {
        secondPassword = e.target.value
    }
}

function checkPassword(e) {
    let password = e.target.value
    let passwordFail = document.getElementById('password-requirements')
    let passwordCheck = /[A-Z]?[a-z]?[@#$%]{1,4}?/
    let test = passwordCheck.test(password)
    let passwordLength = password.length

    if(firstPassword !== secondPassword) {
        document.getElementById('first-password').classList.add('error')
        document.getElementById('confirmed-password').classList.add('error')
        passwordFail.textContent = "Passwords do not match"
        return
    }
    else if(test && passwordLength >= 10) {
        document.getElementById('first-password').classList.remove('error')
        document.getElementById('confirmed-password').classList.remove('error')
        passwordFail.textContent = ""
    }else if(test && passwordLength < 10){
        passwordFail.textContent = 'Password must be at least 10 characters '
        e.target.classList.add('error')
    }else {
        e.target.classList.add('error')
        passwordFail.textContent = 'Password must contain 1 upper case letter,1 lower case letter, a special symbol (@#$%) and be at least 10 characters long'
    }
}

let first_password = document.getElementById('first-password')
let second_password = document.getElementById('confirmed-password')

const submit = document.getElementById('form-submit')
submit.addEventListener('click', submitTest)

function submitTest() {
    
    let allInputs = [document.getElementById('first-name'),
    document.getElementById('last-name'),
    document.getElementById('email'),
    document.getElementById('phone-number'),
    document.getElementById('first-password'),
    document.getElementById('confirmed-password')]

    allInputs.forEach(input => {

        if(input.value === "") {
            input.classList.add('error')
        }
        
    })
    let test = document.getElementsByClassName('error')
    if(test.length !== 0) {
        return
    }else {
        document.getElementById('my-form').submit()
    }
}

