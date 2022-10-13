
//Names section
let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')

const names = 
[firstName,lastName]

names.forEach(name => {
    name.addEventListener('focusout', (e) => {
        if(e.target.value === "") {
            e.target.classList.add('error')
        }else {
            e.target.classList.remove('error')
        }
    })})

//Email section

const email = document.getElementById('email')
email.addEventListener('focusout', testEmail)

function testEmail(e) {
    let emailCheck = /^\w+[@]{1}[A-z]+[.]{1}[A-z]{3}/
    let test = emailCheck.test(e.target.value)
    if(!test) {
        e.target.classList.add('error')
    }else {
        e.target.classList.remove('error')
    }
}

//Phone number section

const phoneNumber = document.getElementById('phone-number')
phoneNumber.addEventListener('focusout', testPhoneNumber)

function testPhoneNumber(e) {
    let phoneNumberDigits = e.target.value.length
    if(phoneNumberDigits === 10) {
        e.target.classList.remove('error')
    }else {
        e.target.classList.add('error')
    }
}

//Passwords section

let firstPassword = document.getElementById('first-password')
let secondPassword = document.getElementById('confirmed-password')

const passwords = [firstPassword,secondPassword]

passwords.forEach(password => {
    password.addEventListener('focusout', confirmPasswords)
    password.addEventListener('focusout', checkPassword)
})

function confirmPasswords(e) {
    if(e.target.id === "first-password") {
        firstPassword.value = e.target.value
    }else {
        secondPassword.value = e.target.value
    }
}

function checkPassword(e) {
    let password = e.target.value
    let passwordFail = document.getElementById('password-requirements')
    let passwordCheck = /[A-Z]?[a-z]?[@#$%]{1,4}?/
    let test = passwordCheck.test(password)
    let passwordLength = password.length

    if(firstPassword.value !== secondPassword.value) {
        firstPassword.classList.add('error')
        secondPassword.classList.add('error')
        passwordFail.textContent = "*Passwords do not match"
        return
    }
    else if(test && passwordLength >= 10) {
        firstPassword.classList.remove('error')
        secondPassword.classList.remove('error')
        passwordFail.textContent = ""
    }else {
        e.target.classList.add('error')
        passwordFail.textContent = '*Password must contain at least 1 upper case letter,1 lower case letter, a special symbol (@#$%) and be at least 10 characters long'
    }
}

const submit = document.getElementById('form-submit')
submit.addEventListener('click', submitTest)

function submitTest() {
    
    let allInputs = [firstName,lastName,email,
        phoneNumber,firstPassword,secondPassword]

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

