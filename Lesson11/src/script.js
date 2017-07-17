window.addEventListener('load', function(){
    var out = document.getElementById('output');
    function print() {
        for(let arg of arguments) {
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(arg));
            console.log(null === out);
            out.appendChild(p);
        }
    }   
    print('loaded');
    
    var ex = document.querySelector('div.ex');
    ex.addEventListener('click', function(event){
       for(let prop in event) {
           print("event." + prop + " = " + event[prop]);
       }
        //ex.innerHTML = event.type;
        event.target.innerHTML = event.type;
        /*
        event.type = click
        event.screenX = 882
        event.screenY = 118
        event.clientX = 56
        event.clientY = 37
        event.offsetX = 47
        event.offsetY = 28
        event.ctrlKey = false
        event.shiftKey = false
        event.altKey = false
        event.which = 1
        event.target
        event.srcElement 
        event.stopPropagation()
        event.preventDefault()
        event.eventPhase = 2
        */
    });
    
    function changeColor(event) {
        event.target.style.backgroundColor = "red";
    }
    
    function showCoords(event) {
        event.target.innerHTML = "x: " + event.offsetX + " y: " + event.offsetY;
    }
    function clearColorText(event) {
        event.target.innerHTML = "";
        event.target.style.background = "white";
    }
    
    ex.addEventListener('mouseover', changeColor);
    ex.addEventListener('mousemove', showCoords);
    ex.addEventListener('mouseout', clearColorText);
    
//    out.addEventListener('mouseover', changeColor);
//    out.addEventListener('mousemove', showCoords);
//    out.addEventListener('mouseout', clearColorText);
    
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    
    first.addEventListener('click', function(e){
        this.style.backgroundColor = "gray"; 
        print("target: " + e.target.id + " this: " + this.id + " phase: " + e.eventPhase); 
    }, false);
    
    second.addEventListener('click', function(e){
        e.stopImmediatePropagation();
        this.style.backgroundColor = "red"; print("target: " + e.target.id + " this: " + this.id + " phase: " + e.eventPhase);  
    }, false);
    
    third.addEventListener('click', function(e){
        this.style.backgroundColor = "magenta"; print("target: " + e.target.id + " this: " + this.id + " phase: " + e.eventPhase);        
    }, false);
    
    third.addEventListener('contextmenu', function(e){
       print("contextmenu: " + e.target.id); 
        e.preventDefault();
    });
    
    var secret = document.getElementById('secret');
    // event.key
    // event.keyCode
    secret.addEventListener('keydown', function(e){
        //if(e.altKey && e.shiftKey) {
//            for(let prop in e) {
//               print("event." + prop + " = " + e[prop]);
//           } 
        //}
        //e.preventDefault();
        //e.target.value += "*";
        if(e.keyCode > '9'.charCodeAt(0) || e.keyCode < '0'.charCodeAt(0)) {
            e.preventDefault();
        }      
    });
});