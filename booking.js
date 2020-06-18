var loginbtn = document.getElementById('loginbtn')
var signupbtn = document.getElementById('signupbtn')





function signup(){
    event.preventDefault()
    location.href = "booking.html"
}

function login(){
    event.preventDefault()
    location.href = "booking.html"

}
signupbtn.addEventListener('click',signup)
loginbtn.addEventListener('click',login)