var about = document.getElementById("option1")
var contact = document.getElementById("option3")
var home = document.getElementById("option4")
var login = document.getElementById("option2")


function aboutit(){
    event.preventDefault()
    location.href = "about.html"
}

function contactit(){
    event.preventDefault()
    location.href = "Contact.html"

}

function homein(){
    event.preventDefault()
    location.href = "index.html"
}

function signin(){
    event.preventDefault()
    location.href = "login.html"
}

about.addEventListener('click',aboutit)
contact.addEventListener('click',contactit)
home.addEventListener('click',homein)
login.addEventListener('click',signin)

