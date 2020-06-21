var target 

var data = JSON.parse(localStorage.getItem("motodata"))



var div = document.getElementById("motodiv")

    div.addEventListener("click", function(){
        var newdiv = document.getElementById("newdiv")
        var newdiv1 = document.getElementById("newdiv2")
        
        
        target = event.target.getAttribute("id")
        target = target.split(" ")
        for(var i= 0;i<data.length;i++){
            if (target[1] == i){
                var data1 = data[i]
                var container = document.createElement("div")
                container.style.background = "whitesmoke"
                container.style.width="40%"
                container.style.marginLeft="15%"
                container.style.padding="4%"
                container.style.float = "left"

                var p1 = document.createElement('p')
                
                
                
                p1.innerHTML = data1[0]+"<hr>"
                
                var p2 = document.createElement('p')
                var perdayprice = Number(data1[1])
                
                p2.innerHTML = "Price per day" + "->" +"Rs"+" " + data1[1]+"<hr>"
                
                var p3 = document.createElement('p')
                
                p3.innerHTML = data1[2]+"\n"+data1[3]+"<hr>"+data1[4]
                var p4 = document.createElement('p')
                
                p4.innerHTML = "Enter Number of days to book this bike"
                
                

                var days = document.createElement('input')
                days.id = "userinput1"
                
                
                var final = document.createElement('button')
                final.style.background = "green"
                final.style.color = "white"
                final.id = "finalbooking"
                
                final.innerHTML = "Click to get final Price"

                final.addEventListener('click',finalprice)
                

                function finalprice(){
                     
                   
                    
                   // alert(finalp)
                   var container1 = document.createElement("div")
                    container1.style.background = "whitesmoke"
                    container1.style.width="80%"
                    
                    container1.style.padding="4%"
                    container1.style.float = "left"

                    var finalp = 0
                    day = document.getElementById("userinput1").value
                    finalp = perdayprice * Number(day)

                    var fInalbooking = document.createElement('p')
                    fInalbooking.innerHTML = "You Final Booking Price will be:" + " "+ "Rs"+" "+ finalp+ "<hr>"
                    var finalbutton = document.createElement('button')
                    finalbutton.style.background = "green"
                    finalbutton.style.color = "white"
                    finalbutton.id = "finalbook"
                    
                    finalbutton.innerHTML = "Confirm"

                    var fInalbooking1 = document.createElement('p')
                    fInalbooking1.innerHTML = "please click the submit button to confirm."+"<hr>"+
                    "check your phone to see details" +"<hr>"+
                    "Pay after your ride!"+"<hr>"+"<h3>Happy Riding!!</h3>"

                    //To make the input values empty
                    document.getElementById("userinput1").value = " "


                    container1.append(fInalbooking,finalbutton,fInalbooking1)
                    newdiv1.append(container1)

                


                

                }


               container.append(p1,p2,p3,p4,days,final)
               newdiv.append(container)
            }
        }
        
        
        div1 = document.getElementById("motodiv")
        div.remove()
    })



    