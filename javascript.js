
fetch('https://www.breakingbadapi.com/api/characters')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    //console.log(json)
    // you could pass the data to another function or simply write your js code that would modify the html over here
    // example:
    // create a ul list then loop over the data to create li elements and append them to ul
    const ch = json;
    console.log(ch);
   // console.log(ch[0].gender);
    const myDiv = document.querySelector("#container");
    const myDiv2 = document.querySelector("#container2");
    const myDiv3 = document.querySelector("#container3");
    myDiv2.style.display="none" //source https://www.w3schools.com/Jsref/prop_style_displa

    btns=[]
    btns1=[]
  
    for(let i=0; i<ch.length; i++){
                                                       //  let n=ch[i].name
        const divs = document.createElement("div");
        const img = document.createElement("img");
        img.style.width ='500px';// https://www.techiedelight.com/change-size-of-image-with-javascript/
       // img.style.height="500px"
        const newDiv=document.createElement("div")
        const text = document.createElement("h4")
        const text1 = document.createElement("p")
        const btn = document.createElement("button")
        const btn1= document.createElement("button")
        const srchFld = document.querySelector("#srchFld")
        const sechBtn=document.querySelector("#srch")
        const AboutBtn=document.querySelector("#About")
        const Favo = document.querySelector("#Favorite")
        const Home = document.querySelector("#Home")
        //const sechBtn1=document.querySelector("#srch1")
        btn.innerText="More  info"
        btn1.innerText="Add to Favorite"
        text.innerText = ch[i].name;
        text1.innerText = "Occupation: "+ch[i].occupation[0];
        img.src = ch[i].img
        divs.className="id"
        myDiv.className="newD"
        btn.className="picB"
        myDiv2.className="newD"
        myDiv3.className="newD"
        btn1.className="picBA"
        btns[i]=btn
        btns1[i]=btn1
        
        divs.append(img)
        newDiv.append(text)
        newDiv.append(text1)
        newDiv.append(btn)
        newDiv.append(btn1)
        divs.append(newDiv)
        myDiv.append(divs)
        const pop1=document.getElementById("1")
        const pop2=document.getElementById("2")
        const pop3=document.getElementById("3")
        const pop4=document.getElementById("4")
        const pop5=document.getElementById("5")
        const pop6=document.getElementById("6")
       /* sechBtn1.addEventListener("click", function() {
         
          document.querySelector('#container2').innerHTML = ""
        });*/

        btns[i].addEventListener("click", function() {
         //alert("d " + i);
         pop1.innerText="Name: "+ch[i].name;
         pop2.innerText="Nickname: "+ch[i].nickname;
         pop3.innerText="Birthday: "+ch[i].birthday;
         pop4.innerText="Occupation/s: "+ch[i].occupation;
         pop5.innerText="Portrayed: "+ch[i].portrayed;
         pop6.innerText="Status: "+ch[i].status;

          modal.style.display = "block";
        });

        btns1[i].addEventListener("click", function() {
              text.innerText = ch[i].name
              img.src = ch[i].img
              divs.append(img)
              newDiv.append(text)
              //newDiv.append(text1)
              newDiv.append(btn)
              divs.append(newDiv)
              myDiv3.append(divs)
              
          
          alert("Added to favorit");
          
         });

         Favo.addEventListener("click", function() {
         
          myDiv3.style.display="grid" 
            myDiv2.style.display="none"
            myDiv.style.display="none"
     });
     Home.addEventListener("click", function() {
      myDiv3.style.display="none" 
        myDiv2.style.display="none"
        myDiv.style.display="grid"
 });

        AboutBtn.addEventListener("click", function() {
          
 
          modal1.style.display = "block";
         });
        

        sechBtn.addEventListener("click", function() {
         
          if(i===0){document.querySelector('#container2').innerHTML = ""}
          
            if(ch[i].name.includes(srchFld.value)){ //https://www.w3schools.com/jsref/jsref_includes.asp
            
              
              console.log(srchFld.value)
              text.innerText = ch[i].name
              img.src = ch[i].img
              divs.append(img)
              newDiv.append(text)
              newDiv.append(text1)
              newDiv.append(btn)
              divs.append(newDiv)
              myDiv2.append(divs)
              myDiv2.style.display="grid" 
            myDiv.style.display="none"
            }//source https://stackoverflow.com/questions/42334747/how-can-elements-made-invisible-by-displaynone-be-made-visible-again-with-javas
         // }
            else if(srchFld.value===""){
              myDiv2.style.display="none"
            myDiv.style.display="grid"
            //myDiv2.innerHTML('')
            }

          
         });
 

         
        
    }
   // for(i=0;i<imgs.length;i++){
    
    
    //}
  })

 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
  

  