var about = document.getElementById("option1")
var contact = document.getElementById("option3")
var home = document.getElementById("option4")
var login = document.getElementById("option2")


var product = [["Royal Enfield Bullet",2000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"],["Harley-Davidson",4000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"],["Harley-Davidson",4000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"]
,["Harley-Davidson",6000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"],["KTM",3000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"],["Royal",2000,"Insured:Yes","Color options: Forest Green","Fuel economy:30 to 40 km/l"]]


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
    var motodata = JSON.stringify(product)
    localStorage.setItem("motodata",motodata)

    event.preventDefault()
    
    location.href = "login.html"
    
}



about.addEventListener('click',aboutit)
contact.addEventListener('click',contactit)
home.addEventListener('click',homein)
login.addEventListener('click',signin)




