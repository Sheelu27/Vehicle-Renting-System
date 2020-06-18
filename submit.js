var target 

var data = JSON.parse(localStorage.getItem("motodata"))


var div = document.getElementById("motodiv")

    div.addEventListener("click", function(){
        var newdiv = document.getElementById("newdiv")
        
        
        
        target = event.target.getAttribute("id")
        target = target.split(" ")
        for(var i= 0;i<data.length;i++){
            if (target[1] == i){
                var data1 = data[i]
                var container = document.createElement("div")
                container.style.background = "whitesmoke"
                container.style.width="50%"
                container.style.marginLeft="15%"
                container.style.padding="4%"

                var p1 = document.createElement('p')
                
                
                
                p1.innerHTML = data1[0]+"<hr>"
                
                var p2 = document.createElement('p')
                
                p2.innerHTML = "Price per day" + "->" +"Rs"+" " + data1[1]+"<hr>"
                
                var p3 = document.createElement('p')
                
                p3.innerHTML = data1[2]+"\n"+data1[3]+"<hr>"+data1[4]
                var p4 = document.createElement('p')
                p4.innerHTML = "Enter Number of days to book this bike"
                
                

                var days = document.createElement('input')
                
                
                var final = document.createElement('button')
                final.style.background = "green"
                final.style.color = "white"
                final.innerHTML = "Click to get final Price"


               container.append(p1,p2,p3,p4,days,final)
               newdiv.append(container)
            }
        }
        
        
        div1 = document.getElementById("motodiv")
        div.remove()
    })



    