function showUpdateResearch()
{
    
    var a = document.getElementsByClassName('r');
    if(a[0].className !== "r repeat"){
        var b = document.getElementById('para1');
        for(var i=0;i<a.length;i++){
                
            
                var ul = makeUls();
                b.appendChild(ul);
               
        }
        a[0].className += " repeat";
    }
}


function showUpdateTeachings()
{
    var a = document.getElementsByClassName('t');
    if(a[0].className !== "t repeat"){
    var b = document.getElementById('para2');
    for(var i=0;i<a.length;i++){
            
          
            var ul = makeUls();
            b.appendChild(ul);
            
     }
     a[0].className += " repeat";
 }
}

function showUpdatePublications()
{
    var a = document.getElementsByClassName('pub');
    if(a[0].className !== "pub repeat"){
        
    var b = document.getElementById('para3');
    for(var i=0;i<a.length;i++){
            
          
            var ul = makeUls();
            b.appendChild(ul);
            
     }
     
     a[0].className += " repeat";
    }

}

function makeUls(){
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            
            var anchorOne = document.createElement('a');
            anchorOne.setAttribute('href',"#");
            anchorOne.innerText = "Edit";
            li.appendChild(anchorOne);
            ul.appendChild(li);

            var li = document.createElement('li');
            var anchorTwo = document.createElement('a');
            anchorTwo.setAttribute('href',"#");
            anchorTwo.innerText = "Delete";
            li.appendChild(anchorTwo);
            ul.appendChild(li);
            return ul;
}



   
