var about = document.getElementById("option1")
var contact = document.getElementById("option3")


function aboutit(){
    event.preventDefault()
    location.href = "about.html"
}

function contactit(){
    event.preventDefault()
    location.href = "Contact.html"

}

about.addEventListener('click',aboutit)
contact.addEventListener('click',contactit)
